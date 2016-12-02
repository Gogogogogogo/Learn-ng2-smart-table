/**
 * Created by 10206545 on 2016/11/28.
 */
import {
    Component, Input, Output, EventEmitter, ViewChild, ViewContainerRef,
    ComponentFactoryResolver, OnInit, AfterViewInit
} from '@angular/core';

import { Cell } from '../../data-set/cell';
import any = jasmine.any;

@Component({
    moduleId:module.id,
    selector: 'ng2-smart-table-cell',
    styleUrls:['./cell.css'],
    template: `
    <div *ngIf="!cell.getRow().isInEditing && cell.getColumn().type !== 'html'&&cell.getColumn().type !== 'component'">{{ cell.getValue() }}</div>
    <div *ngIf="!cell.getRow().isInEditing && cell.getColumn().type === 'html'" [innerHTML]="cell.getValue()"></div>
    <div *ngIf="cell.getColumn().type === 'component'&& cell.getColumn().component"  #vc></div>
    <input *ngIf="cell.getRow().isInEditing" 
      [ngClass]="inputClass"
      class="form-control"
      [(ngModel)]="cell.newValue"
      [name]="cell.getColumn().id" 
      [placeholder]="cell.getColumn().title"
      [disabled]="!cell.getColumn().isEditable"
      (click)="onClick($event)"
      (keydown.enter)="onEdited($event)" 
      (keydown.esc)="onStopEditing()">
  `
})
export class CellComponent implements  AfterViewInit{
    @Input() ref:any;
    @Input() cell: Cell;
    @Input() inputClass: string = '';
    @Input() mode: string = 'inline';
    @Input() trIndex:number;

    @Output() public edited: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('vc',{read:ViewContainerRef}) vc:ViewContainerRef;
    constructor(private componentResolver: ComponentFactoryResolver){

    }
    ngAfterViewInit(){
        //setTimeout()异步执行避免跟Angular2 内部的脏值检测冲突
        setTimeout(()=> {
            if (this.cell.getColumn().type === 'component') {
                let factory = this.componentResolver.resolveComponentFactory(this.cell.getColumn().component);
                let cpnt=this.vc.createComponent(factory);
                let ins:any=cpnt.instance;
                ins.setParaments(this.cell.getColumn().paras,this.cell.getRow().getData(),this.ref._results[this.trIndex]);
                // console.log(this.trIndex);
                // console.log(this.ref._results[this.trIndex]);
               // console.log(this.ref.length);
            }
        });

    }
    onStopEditing(): boolean {
        this.cell.getRow().isInEditing = false;
        return false;
    }

    onEdited(event): boolean {
        this.edited.emit(event);
        return false;
    }

    onClick(event): void {
        event.stopPropagation();
    }
}
