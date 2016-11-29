"use strict";
/**
 * Created by 10206545 on 2016/11/24.
 */
var cell_1 = require('./cell');
var Row = (function () {
    function Row(index, data, _dataDet) {
        this.index = index;
        this.data = data;
        this._dataDet = _dataDet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    Row.prototype.getCell = function (column) {
        return this.cells.find(function (el) { return el.getColumn() === column; });
    };
    Row.prototype.getCells = function () {
        return this.cells;
    };
    Row.prototype.getData = function () {
        return this.data;
    };
    Row.prototype.getNewData = function () {
        var values = Object.assign({}, this.data);
        this.getCells().forEach(function (cell) { values[cell.getColumn().id] = cell.newValue; });
        return values;
    };
    Row.prototype.setData = function (data) {
        this.data = data;
        this.process();
    };
    Row.prototype.process = function () {
        var _this = this;
        this.cells = [];
        this._dataDet.getColumns().forEach(function (column) {
            var cell = _this.createCell(column);
            _this.cells.push(cell);
        });
    };
    Row.prototype.createCell = function (column) {
        var value = typeof this.data[column.id] == 'undefined' ? '' : this.data[column.id];
        return new cell_1.Cell(value, this, column, this._dataDet);
    };
    return Row;
}());
exports.Row = Row;
//# sourceMappingURL=row.js.map