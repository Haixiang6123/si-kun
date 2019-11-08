let fileContent = ''
let hasFile = false
// Register onchange
document.querySelector('#file').onchange = function () {
    const file = this.files[0]
    const reader = new FileReader()
    reader.onload = function () {
        fileContent = this.result
    }
    reader.readAsText(file)

    hasFile = true
    document.querySelector('#start').disabled = false
}

document.querySelector('#start').disabled = true

function start() {
    if (!hasFile) {
        return
    }
    const internalReference = document.querySelector('#internalReference').value
    const controlSampleName = document.querySelector('#controlSampleName').value

    // Start analyze
    try {
        logic(fileContent, internalReference, controlSampleName)
    }
    catch (e) {
        alert('出错啦')
    }

    document.querySelector('#start').disabled = true
}
