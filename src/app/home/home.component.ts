import { Component } from '@angular/core';
import employeeData from '../server/employee.json';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  count: number;
  filteredEmployees = employeeData.filter((employee) => employee.available === true);



  filteredBusinessDev = this.filteredEmployees.filter(
    (obj) => obj.department === 'Business Development'
  );
  filteredProductManage = this.filteredEmployees.filter(
    (obj) => obj.department === 'Product Management'
  );
  filteredSupport = this.filteredEmployees.filter((obj) => obj.department === 'Support');
  filteredAccount = this.filteredEmployees.filter(
    (obj) => obj.department === 'Accounting'
  );
  filteredTraining = this.filteredEmployees.filter(
    (obj) => obj.department === 'Training'
  );
  filteredLegal = this.filteredEmployees.filter((obj) => obj.department === 'Legal');
  filteredSales = this.filteredEmployees.filter((obj) => obj.department === 'Sales');
  filteredServices = this.filteredEmployees.filter(
    (obj) => obj.department === 'Services'
  );
  filteredResearchDev = this.filteredEmployees.filter(
    (obj) => obj.department === 'Research and Development'
  );
  fillterData = [
    this.filteredBusinessDev.length,
    this.filteredProductManage.length,
    this.filteredSupport.length,
    this.filteredAccount.length,
    this.filteredTraining.length,
    this.filteredLegal.length,
    this.filteredSales.length,
    this.filteredServices.length,
    this.filteredResearchDev.length,
  ];

  maxNumber = Math.max(...this.fillterData);

  private data = [
    {
      Framework: 'Business Development',
      Stars: this.filteredBusinessDev.length,
      Released: '1',
    },
    {
      Framework: 'Product Management',
      Stars: this.filteredProductManage.length,
      Released: '2',
    },
    { Framework: 'Support', Stars: this.filteredSupport.length, Released: '3' },
    {
      Framework: 'Accounting',
      Stars: this.filteredAccount.length,
      Released: '4',
    },
    {
      Framework: 'Training',
      Stars: this.filteredTraining.length,
      Released: '5',
    },
    { Framework: 'Legal', Stars: this.filteredLegal.length, Released: '6' },
    { Framework: 'Sales', Stars: this.filteredSales.length, Released: '7' },
    {
      Framework: 'Services',
      Stars: this.filteredServices.length,
      Released: '8',
    },
    {
      Framework: 'Research and Development',
      Stars: this.filteredResearchDev.length,
      Released: '9',
    },
  ];
  employees: Employee[] = employeeData.filter((employee) => employee.available === true);

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public mbarChartLabels: string[] = [
    'Business Development',
    'Product Management',
    'Support',
    'Accounting',
    'Training',
    'Legal',
    'Services',
    'Research and Development',
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {
      data: [
        this.filteredBusinessDev.length,
        this.filteredProductManage.length,
        this.filteredSupport.length,
        this.filteredAccount.length,
        this.filteredTraining.length,
        this.filteredLegal.length,
        this.filteredSales.length,
        this.filteredServices.length,
        this.filteredResearchDev.length,
      ],
      label: 'Employee Member',
      backgroundColor: '#6783cc',
    },
  ];

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
}
