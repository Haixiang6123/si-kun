function createFile(text) {
    const universalBOM = "\uFEFF"

    const link = document.getElementById('downloadlink')
    link.href = 'data:text/csv; charset=utf-8,' + encodeURIComponent(universalBOM + text)
    link.download = 'result.csv'
    link.style.display = 'block'
}
