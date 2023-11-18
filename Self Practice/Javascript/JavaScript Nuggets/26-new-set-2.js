// new Set() - accepts iterable objects

const products = [
  {title: 'high-back bench', company: 'ikea'},
  {title: 'albany table', company: 'marcos'},
  {title: 'accent chair', company: 'caressa'},
  {title: 'wooden table', company: 'ikea'},
];
const companies = products.map(item => item.company);
console.log(companies); // all the companies, including repeated companies
const uniqueCompanies = new Set(companies); // forms an object
console.log(uniqueCompanies); // all the unique companies( no repeated companies)
// const uniqueCompaniesArray = [...uniqueCompanies];
const uniqueCompaniesArray = ['all', ...uniqueCompanies]; // you can add more values if you want
console.log(uniqueCompaniesArray);

// above code refactored
const result = ['all', ...new Set(products.map(item => item.company))];
console.log(result);