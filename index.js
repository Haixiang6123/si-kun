const chalk = require('chalk')
const fs = require('fs')

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
            currentSample[data['Target Name']] = [data['Ct']]

            samples[data['Sample Name']] = currentSample
        }
        else {
            if (!currentSample[data['Target Name']]) {
                currentSample[data['Target Name']] = []
            }
            currentSample[data['Target Name']].push(data['Ct'])
        }
    })
    return samples
}

// Entry
function main(pathToFile) {
    // Read raw data
    const rawData = readFile(pathToFile)
    // Structure data
    const dataArray = structureData(rawData)
    // Make them as samples
    const samples = makeSamples(dataArray)
}

main('./test/data1.csv')
