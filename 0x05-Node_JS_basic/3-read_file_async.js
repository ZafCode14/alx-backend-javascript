const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then(data => {
      const lines = data.trim().split('\n');
      const headers = lines.shift().split(',');

      if (headers.length === 0) {
        throw new Error('Cannot load the database');
      }

      const students = lines
        .map(line => line.split(','))
        .filter(fields => fields.length === headers.length);

      const numberOfStudents = students.length;
      console.log(`Number of students: ${numberOfStudents}`);

      const fields = {};
      for (const student of students) {
        const field = student[student.length - 1];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      }

      for (const field in fields) {
        if (fields.hasOwnProperty(field)) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
    })
    .catch(error => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
