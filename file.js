function s2ab(s) {
    const buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    const view = new Uint8Array(buf);  //create uint8array as viewer
    for (let i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;
}

function createXLXS(content) {
    const wb = XLSX.utils.book_new();

    wb.Props = {
        Title: "SheetJS Tutorial",
        Subject: "Test",
        Author: "",
    };

    wb.SheetNames.push("Test Sheet");

    wb.Sheets["Test Sheet"] = XLSX.utils.aoa_to_sheet(content);

    const wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});

    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
}
