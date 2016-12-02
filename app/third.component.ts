/**
 * Created by 10206545 on 2016/11/30.
 */
import {Component, ViewContainerRef, ViewChild, OnInit, AfterViewInit, ViewRef} from '@angular/core';


@Component({
    selector: 'third-component',
    template: `
            <ky-button *ngIf='common' [type]='type'   (click)="show()"  >详情</ky-button>
          <ky-button  *ngIf='create' [type]='type'  (click)="show()"  >创建</ky-button> 
               <template #template >
                    <tr *ngFor="let e of arryData ">
                        <td >{{e}}</td>
                    </tr>
                </template>               
`,


})
export class ThirdComponent implements AfterViewInit{
    arry=[1,2];
    @ViewChild('template') mtp:any;
    @ViewChild('ref',{read:ViewContainerRef}) Ref:ViewContainerRef;
    hero='hero';
    private type:string;
    private data:any;
    private arryData:Array<any>=[];
    private trRef:ViewContainerRef;
     common:boolean=false;
     create:boolean=false;
    private isClosed=true;
    private tmp:any;
    constructor(public vc:ViewContainerRef){

    };
    ngAfterViewInit(){
       // console.log(this.Ref);
    }
    public setParaments(type:string,data:any,trref:ViewContainerRef){
                this.type=type;
                this.data=data;
                this.trRef=trref;
                this.type==='common'?(this.common=true):(this.create=true);
                for(let element in data){
                    this.arryData.push(data[element]);
                }
    }
    show(){
        if(this.type=='create'&&this.trRef&&this.isClosed){
            this.tmp=this.trRef.createEmbeddedView(this.mtp);
            this.isClosed=false;
            // console.log(this.tmp);
        }else if(this.type=='create'&&this.trRef&&!this.isClosed){
            if(this.tmp){
                this.tmp.destroy();
            }
            this.isClosed=true;
        }else{
            alert(JSON.stringify(this.data));
        }

    }

}