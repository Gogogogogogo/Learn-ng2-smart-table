import {Component, Input, ViewContainerRef} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ky-button',
  templateUrl: 'ky-button.html',
  styleUrls:['ky-button.css']
})

export class KyButtonComponent {
  @Input() type: string;
  @Input() vcref:ViewContainerRef;
  @Input() disabled: boolean;

  buttonClass: any = {};
  isShowCreateIcon: boolean = false;
  constructor(private vc:ViewContainerRef){
    // console.log(this.vc);
  }
  ngOnInit() {
    let buttonTypeList = ['common', 'create', 'cancel', 'warning', 'table-footer'];

    if(buttonTypeList.includes(this.type)) {
      this.buttonClass[`ky-${this.type}-button`] = true;
    } else {
      this.buttonClass[`ky-common-button`] = true;
    }

    this.isShowCreateIcon = this.type === 'create';

  }
}

