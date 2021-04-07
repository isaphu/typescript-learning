class Department {
  // id: string
  // name: string;
  public employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
  }

  addEmployee(name: string) {
    if(name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment ("d1", ["Jane"]);

it.addEmployee("Isa");
it.addEmployee("Max");

it.describe();
it.printEmployeeInformation();

console.log(it)

const accounting = new AccountingDepartment('d2', ["Max"]);
accounting.printReports();
accounting.addEmployee('Jack')
accounting.addEmployee('Norrr')
console.log(accounting)



// const accountingCopy = { name: 'Accounting_Back', describe: accounting.describe};
// accountingCopy.describe();

// const accountingCopied = { name: 'Accounting_Front', describe: accounting.describe};
// accountingCopied.describe();
