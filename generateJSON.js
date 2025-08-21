const fs = require('fs');
const path = require('path');

const studentsDir = path.join(__dirname, 'students');
const outputFilePath = path.join(__dirname, 'students.json');

fs.readdir(studentsDir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory:', err);
    }

    const students = files
        .filter(file => file.endsWith('.txt'))
        .map(file => {
            const filePath = path.join(studentsDir, file);
            const content = fs.readFileSync(filePath, 'utf-8').trim();
            return { name: content };
        });

    fs.writeFileSync(outputFilePath, JSON.stringify(students, null, 2));
    console.log('students.json has been generated successfully.');
});