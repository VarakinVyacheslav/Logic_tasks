const sarah = {
    name: 'Sarah',
    job: {
        name: 'Andersen',
        hiringDate: '23.07.2020'
    }
}

let { name, hiringDate } = sarah.job;

function printJobName(user) {
    console.log(name);
}

printJobName(sarah);