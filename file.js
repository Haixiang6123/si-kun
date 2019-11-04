function createFile (text) {
    let textFile = null, makeTextFile = function (text) {
            const data = new Blob([text], {type: 'text/csv'});

            // If we are replacing a previously generated file we need to
            // manually revoke the object URL to avoid memory leaks.
            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }

            textFile = window.URL.createObjectURL(data);

            return textFile;
        };

    const link = document.getElementById('downloadlink');
    link.href = makeTextFile(text);
    link.download = 'result.csv'
    link.style.display = 'block';
}
