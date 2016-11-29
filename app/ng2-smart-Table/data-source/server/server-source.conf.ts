/**
 * Created by 10206545 on 2016/11/28.
 */
export class ServerSourceConf {

    protected static  SORT_FIELD_KEY = '_sort';
    protected static  SORT_DIR_KEY = '_order';
    protected static  PAGER_PAGE_KEY = '_page';
    protected static  PAGER_LIMIT_KEY = '_limit';
    protected static  FILTER_FIELD_KEY = '#field#_like';
    protected static  TOTAL_KEY = 'x-total-count';
    protected static  DATA_KEY = '';

    endPoint: string;

    sortFieldKey: string;
    sortDirKey: string;
    pagerPageKey: string;
    pagerLimitKey: string;
    filterFieldKey: string;
    totalKey: string;
    dataKey: string;

    constructor(
        {endPoint = '', sortFieldKey = '', sortDirKey = '', pagerPageKey = '', pagerLimitKey = '', filterFieldKey = '', totalKey = '', dataKey = ''} = {}) {

        this.endPoint = endPoint ? endPoint : '';

        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
}