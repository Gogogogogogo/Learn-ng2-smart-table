"use strict";
/**
 * Created by 10206545 on 2016/11/26.
 */
var LocalSorter = (function () {
    function LocalSorter() {
    }
    LocalSorter.sort = function (data, field, direction, customCompare) {
        var dir = direction === 'asc' ? 1 : -1;
        var compareFunction = customCompare ? customCompare : LocalSorter.COMPARE;
        return data.sort(function (a, b) {
            return compareFunction.call(null, a[field], b[field]);
        });
    };
    LocalSorter.COMPARE = function (diretion, a, b) {
        if (a < b) {
            return -1 * diretion;
        }
        if (a > b) {
            return diretion;
        }
        return 0;
    };
    return LocalSorter;
}());
exports.LocalSorter = LocalSorter;
//# sourceMappingURL=local-sorter.js.map