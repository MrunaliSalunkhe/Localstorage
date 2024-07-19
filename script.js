function saveData() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('age', age);

    console.log('Data saved to local storage:');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Age: ${age}`);

    document.getElementById('result').innerText = 'Data saved! Check console for details.';
}

function getData() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const age = localStorage.getItem('age');

    if (username && email && age) {
        console.log('Retrieved data from local storage:');
        console.log(`Username: ${username}`);
        console.log(`Email: ${email}`);
        console.log(`Age: ${age}`);

        document.getElementById('result').innerText = 'Data retrieved! Check console for details.';
    } else {
        console.log('No data found in local storage.');
        document.getElementById('result').innerText = 'No data found.';
    }
}

function clearData() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('age');

    console.log('Data cleared from local storage.');

    document.getElementById('result').innerText = 'Data cleared! Check console for details.';
}
