// array of objects
let contacts = {
  customers: [
    {firstName: 'Bob', lastName: 'Tabor', phoneNumbers: ['(123) 456-7890', '(123) 567-8901']},
    {firstName: 'Richard', lastName: 'Boughton', phoneNumbers: ['(123) 555-7894', '(123) 556-8911']}
  ],
  employees: [
    {firstName: 'Jude', lastName: 'Monye', phoneNumbers: ['(123) 456-7880', '(123) 577-8801']},
    {firstName: 'Conrad', lastName: 'Tabor', phoneNumbers: ['(312) 465-7894', '(123) 656-6911']},
    {firstName: 'Steve', lastName: 'Jaworski', phoneNumbers: ['(312) 465-4844']},
    {firstName: 'Grant', lastName: 'Gustin', phoneNumbers: ['(312) 365-4244']},
  ]
};

// getting all customers details
// console.log(contacts.customers);

// getting all employees details
// console.log(contacts.employees);

// getting the third employee details
console.log(contacts.employees[2]);

// getting the first employee's lastName
console.log(contacts.employees[0].lastName);