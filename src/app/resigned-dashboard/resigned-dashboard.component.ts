import { Component, ViewChild, Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';
import { EmployeeInfoComponent } from '../employee-info/employee-info.component';
import employeeData from '../server/employee.json';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar: string;
  street: string;
  city: string;
  department: string;
  job_title: string;
  gender: string;
  salary: number;
  hireDate: string;
  birthDate: string;
  educate: string;
  available: boolean;
}
@Component({
  selector: 'app-resigned-dashboard',
  templateUrl: './resigned-dashboard.component.html',
  styleUrls: ['./resigned-dashboard.component.css']
})
export class ResignedDashboardComponent {

  displayedColumns = ['id', 'first_name', 'email', 'job_title', 'department', 'salary', 'hireDate'];
  employees: Employee[] = employeeData.filter((employee) => employee.available === false);
  dataSource = new MatTableDataSource(this.employees);
  collectionSize = this.employees.length;
  public id: number;
  selected: number;
  routeQueryParams$: Subscription;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialogRef: MatDialog, private route: ActivatedRoute, private router: Router) {
    this.routeQueryParams$ = route.queryParams.subscribe(params => {
      if (params['dialog']) {
        this.openDialogInfo(this.id);
      }
      console.log(this.employees.length)
    });
  }

  private employeeInfo: EmployeeInfoComponent;

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialogDel(ID: number): void {
    const dialogRef = this.dialogRef.open(DeletePopupComponent, {
      data: { selected: ID }
    });

    dialogRef.afterOpened().subscribe(result => {
      this.selected = ID;
      this.router.navigate(['.'], { relativeTo: this.route });
    });
  }
  public getID() {
    return this.id;
  }
  public setID(ID: number) {
    this.id = ID;
  }

  public openDialogEdit(): void {
    this.dialogRef.open(EditPopupComponent);
  }
  public openDialogInfo(ID: number): void {
    const dialogRef = this.dialogRef.open(EmployeeInfoComponent, {
      data: { selected: ID }
    });

    dialogRef.afterOpened().subscribe(result => {
      this.selected = ID;
      this.router.navigate(['.'], { relativeTo: this.route });
    });
  }

  public goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}





