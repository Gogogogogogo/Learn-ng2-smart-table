/**
 * Created by 10206545 on 2016/11/29.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2SmartTableModule} from "./ng2-smart-Table/ng2-smart-table.module";
import {AppComponent} from "./app.component";
import {KyButtonModule} from "./ky-button/ky-button.module"
import {ThirdComponent} from './third.component'
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        Ng2SmartTableModule,
        KyButtonModule
    ],
    declarations: [AppComponent,ThirdComponent],
    bootstrap: [AppComponent],
    entryComponents:[ThirdComponent]

})
export class AppModule {
}