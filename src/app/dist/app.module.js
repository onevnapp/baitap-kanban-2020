"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var dialog_1 = require("@angular/material/dialog");
var form_field_1 = require("@angular/material/form-field");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var snack_bar_1 = require("@angular/material/snack-bar");
var toolbar_1 = require("@angular/material/toolbar");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var add_new_component_1 = require("./features/kanban/add-new/add-new.component");
var list_component_1 = require("./features/kanban/list/list.component");
var dialog_confirm_delete_component_1 = require("./shared/dialog-confirm-delete/dialog-confirm-delete.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                list_component_1.ListComponent,
                add_new_component_1.AddNewComponent,
                dialog_confirm_delete_component_1.DialogConfirmDeleteComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                drag_drop_1.DragDropModule,
                forms_1.FormsModule,
                button_1.MatButtonModule,
                card_1.MatCardModule,
                dialog_1.MatDialogModule,
                form_field_1.MatFormFieldModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                snack_bar_1.MatSnackBarModule,
                toolbar_1.MatToolbarModule,
            ],
            entryComponents: [dialog_confirm_delete_component_1.DialogConfirmDeleteComponent],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
