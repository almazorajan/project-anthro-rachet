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
var core_1 = require('@angular/core');
var services_1 = require('../../shared-services/services');
var employee_sheet_service_1 = require('./employee-sheet.service');
var company_service_1 = require('../company/company.service');
var employment_status_service_1 = require('../employment-status/employment-status.service');
var position_service_1 = require('../position/position.service');
var model_1 = require('../../models/model');
var EmployeeSheetComponent = (function () {
    function EmployeeSheetComponent(swal, toastr, employeeSheetService, companyService, employmentStatusService, positionService) {
        this.swal = swal;
        this.toastr = toastr;
        this.employeeSheetService = employeeSheetService;
        this.companyService = companyService;
        this.employmentStatusService = employmentStatusService;
        this.positionService = positionService;
        this.loadingCompanies = false;
        this.loadingEmploymentStatuses = false;
        this.loadingPositions = false;
        this.isFormDisabled = false;
        this.companies = [];
        this.employmentStatuses = [];
        this.positions = [];
    }
    EmployeeSheetComponent.prototype.ngOnInit = function () {
        this.employee = new model_1.Employee();
        this.toastr.info("Loading resources...");
        this.getCompanies();
        this.getEmploymentStatuses();
        this.getPositions();
    };
    EmployeeSheetComponent.prototype.getCompanies = function () {
        var _this = this;
        try {
            this.companies = [];
            this.loadingCompanies = true;
            this.isFormDisabled = true;
            this.companyService.getAll().then(function (result) {
                _this.loadingCompanies = false;
                _this.isFormDisabled = false;
                if (result.success) {
                    _this.companies = result.data;
                    _this.toastr.success(result.message);
                }
                else {
                    _this.toastr.error(result.message);
                }
            })
                .catch(function (error) {
                _this.loadingCompanies = false;
                _this.isFormDisabled = false;
                _this.toastr.error(error);
            });
        }
        catch (e) {
            this.loadingCompanies = false;
            this.isFormDisabled = false;
            this.toastr.error(e);
        }
    };
    EmployeeSheetComponent.prototype.getEmploymentStatuses = function () {
        var _this = this;
        try {
            this.employmentStatuses = [];
            this.loadingEmploymentStatuses = true;
            this.isFormDisabled = true;
            this.employmentStatusService.getAll().then(function (result) {
                _this.loadingEmploymentStatuses = false;
                _this.isFormDisabled = false;
                if (result.success) {
                    _this.employmentStatuses = result.data;
                    _this.toastr.success(result.message);
                }
                else {
                    _this.toastr.error(result.message);
                }
            })
                .catch(function (error) {
                _this.loadingEmploymentStatuses = false;
                _this.isFormDisabled = false;
                _this.toastr.error(error);
            });
        }
        catch (e) {
            this.loadingEmploymentStatuses = false;
            this.isFormDisabled = false;
            this.toastr.error(e);
        }
    };
    EmployeeSheetComponent.prototype.getPositions = function () {
        var _this = this;
        try {
            this.positions = [];
            this.loadingPositions = true;
            this.isFormDisabled = true;
            this.positionService.getAll().then(function (result) {
                _this.loadingPositions = false;
                _this.isFormDisabled = false;
                if (result.success) {
                    _this.positions = result.data;
                    _this.toastr.success(result.message);
                }
                else {
                    _this.toastr.error(result.message);
                }
            })
                .catch(function (error) {
                _this.loadingPositions = false;
                _this.isFormDisabled = false;
                _this.toastr.error(error);
            });
        }
        catch (e) {
            this.loadingPositions = false;
            this.isFormDisabled = false;
            this.toastr.error(e);
        }
    };
    EmployeeSheetComponent = __decorate([
        core_1.Component({
            selector: 'employee-sheet-component',
            templateUrl: './app/components/employee-sheet/employee-sheet-page.html',
            providers: [
                services_1.SweetAlertService,
                services_1.ToastrService,
                employee_sheet_service_1.EmployeeSheetService,
                company_service_1.CompanyService,
                employment_status_service_1.EmploymentStatusService,
                position_service_1.PositionService
            ]
        }), 
        __metadata('design:paramtypes', [services_1.SweetAlertService, services_1.ToastrService, employee_sheet_service_1.EmployeeSheetService, company_service_1.CompanyService, employment_status_service_1.EmploymentStatusService, position_service_1.PositionService])
    ], EmployeeSheetComponent);
    return EmployeeSheetComponent;
}());
exports.EmployeeSheetComponent = EmployeeSheetComponent;
//# sourceMappingURL=employee-sheet.component.js.map