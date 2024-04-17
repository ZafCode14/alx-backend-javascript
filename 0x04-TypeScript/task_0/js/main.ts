// Define the interface for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Render the table using Vanilla JavaScript
const renderTable = (students: Student[]) => {
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse"; // Set border-collapse property to collapse
  const tbody = document.createElement("tbody");

  students.forEach(student => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = "1px solid #000"; // Add border to the cell
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid #000"; // Add border to the cell
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  table.style.border = "1px solid #000"; // Add border to the table
  document.body.appendChild(table);
};

// Call the renderTable function with the studentsList array
renderTable(studentsList);
