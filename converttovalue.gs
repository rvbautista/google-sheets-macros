/** Macros for use in Lido.app tutorial Google Sheets Macros */
/** https://github.com/rvbautista/google-sheets-macros/ */
/** Converts all formulas to their resulting values in the active sheet */

function converttovalue() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  sheet = spreadsheet.getActiveSheet();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
  spreadsheet.getRange('G1').activate();
};
