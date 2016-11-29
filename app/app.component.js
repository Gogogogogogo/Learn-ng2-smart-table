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
 * Created by 10206545 on 2016/11/29.
 */
var core_1 = require('@angular/core');
var local_dataSource_1 = require('./ng2-smart-Table/data-source/local/local-dataSource');
var AppComponent = (function () {
    function AppComponent() {
        this.settings = {
            delete: {
                confirmDelete: true
            },
            add: {
                confirmCreate: true
            },
            edit: {
                confirmSave: true
            },
            columns: {
                id: {
                    title: 'ID'
                },
                name: {
                    title: 'Full Name'
                },
                username: {
                    title: 'User Name'
                },
                email: {
                    title: 'Email'
                }
            }
        };
        this.data = [
            {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                notShownField: true
            },
            {
                id: 2,
                name: "Ervin Howell",
                username: "Antonette",
                email: "Shanna@melissa.tv",
                notShownField: true
            },
            {
                id: 3,
                name: "Clementine Bauch",
                username: "Samantha",
                email: "Nathan@yesenia.net",
                notShownField: false
            },
            {
                id: 4,
                name: "Patricia Lebsack",
                username: "Karianne",
                email: "Julianne.OConner@kory.org",
                notShownField: false
            },
            {
                id: 5,
                name: "Chelsey Dietrich",
                username: "Kamren",
                email: "Lucio_Hettinger@annie.ca",
                notShownField: false
            },
            {
                id: 6,
                name: "Mrs. Dennis Schulist",
                username: "Leopoldo_Corkery",
                email: "Karley_Dach@jasper.info",
                notShownField: false
            },
            {
                id: 7,
                name: "Kurtis Weissnat",
                username: "Elwyn.Skiles",
                email: "Telly.Hoeger@billy.biz",
                notShownField: false
            },
            {
                id: 8,
                name: "Nicholas Runolfsdottir V",
                username: "Maxime_Nienow",
                email: "Sherwood@rosamond.me",
                notShownField: true
            },
            {
                id: 9,
                name: "Glenna Reichert",
                username: "Delphine",
                email: "Chaim_McDermott@dana.io",
                notShownField: false
            },
            {
                id: 10,
                name: "Clementina DuBuque",
                username: "Moriah.Stanton",
                email: "Rey.Padberg@karina.biz",
                notShownField: false
            },
            {
                id: 11,
                name: "Nicholas DuBuque",
                username: "Nicholas.Stanton",
                email: "Rey.Padberg@rosamond.biz",
                notShownField: true
            }
        ];
        this.source = new local_dataSource_1.LocalDataSource(this.data);
    }
    AppComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    AppComponent.prototype.onSaveConfirm = function (event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    AppComponent.prototype.onCreateConfirm = function (event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <ng2-smart-table \n    [settings]=\"settings\" \n    [source]=\"source\" \n    (deleteConfirm)=\"onDeleteConfirm($event)\"\n    (editConfirm)=\"onSaveConfirm($event)\"\n    (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map