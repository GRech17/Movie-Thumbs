const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      event.preventDefault();
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function() {
        document.location.replace("/ToT");
      })
      .catch(err => console.log(err))
    }
  }


document.querySelector('#login-form').addEventListener('submit', loginFormHandler);