import * as XLSX from "xlsx";

interface ResultJSON {
  sheetName: string,
  content: string[][]
}

interface ResultObject {
  sheetName: string,
  content: Array<{ [key: string]: string | number }>
}

export function xlsxToJSON(path: string,): ResultJSON[] {
  let workbook = XLSX.readFile(path);
  let result: ResultJSON[] = [];
  for (const sheetName of workbook.SheetNames) {
    let sheet = workbook.Sheets[sheetName];
    let content = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
    });

    result.push({
      sheetName,
      content: content as any,
    });
  }
  return result;
}

export function xlsxToObjects(path: string, headerRow: number): ResultObject[] {
  let workbook = XLSX.readFile(path, {
    raw: true,
  });
  let result: ResultObject[] = [];

  for (const sheetName of workbook.SheetNames) {
    let sheet = workbook.Sheets[sheetName];
    let range = XLSX.utils.decode_range(sheet['!ref']!);
    let minColumn = range.s.c;
    let maxColumn = range.e.c;
    let maxRow = range.e.r;

    let headerNames = [];
    for (let i = minColumn; i <= maxColumn; i++) {
      let address = XLSX.utils.encode_cell({
        c: i,
        r: headerRow - 1,
      });
      headerNames.push(sheet[address].v);
    }
    console.log(headerNames);
    let content: any = {};
    console.log(maxRow, maxColumn)
    for (let i = headerRow; i < maxRow; i++) {
      for (let j = minColumn; j <= maxColumn; j++) {
        let address = XLSX.utils.encode_cell({
          c: j,
          r: i,
        });
        console.log(sheet[address], i, j,address)
        content[headerNames[i]] = sheet[address].v;
      }
    }

    result.push({
      sheetName,
      content: content as any,
    });
  }
  console.log(result)
  return result;
}
