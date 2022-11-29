import {xlsxToJSON, xlsxToObjects} from "./xlsxToJSON";
import * as path from "path";

test('xlsxToObjects', () => {
  let json = xlsxToObjects(path.join(__dirname, '../test-data/11st After Delivery Finished_2022-09-01_2022-09-30.xls'), 2);

  // expect(json[0]).toMatchSnapshot();
});

test('without-header (default)', () => {
  let json = xlsxToJSON(path.join(__dirname, '../test-data/without-header.xlsx'), );
  expect(json[0].sheetName).toBe('Sheet1');
  expect(json[0].content).toStrictEqual([
    ['John', '000-0001'],
    ['David', '000-0000'],
  ]);
});

test('prev-excel-version', () => {
  let json = xlsxToJSON(path.join(__dirname, '../test-data/prev-excel-version.xls'));
  expect(json[0].sheetName).toBe('Sheet1');
  expect(json[0].content).toStrictEqual([
    ['John', '000-0001'],
    ['David', '000-0000'],
  ]);
});
