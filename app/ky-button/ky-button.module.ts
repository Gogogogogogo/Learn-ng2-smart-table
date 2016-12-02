import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KyButtonComponent } from './ky-button.component';

@NgModule({
    imports: [CommonModule],
    declarations: [KyButtonComponent],
    exports: [KyButtonComponent]
})

export class KyButtonModule { }
