const UTF8 = 'utf8'

// Read csv file
function readFile(pathToFile) {
    return fs.readFileSync(pathToFile, UTF8)
}

// Make structural data
function structureData(rawData) {
    const lines = rawData.split('\r\n')
    let dataArray = []

    // Read table header
    const header = lines[0].split(',').map(h => h.trim())

    // Read the rest of data
    lines.forEach((line, index) => {
        if (index === 0) {
            return
        }

        let dataObject = {}
        const values = line.split(',')
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
    dataArray.forEach(data => {
        if (!data['Sample Name']) {
            return
        }
        // First time visit
        if (!currentSample || currentSample['name'] !== data['Sample Name']) {
            currentSample = {
                name: data['Sample Name'],
            }
            currentSample[data['Target Name']] = [Number(data['Ct'])]
            currentSample.targets = new Set()
            currentSample.targets.add(data['Target Name'])

            samples[data['Sample Name']] = currentSample
        }
        else {
            if (!currentSample[data['Target Name']]) {
                currentSample[data['Target Name']] = []
            }
            currentSample[data['Target Name']].push(Number(data['Ct']))
            currentSample.targets.add(data['Target Name'])
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
        const targets = Array.from(sample.targets).sort()
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
        const size = Math.min(sample['^Ct'].length, controlSample['^Ct'].length)
        sample['^^Ct'] = []
        for (let i = 0; i < size; i++) {
            sample['^^Ct'].push(sample['^Ct'][i] - controlSample['^Ct'][i])
        }
    })
}

// Compute log2
function computeLog2(samples) {
    Object.values(samples).forEach(sample => {
        sample.log2 = sample['^^Ct'].map(value => Math.pow(2, -value))
    })
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
    // Return result
    return samples
}
