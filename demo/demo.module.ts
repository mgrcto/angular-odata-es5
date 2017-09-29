import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DataTableModule, DialogModule, PaginatorModule, TooltipModule, PanelModule } from 'primeng/primeng';

import { AngularODataModule } from '../src';
import { DemoComponent } from './demo.component';
import { EmployeeGridODataComponent } from './employeeGridOData.component';

@NgModule({
    declarations: [DemoComponent, EmployeeGridODataComponent],
    exports: [PanelModule, NoopAnimationsModule],
    imports: [BrowserModule, HttpClientModule, DataTableModule, TooltipModule, PaginatorModule, DialogModule, PanelModule, NoopAnimationsModule, AngularODataModule.forRoot()],
    bootstrap: [DemoComponent]
})
export class DemoModule { }
