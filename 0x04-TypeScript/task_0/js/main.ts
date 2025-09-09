// 1. Define Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create 2 students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Mary",
  lastName: "Smith",
  age: 22,
  location: "Abuja",
};

// 3. Store them in an array
const studentsList: Student[] = [student1, student2];

// 4. Create a table in Vanilla JS
const table = document.createElement("table");
const headerRow = document.createElement("tr");

// Optional: add headers
const headers = ["First Name", "Last Name", "Age", "Location"];
headers.forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Add student rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  Object.values(student).forEach((value) => {
    const cell = document.createElement("td");
    cell.textContent = String(value);
    row.appendChild(cell);
  });

  table.appendChild(row);
});

// Append table to body
document.body.appendChild(table);
