abstract class Department {
  static fiscalYear = 2020;
  // id: string
  // name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name}
  }

  abstract describe(this: Department): void

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log('IT department - ID' + this.id)
  }
}

class AccountingDepartment extends Department {
  describe(this: Department): void {
    throw new Error("Method not implemented.");
  }
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if(!value) {
      throw new Error('Please pass in a valid value')
    }
    this.addReports(value)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if(AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('<ax');
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Isa");
it.addEmployee("Jane");

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Year End Report';
accounting.addReports("Something went wrong....");
console.log(accounting.mostRecentReport);

accounting.printReports();

accounting.addEmployee("Jack");
accounting.addEmployee("Norrr");

console.log(accounting);

// const accountingCopy = { name: 'Accounting_Back', describe: accounting.describe};
// accountingCopy.describe();

// const accountingCopied = { name: 'Accounting_Front', describe: accounting.describe};
// accountingCopied.describe();
