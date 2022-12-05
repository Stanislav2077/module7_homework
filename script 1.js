const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};
function func(student) {
    for (let key in student) {

        if (student.hasOwnProperty(key)) {
            console.log(key+ ': ' + student[key]);
        };
    };
};
func(user);