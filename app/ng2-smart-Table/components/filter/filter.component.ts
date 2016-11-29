/**
 * Created by 10206545 on 2016/11/28.
 */
import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { DataSource } from '../../data-source/dataSource';
import { Column } from '../../data-set/column';

@Component({
    moduleId:module.id,
    selector: 'ng2-smart-table-filter',
    styleUrls:['./filter.css'],
    template: `
    <div class="ng2-smart-filter" *ngIf="column.isFilterable">
      <input 
      [(ngModel)]="query"
      (keyup)="filter($event)"
      [ngClass]="inputClass"
      class="form-control"
      type="text" 
      placeholder="{{ column.title }}" />
    </div>
  `
})
export class FilterComponent {

    @Input() column: Column;
    @Input() source: DataSource;
    @Input() inputClass: string = '';

    query: string = '';
    timeout: any;
    delay: number = 300;

    ngAfterViewInit(): void {
        this.source.onChanged().subscribe((elements) => {
            let filterConf = this.source.getFilter();
            if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                this.query = '';
            }
        });
    }

    filter(event): boolean {
        if (event.which === 13) {//Enter
            this.addFilter();
            // ignore tab component
        } else if(event.which !== 9) {//Table
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(() => {
                this.addFilter();
            }, this.delay);
        }
        return false;
    }

    protected addFilter(): void {
        this.source.addFilter({
            field: this.column.id,
            search: this.query,
            filter: this.column.getFilterFunction()
        });
    }
}
