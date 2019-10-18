const internalReference = 'U6'
const controlSampleName = 'EAA_1'
// Register onchange
document.getElementById('file').onchange = function () {
    const file = this.files[0]
    const reader = new FileReader()
    reader.onload = function () {
        // Entire file
        const result = logic(this.result, internalReference, controlSampleName)
        // Output result
        output(result)
    }
    reader.readAsText(file)
}

// Update results
function output(result) {
    document.querySelector('#output').innerHTML = JSON.stringify(result)
}
