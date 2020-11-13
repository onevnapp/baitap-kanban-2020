"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddNewComponent = void 0;
var core_1 = require("@angular/core");
var AddNewComponent = /** @class */ (function () {
    function AddNewComponent(jobListService) {
        this.jobListService = jobListService;
        this.input = '';
    }
    AddNewComponent.prototype.addNew = function () {
        // Do not add list or job with no name
        if (this.input.trim()) {
            // Add List
            if (this.listIndex === undefined) {
                this.jobListService.addNewList(this.input);
            }
            // Add job
            else {
                this.jobListService.addNewJob(this.listIndex, this.input);
            }
            this.input = '';
        }
    };
    __decorate([
        core_1.Input()
    ], AddNewComponent.prototype, "placeholder");
    __decorate([
        core_1.Input()
    ], AddNewComponent.prototype, "listIndex");
    AddNewComponent = __decorate([
        core_1.Component({
            selector: 'app-add-new',
            templateUrl: './add-new.component.html'
        })
    ], AddNewComponent);
    return AddNewComponent;
}());
exports.AddNewComponent = AddNewComponent;
