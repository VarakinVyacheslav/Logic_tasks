const sarah = {
    name: 'Sarah',
    job: {
        name: 'Andersen',
        hiringDate: '23.07.2020'
    }
}

function printJobName({ job: { name } }) {
    console.log(name);
}

printJobName(sarah);