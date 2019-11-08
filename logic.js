let header = []
let content = []
// Make structural data
function structureData(rawData) {
    const lines = rawData.split('\r\n')
    let dataArray = []

    // Read table header
    header = lines[0].split(',').map(h => h.trim())
    content.push(header)

    // Read the rest of data
    lines.forEach((line, index) => {
        if (index === 0) {
            return
        }
        if (line.indexOf('Undetermined') > 0) {
            return
        }

        let dataObject = {}
        const values = line.split(',')
        content.push(values)
        header.forEach((h, i) => {
            dataObject[h] = values[i]
        })

        dataArray.push(dataObject)
    })

    return dataArray
}

// Convert to samples
function makeSamples(dataArray) {
    let samples = {}
    let currentSample = null

    const [SAMPLE_NAME, TARGET_NAME, CT] = header

    dataArray.forEach(data => {
        if (!data[SAMPLE_NAME]) {
            return
        }
        // First time visit
        if (!currentSample || currentSample['name'] !== data[SAMPLE_NAME]) {
            currentSample = {
                name: data[SAMPLE_NAME],
            }
            currentSample[data[TARGET_NAME]] = [Number(data[CT])]
            currentSample.targets = new Set()
            currentSample.targets.add(data[TARGET_NAME])

            samples[data[SAMPLE_NAME]] = currentSample
        }
        else {
            if (!currentSample[data[TARGET_NAME]]) {
                currentSample[data[TARGET_NAME]] = []
            }
            currentSample[data[TARGET_NAME]].push(Number(data[CT]))
            currentSample.targets.add(data[TARGET_NAME])
        }
    })
    return samples
}

// Compute mean
function computeMean(samples, internalReference) {
    Object.values(samples).forEach(sample => {
        sample.internalReferenceMean = average(sample[internalReference])
    })
}

// Compute caratC
function computeCaratCt(samples, internalReference) {
    Object.values(samples).forEach(sample => {
        sample['^Ct'] = []
        const targets = Array.from(sample.targets)
        for (let i = 0; i < targets.length; i++) {
            if (targets[i] === internalReference) {
                continue
            }
            sample['^Ct'] = [
                ...sample['^Ct'],
                ...sample[targets[i]].map(value => value - sample.internalReferenceMean)
            ]
        }
    })
}

// Compute doubleCaratC
function computeDoubleCaraCt(samples, controlSample) {
    Object.values(samples).forEach(sample => {
        // Avoid different length problem
        let controlSampleIndex = 0
        sample['^^Ct'] = []
        for (let i = 0; i < sample['^Ct'].length; i++) {
            sample['^^Ct'].push(sample['^Ct'][i] - controlSample['^Ct'][controlSampleIndex])

            controlSampleIndex = Math.min(controlSampleIndex + 1, controlSample['^Ct'].length - 1)
        }
    })
}

// Compute log2
function computeLog2(samples) {
    Object.values(samples).forEach(sample => {
        sample.log2 = sample['^^Ct'].map(value => Math.pow(2, -value))
    })
}

function getOutput(samples, internalReference) {
    // Content
    content.forEach((values, index)=> {
        if (values.length === 0 || values[0] === '') {
            return
        }
        if (index === 0) {
            values.push(`mean(${internalReference})`, '^Ct', '^^Ct', 'log2')
            return
        }
        const [sampleName, targetName, _] = values
        // Skip internal reference
        if (targetName === internalReference) {
            values.push(samples[sampleName]['internalReferenceMean'], '', '', '')
            return
        }
        // Mean
        values.push('')
        // ^Ct
        values.push(samples[sampleName]['^Ct'].shift())
        // ^^Ct
        values.push(samples[sampleName]['^^Ct'].shift())
        // log
        values.push(samples[sampleName]['log2'].shift())
    })
    return content
}

// Entry
function logic(rawData, internalReference, controlSampleName) {
    // Structure data
    const dataArray = structureData(rawData)
    // Make them as samples
    const samples = makeSamples(dataArray)
    // Compute mean
    computeMean(samples, internalReference)
    // Compute ^Ct
    computeCaratCt(samples, internalReference)
    // Find control sample and compute ^^Ct
    const controlSample = samples[controlSampleName]
    computeDoubleCaraCt(samples, controlSample)
    // Compute log2
    computeLog2(samples)
    console.log(samples)
    // Output new csv
    const newContent = getOutput(samples, internalReference, controlSampleName)
    createXLXS(newContent)
}
