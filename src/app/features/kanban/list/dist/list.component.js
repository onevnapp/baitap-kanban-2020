"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListComponent = exports.JobList = void 0;
var core_1 = require("@angular/core");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var dialog_confirm_delete_component_1 = require("../../../shared/dialog-confirm-delete/dialog-confirm-delete.component");
var JobList = /** @class */ (function () {
    function JobList() {
    }
    return JobList;
}());
exports.JobList = JobList;
var ListComponent = /** @class */ (function () {
    function ListComponent(jobListService, dialog) {
        this.jobListService = jobListService;
        this.dialog = dialog;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.jobLists = this.jobListService.getJobLists();
    };
    ListComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            drag_drop_1.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            drag_drop_1.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.jobListService.updateLocalStorage();
    };
    ListComponent.prototype.deleteJob = function (jobIndex, listIndex) {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_confirm_delete_component_1.DialogConfirmDeleteComponent, {
            width: '500px',
            data: { name: 'job' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.jobListService.deleteJob(listIndex, jobIndex);
            }
        });
    };
    ListComponent.prototype.deleteList = function (listIndex) {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_confirm_delete_component_1.DialogConfirmDeleteComponent, {
            width: '500px',
            data: { name: 'list' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.jobListService.deleteList(listIndex);
            }
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.css']
        })
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
