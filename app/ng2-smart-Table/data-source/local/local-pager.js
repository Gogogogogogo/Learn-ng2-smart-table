"use strict";
/**
 * Created by 10206545 on 2016/11/26.
 */
var LocalPager = (function () {
    function LocalPager() {
    }
    LocalPager.paginate = function (data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    };
    return LocalPager;
}());
exports.LocalPager = LocalPager;
//# sourceMappingURL=local-pager.js.map