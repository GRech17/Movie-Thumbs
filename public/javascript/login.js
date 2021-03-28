async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' },
        validate: function validateEmail(username) {
          return validator.validate(username);
      }
      });
  
      if (response.ok) {
        console.log('success');

        document.location.replace('/ToT');
      } else {
        alert(response.statusText);
      }
    }
};


document.querySelector('#login-form').addEventListener('submit', loginFormHandler);