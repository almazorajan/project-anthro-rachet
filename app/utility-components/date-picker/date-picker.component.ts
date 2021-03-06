import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

class DateModel {
    year: number;
    month: string;
    day: number;
}

@Component({
    selector: 'date-picker-component',
    templateUrl: './app/utility-components/date-picker/date-picker.page.html',
    providers: []
})

export class DatePickerComponent implements OnChanges {

    @Input() date: Date;
    @Input() disabled: boolean;
    @Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();
    @Output() onUpdate: EventEmitter<Date> = new EventEmitter<Date>();

    years: number[] = [];
    days: number[] = [];
    months: string[] = [];
    dateModel: DateModel = new DateModel();
    availableMonths = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    constructor() {
        this.getYears();
        this.getMonths(this.years[0]);
        this.getDays(this.months[0], this.years[0]);
    }

    ngOnChanges() {
        if (this.date) {
            this.date = new Date(this.date);
            this.dateModel.day = Number(this.date.getDate());
            this.dateModel.month = String(this.availableMonths[this.date.getMonth()]);
            this.dateModel.year = this.date.getFullYear();
            this.getMonths(this.dateModel.year);
            this.getDays(this.dateModel.month, this.dateModel.year);
        }
    }

    getDays(month: string, year: number): void {
        let limit = 31; // default
        let isFeb = month.toLowerCase().indexOf("feb") > -1;
        let isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        let isEven = this.months.indexOf(month) % 2 === 0;

        if (isFeb) {
            limit = 28;
        }

        if (isFeb && isLeapYear) {
            limit = 29;
        } else {
            if (!isEven) {
                limit = 30;
            }
        }

        this.days = [];

        for (let i = 1; i <= limit; i++) {
            this.days.push(i);
        }

        this.days.reverse();

        if (this.days.indexOf(this.dateModel.day) <= -1) {
            this.dateModel.day = this.days[0];
            this.onDateChange();
        }
    }

    getMonths(year: number): void {
        this.months = [];
        let limit = this.availableMonths.length;

        if (year === new Date().getFullYear()) {
            limit = new Date().getMonth() + 1;
        }

        for (let i = 0; i < limit; i++) {
            this.months.push(this.availableMonths[i]);
        }
        
        this.months.reverse();

        if (this.months.indexOf(this.dateModel.month) <= -1) {
            this.dateModel.month = this.months[0];
            this.onDateChange();
        }
    }

    getYears(): void {
        this.years = [];
        let currentYear = new Date().getFullYear();
        let limit = 80;

        for (let i = currentYear - limit; i <= currentYear; i++) {
            this.years.push(i);
        }

        this.years.reverse();
    }

    onDateChange() {
        let newDate = new Date(this.dateModel.year, this.availableMonths.indexOf(this.dateModel.month), this.dateModel.day);
        this.dateChange.emit(newDate);
        this.onUpdate.emit(newDate);
    }
}
