const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};

function func(str, obj) {
    console.log(str in obj);
};

func('surname', user);
func('фамилия', user);