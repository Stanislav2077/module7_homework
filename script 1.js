const user = {
    имя: 'Ivan',
    фамилия: 'Klimov'
};

function db(usr) {
    for (let key in usr) {

        if (usr.hasOwnProperty(key)) {

            console.log(`${key}: ${usr[key]}`);
        };

    };

};
db(user);