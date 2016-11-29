/**
 * Created by 10206545 on 2016/11/24.
 */
import {Row} from "./row";
import {Column} from "./column";
import {DataSet} from "./data-set";
export class Cell{
    newValue='';
    protected static PREPARE=(value)=>value;
    constructor(protected value:any,
                protected row:Row,
                protected column:Column,
                protected dataSet:DataSet){
        this.newValue=value;
    }
    getValue():any{
        let valid=this.column.getValuePrepareFunction() instanceof Function;
        let prepare:Function=valid? this.column.getValuePrepareFunction():Cell.PREPARE;
        return prepare.call(null,this.value);
    }
    getColumn():Column{
        return this.column;
    }
    getRow():Row{
        return this.row;
    }
}