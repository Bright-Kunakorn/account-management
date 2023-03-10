import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';
import employeeData from '../server/employee.json';
import { DialogData, EmployeeDashboardComponent } from '../employee-dashboard/employee-dashboard.component';

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
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css'],
})
export class EmployeeInfoComponent {
  private employees: Employee[] = employeeData;
  public selectedEmployee: number;

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  public setSelect(id: number): void {
    this.selectedEmployee = id;
  }

  public getSelect(): number {
    return this.selectedEmployee;
  }

  public openDialogEdit(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(EditPopupComponent, {
      data: { id: this.selectedEmployee },
    });
  }

  public openDialogDel(ID: number): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      data: { id: ID },
    });
  }

  public getEmployees(ID: number): Employee[] {
    return this.employees.filter((employee) => employee.id === ID);
  }
}
