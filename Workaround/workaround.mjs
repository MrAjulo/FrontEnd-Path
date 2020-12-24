import { getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility } from './employees.mjs';

import Employees from './employees.mjs';

function getEmployeeInformation(inputSalary) {
    Employees.salary = inputSalary;
    console.log('Cadre; ' + getCadre());
    console.log('Tax: ' + calculateTax());
    console.log('Benefits: ' + getBenefits());
    console.log('Bonus: ' + calculateBonus());
    console.log('Reimbursement Eleigibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);