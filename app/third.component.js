"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by 10206545 on 2016/11/30.
 */
var core_1 = require('@angular/core');
var ThirdComponent = (function () {
    function ThirdComponent(vc) {
        this.vc = vc;
        this.arry = [1, 2];
        this.hero = 'hero';
        this.arryData = [];
        this.common = false;
        this.create = false;
        this.isClosed = true;
    }
    ;
    ThirdComponent.prototype.ngAfterViewInit = function () {
        // console.log(this.Ref);
    };
    ThirdComponent.prototype.setParaments = function (type, data, trref) {
        this.type = type;
        this.data = data;
        this.trRef = trref;
        this.type === 'common' ? (this.common = true) : (this.create = true);
        for (var element in data) {
            this.arryData.push(data[element]);
        }
    };
    ThirdComponent.prototype.show = function () {
        if (this.type == 'create' && this.trRef && this.isClosed) {
            this.tmp = this.trRef.createEmbeddedView(this.mtp);
            this.isClosed = false;
        }
        else if (this.type == 'create' && this.trRef && !this.isClosed) {
            if (this.tmp) {
                this.tmp.destroy();
            }
            this.isClosed = true;
        }
        else {
            alert(JSON.stringify(this.data));
        }
    };
    __decorate([
        core_1.ViewChild('template'), 
        __metadata('design:type', Object)
    ], ThirdComponent.prototype, "mtp", void 0);
    __decorate([
        core_1.ViewChild('ref', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], ThirdComponent.prototype, "Ref", void 0);
    ThirdComponent = __decorate([
        core_1.Component({
            selector: 'third-component',
            template: "\n            <ky-button *ngIf='common' [type]='type'   (click)=\"show()\"  >\u8BE6\u60C5</ky-button>\n          <ky-button  *ngIf='create' [type]='type'  (click)=\"show()\"  >\u521B\u5EFA</ky-button> \n               <template #template >\n                    <tr *ngFor=\"let e of arryData \">\n                        <td >{{e}}</td>\n                    </tr>\n                </template>               \n",
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], ThirdComponent);
    return ThirdComponent;
}());
exports.ThirdComponent = ThirdComponent;
//# sourceMappingURL=third.component.js.map