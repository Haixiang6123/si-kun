let fileContent = ''
// Register onchange
document.querySelector('#file').onchange = function () {
    const file = this.files[0]
    const reader = new FileReader()
    reader.onload = function () {
        fileContent = this.result
    }
    reader.readAsText(file)
}

function start() {
    const internalReference = document.querySelector('#internalReference').value
    const controlSampleName = document.querySelector('#controlSampleName').value

    // Entire file
    const result = logic(fileContent, internalReference, controlSampleName)
    // Output result
    output(result)
}

// Update results
function output(result) {
    document.querySelector('#output').innerHTML = JSON.stringify(result)
}
