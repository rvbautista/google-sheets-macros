/** Macros for use in Lido.app tutorial Google Sheets Macros */
/** https://github.com/rvbautista/google-sheets-macros/ */
/** Colors the first 8 cells of the first row in the sheet that serves as the header row of the table */

function converttovalue() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  sheet = spreadsheet.getActiveSheet();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
  spreadsheet.getRange('G1').activate();
};
