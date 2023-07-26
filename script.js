//your JS code here. If required.
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const age = document.querySelector('#age').value;
    const name = document.querySelector('#name').value;
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve();
        } else {
          reject();
        }
      }, 4000);
    }).then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    }).catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
  });


