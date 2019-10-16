#!/usr/bin/env node
const fs = require('fs')

const maths = require('./maths')

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

            samples[data['Sample Name']] = currentSample
        }
        else {
            if (!currentSample[data['Target Name']]) {
                currentSample[data['Target Name']] = []
            }
            currentSample[data['Target Name']].push(Number(data['Ct']))
        }
    })
    return samples
}

// Compute mean
function computeMean(samples) {
    Object.values(samples).forEach(sample => {
        sample.U6Mean = maths.average(sample['U6'])
    })
}

// Compute caratC
function computeCaratCt(samples) {
    Object.values(samples).forEach(sample => {
        sample['^Ct'] = sample['tRNA'].map(value => value - sample.U6Mean)
    })
}

// Compute doubleCaratC
function computeDoubleCaraCt(samples, controlSample) {
    Object.values(samples).forEach(sample => {
        sample['^^Ct'] = sample['^Ct'].map((value, index) => value - controlSample['^Ct'][index])
    })
}

// Compute log2
function computeLog2(samples) {
    Object.values(samples).forEach(sample => {
        sample.log2 = sample['^^Ct'].map(value => Math.pow(2, -value))
    })
}

// Entry
function main(pathToFile, controlSampleName) {
    // Read raw data
    const rawData = readFile(pathToFile)
    // Structure data
    const dataArray = structureData(rawData)
    // Make them as samples
    const samples = makeSamples(dataArray)
    // Compute mean
    computeMean(samples)
    // Compute ^Ct
    computeCaratCt(samples)
    // Find control sample and compute ^^Ct
    const controlSample = samples[controlSampleName]
    computeDoubleCaraCt(samples, controlSample)
    // Compute log2
    computeLog2(samples)
    console.log(samples)
}

main(process.argv[2], process.argv[3])
