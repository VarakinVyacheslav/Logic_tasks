const sarah = {
    name: 'Sarah',
    job: {
        name: 'Andersen',
        hiringDate: '23.07.2020'
    }
}

function printJobName(user) {
    let { name } = user.job;
    console.log(name);
}

printJobName(sarah);