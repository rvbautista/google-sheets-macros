/** Macros for use in Lido.app tutorial Google Sheets Macros */
/** https://github.com/rvbautista/google-sheets-macros/ */
/** Sorts the entire sheet in descending order or reverse alphabetical order using the values in the first column */

function sortZAfirstcolwithheader() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  var currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getActiveRange().getDataRegion().activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveRange().offset(1, 0, spreadsheet.getActiveRange().getNumRows() - 1).sort({column: 1, ascending: false});
};
