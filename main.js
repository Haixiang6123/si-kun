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

    // Start analyze
    try {
        logic(fileContent, internalReference, controlSampleName)
    }
    catch (e) {
        alert('出错啦')
    }
}
