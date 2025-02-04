const tableHeadings = ["S/N", "NAME", "GENDER", "STATE", "AGE"];
const people = [
  { id: "1", name: "Jude", gender: "Male", state: "Delta", age: "15" },
  { id: "2", name: "Rose", gender: "Female", state: "Delta", age: "20" },
  { id: "3", name: "Kelvin", gender: "Male", state: "Edo", age: "22" },
  { id: "4", name: "Janet", gender: "Female", state: "Abia", age: "18" },
  { id: "5", name: "Prince", gender: "Male", state: "Imo", age: "25" },
];

const table = document.getElementById("table");
// creating the ths
const headingNodes = tableHeadings.map((heading) => {
  const th = document.createElement("th");
  th.textContent = heading;
  return th;
});
const headingRow = document.createElement("tr");
// appending all the headingNodes to the headingRow
headingRow.append(...headingNodes);
// creating the tds
const tableDataNodeArray = people.map((person, index) => {
  let personDataArray = Object.values(person);
  let tableDataNode = personDataArray.map((data) => {
    const td = document.createElement("td");
    td.textContent = data;
    return td;
  });
  // console.log(tableDataNode);
  return tableDataNode;
});
// console.log(tableDataNodeArray);
// creating all the rows for the data
const tableRows = tableDataNodeArray.map((item) => {
  const tr = document.createElement("tr");
  tr.append(...item);
  return tr;
});
console.log(tableRows);
// appending all the nodes to the table
table.append(headingRow, ...tableRows);
table.setAttribute("border", "1px");
table.setAttribute("bgcolor", "gray");
table.setAttribute("cellpadding", "3px");
table.setAttribute("cellspacing", "0px");

// Which can also be done in this way
/*
const tableHeadings = ["S/N", "NAME", "GENDER", "STATE", "AGE"];
const people = [
  { id: "1", name: "Jude", gender: "Male", state: "Delta", age: "15" },
  { id: "2", name: "Rose", gender: "Female", state: "Delta", age: "20" },
  { id: "3", name: "Kelvin", gender: "Male", state: "Edo", age: "22" },
  { id: "4", name: "Janet", gender: "Female", state: "Abia", age: "18" },
  { id: "5", name: "Prince", gender: "Male", state: "Imo", age: "25" },
];

const table = document.getElementById("table");
// creating the ths
const headingNodes = tableHeadings.map((heading) => {
  const th = document.createElement("th");
  th.textContent = heading;
  return th;
});
const headingRow = document.createElement("tr");
// appending all the headingNodes to the headingRow
headingRow.append(...headingNodes);
table.append(headingRow);
// creating the tds
people.forEach((person) => {
  const tr = document.createElement("tr");
  let personDataArray = Object.values(person);
  personDataArray.forEach((data) => {
    const td = document.createElement("td");
    td.textContent = data;
    tr.append(td);
  });
  table.append(tr);
});
// appending all the nodes to the table
table.setAttribute("border", "1px");
table.setAttribute("bgcolor", "gray");
table.setAttribute("cellpadding", "3px");
table.setAttribute("cellspacing", "0px");
*/
