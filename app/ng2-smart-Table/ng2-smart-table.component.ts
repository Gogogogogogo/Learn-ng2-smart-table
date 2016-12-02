/**
 * Created by 10206545 on 2016/11/28.
 */
import {
    Component, Input, Output, SimpleChange, EventEmitter,
    OnChanges, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ViewChildren
} from '@angular/core';

import { Grid } from './grid';
import { DataSource } from './data-source/dataSource';
import { Row } from './data-set/row';

import { deepExtend } from './helpers';
import { LocalDataSource } from './data-source/local/local-dataSource';


@Component({
    moduleId:module.id,
    selector: 'ng2-smart-table',
    templateUrl: './ng2-smart-table.html',
    styleUrls:['./ng2-smart-table.css']

})
export class Ng2SmartTableComponent implements OnChanges,OnInit,AfterViewInit {
    @ViewChildren('ref',{read:ViewContainerRef}) trRef:any;
    @Input() source: any;
    @Input() settings: Object = {};

    @Output() public rowSelect: EventEmitter<any> = new EventEmitter<any>();
    @Output() public userRowSelect: EventEmitter<any> = new EventEmitter<any>();
    @Output() public delete: EventEmitter<any> = new EventEmitter<any>();
    @Output() public edit: EventEmitter<any> = new EventEmitter<any>();
    @Output() public create: EventEmitter<any> = new EventEmitter<any>();

    @Output() public deleteConfirm: EventEmitter<any> = new EventEmitter<any>();
    @Output() public editConfirm: EventEmitter<any> = new EventEmitter<any>();
    @Output() public createConfirm: EventEmitter<any> = new EventEmitter<any>();
    ngOnInit(){
        // console.log(this.trRef);
    }
    ngAfterViewInit(){
         console.log(this.trRef);
         console.log(this.trRef.length);
        // console.log(this.trRef._results[0]);
        // console.log(this.trRef._emitter);

    }
    protected grid: Grid;
    protected defaultSettings: Object = {

        mode: 'inline', // inline|external|click-to-edit
        hideHeader: false,
        hideSubHeader: false,
        actions: {
            columnTitle: 'Actions',
            add: false,
            edit: false,
            delete: false
        },
        filter: {
            inputClass: '',
        },
        edit: {
            inputClass: '',
            editButtonContent: 'Edit',
            saveButtonContent: 'Update',
            cancelButtonContent: 'Cancel',
            confirmSave: false
        },
        add: {
            inputClass: '',
            addButtonContent: 'Add New',
            createButtonContent: 'Create',
            cancelButtonContent: 'Cancel',
            confirmCreate: false
        },
        delete: {
            deleteButtonContent: 'Delete',
            confirmDelete: false
        },
        attr: {
            id: '',
            class: '',
        },
        noDataMessage: 'No data found',
        columns: {},
        pager: {
            display: true,
            perPage: 10
        }
    };

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}): void {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.grid.setSource(this.source);
            }
        } else {
            this.initGrid();
            // console.log(this.trRef);
        }
    }

    onAdd(event): boolean {
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source
            });
        } else {
            this.grid.createFormShown = true;
        }
        return false;
    }

    onUserSelectRow(row: Row): void {
        this.grid.selectRow(row);
        this.userRowSelect.emit({
            data: row.getData(),
            source: this.source
        });

        this.onSelectRow(row);
    }

    onSelectRow(row: Row): void {
        this.grid.selectRow(row);
        this.rowSelect.emit({
            data: row.getData(),
            source: this.source
        });
    }

    onEdit(row: Row, event): boolean {
        event.stopPropagation();
        this.onSelectRow(row);

        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: row.getData(),
                source: this.source
            });
        } else {
            this.grid.edit(row);
        }
        return false;
    }

    onDelete(row: Row, event): boolean {
        event.stopPropagation();

        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: row.getData(),
                source: this.source
            });
        } else {
            this.grid.delete(row, this.deleteConfirm);
        }
        return false;
    }

    onCreate(row: Row, event): boolean {
        event.stopPropagation();

        this.grid.create(row, this.createConfirm);
        return false;
    }

    onSave(row: Row, event): boolean {
        event.stopPropagation();

        this.grid.save(row, this.editConfirm);
        return false;
    }

    protected initGrid(): void {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe((row) => this.onSelectRow(row));
    }

    protected prepareSource(): DataSource {
        if (this.source instanceof DataSource) {
            return this.source;
        } else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }

        return new LocalDataSource();
    }

    protected prepareSettings(): Object {
        return deepExtend({}, this.defaultSettings, this.settings);
    }
}
