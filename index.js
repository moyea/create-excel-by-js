const ExcelJS = require('exceljs/dist/es5/exceljs.browser');
const FileSaver = require('file-saver');

const workbook = new ExcelJS.Workbook();

const sheet = workbook.addWorksheet('Sheet 1');

sheet.columns = [
    {header: 'Id', key: 'id'}
];

sheet.mergeCells('A2:A6');

workbook.xlsx
    .writeBuffer()
    .then(buffer => new File([buffer], "test.xlsx", {type: "application/octet-stream"}))
    .then(FileSaver.saveAs);

