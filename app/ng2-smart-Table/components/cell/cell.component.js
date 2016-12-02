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
 * Created by 10206545 on 2016/11/28.
 */
var core_1 = require('@angular/core');
var cell_1 = require('../../data-set/cell');
var CellComponent = (function () {
    function CellComponent(componentResolver) {
        this.componentResolver = componentResolver;
        this.inputClass = '';
        this.mode = 'inline';
        this.edited = new core_1.EventEmitter();
    }
    CellComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //setTimeout()异步执行避免跟Angular2 内部的脏值检测冲突
        setTimeout(function () {
            if (_this.cell.getColumn().type === 'component') {
                var factory = _this.componentResolver.resolveComponentFactory(_this.cell.getColumn().component);
                var cpnt = _this.vc.createComponent(factory);
                var ins = cpnt.instance;
                ins.setParaments(_this.cell.getColumn().paras, _this.cell.getRow().getData(), _this.ref._results[_this.trIndex]);
            }
        });
    };
    CellComponent.prototype.onStopEditing = function () {
        this.cell.getRow().isInEditing = false;
        return false;
    };
    CellComponent.prototype.onEdited = function (event) {
        this.edited.emit(event);
        return false;
    };
    CellComponent.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CellComponent.prototype, "ref", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', cell_1.Cell)
    ], CellComponent.prototype, "cell", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CellComponent.prototype, "inputClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CellComponent.prototype, "mode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CellComponent.prototype, "trIndex", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CellComponent.prototype, "edited", void 0);
    __decorate([
        core_1.ViewChild('vc', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], CellComponent.prototype, "vc", void 0);
    CellComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ng2-smart-table-cell',
            styleUrls: ['./cell.css'],
            template: "\n    <div *ngIf=\"!cell.getRow().isInEditing && cell.getColumn().type !== 'html'&&cell.getColumn().type !== 'component'\">{{ cell.getValue() }}</div>\n    <div *ngIf=\"!cell.getRow().isInEditing && cell.getColumn().type === 'html'\" [innerHTML]=\"cell.getValue()\"></div>\n    <div *ngIf=\"cell.getColumn().type === 'component'&& cell.getColumn().component\"  #vc></div>\n    <input *ngIf=\"cell.getRow().isInEditing\" \n      [ngClass]=\"inputClass\"\n      class=\"form-control\"\n      [(ngModel)]=\"cell.newValue\"\n      [name]=\"cell.getColumn().id\" \n      [placeholder]=\"cell.getColumn().title\"\n      [disabled]=\"!cell.getColumn().isEditable\"\n      (click)=\"onClick($event)\"\n      (keydown.enter)=\"onEdited($event)\" \n      (keydown.esc)=\"onStopEditing()\">\n  "
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver])
    ], CellComponent);
    return CellComponent;
}());
exports.CellComponent = CellComponent;
//# sourceMappingURL=cell.component.js.map