/**
 * Created by 10206545 on 2016/11/29.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2SmartTableComponent } from './ng2-smart-table.component';
import { CellComponent } from './components/cell/cell.component';
import { FilterComponent } from './components/filter/filter.component';
import { PagerComponent } from './components/pager/pager.component';
import { TitleComponent } from './components/title/title.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        CellComponent,
        FilterComponent,
        PagerComponent,
        TitleComponent,
        Ng2SmartTableComponent,

    ],
    exports: [
        Ng2SmartTableComponent
    ]
})
export class Ng2SmartTableModule {
}