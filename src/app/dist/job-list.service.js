"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JobListService = exports.JobList = void 0;
var core_1 = require("@angular/core");
var JobList = /** @class */ (function () {
    function JobList() {
    }
    return JobList;
}());
exports.JobList = JobList;
var JobListService = /** @class */ (function () {
    function JobListService() {
        this.jobLists = [];
    }
    JobListService.prototype.updateLocalStorage = function () {
        if (window && window.localStorage) {
            window.localStorage.setItem('jobLists', JSON.stringify(this.jobLists));
        }
    };
    JobListService.prototype.getJobLists = function () {
        if (window && window.localStorage) {
            this.jobLists = JSON.parse(window.localStorage.getItem('jobLists')) || [];
        }
        return this.jobLists;
    };
    JobListService.prototype.addNewJob = function (listIndex, jobName) {
        this.jobLists[listIndex].jobs.push(jobName);
        this.updateLocalStorage();
        return true;
    };
    JobListService.prototype.addNewList = function (listName) {
        this.jobLists.push({
            name: listName,
            jobs: []
        });
        this.updateLocalStorage();
        return true;
    };
    JobListService.prototype.deleteJob = function (listIndex, jobIndex) {
        if (this.jobLists[listIndex]) {
            this.jobLists[listIndex].jobs.splice(jobIndex, 1);
            this.updateLocalStorage();
            return true;
        }
        return false;
    };
    JobListService.prototype.deleteList = function (listIndex) {
        if (this.jobLists[listIndex]) {
            this.jobLists.splice(listIndex, 1);
            this.updateLocalStorage();
            return true;
        }
        return false;
    };
    JobListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], JobListService);
    return JobListService;
}());
exports.JobListService = JobListService;
