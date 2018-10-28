let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

function showStudents1(array){
    const array_length = array.length;
    for(let index = 0; index < array_length; index++){
        // define student as current array value through each loop
        const student = array[index];
        // console log each array value through the loop
        // console.log('Name: ' + student.name + ', ' + student.cohort);
        console.log(`Name: ${student.name} Cohort: ${student.cohort}`);
    }
    return array;
}
// showStudents1(students);


function showStudents2(array){
    let count = 1;
    for(const student of students){
        console.log(`${count++} - Name: ${student.name}, Cohort: ${student.cohort}`);
    }
    return array;
}
// showStudents2(students);

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function showEmployees1(array){
    for(const type in users){
        let employeeCount = 1;
        console.log(type.toUpperCase());
        // print EMPLOYEES and MANAGERS for each loop
        for(let person in users[type]){
            // loop through individual array values
            const fname = users[type][person].first_name;
            const lname = users[type][person].last_name;
            const name = (lname + ', ' + fname).toUpperCase();
            const length = fname.length + lname.length;
            console.log(`${employeeCount} - ${name} - ${length}`);
            employeeCount++;
        }
    }
 }

 showEmployees1(users);
