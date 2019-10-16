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
    const header = lines[0].split(',')

    // Read the rest of data
    lines.forEach((line, index) => {
        if (index === 0) {
            return
        }

        let dataObject = {}
        const values = line.split(',')
        header.forEach((h, index) => {
            dataObject[h] = values[index]
        })

        console.log(dataObject['Sample Name'])
        dataArray.push(dataObject)
    })

    return dataArray
}

// Convert to samples
function makeSamples(dataArray) {
    let samples = []
    dataArray.forEach(data => {

    })
}

// Entry
function main(pathToFile) {
    // Read raw data
    const rawData = readFile(pathToFile)
    // Structure data
    const dataArray = structureData(rawData)
}

main('./test/data1.csv')
