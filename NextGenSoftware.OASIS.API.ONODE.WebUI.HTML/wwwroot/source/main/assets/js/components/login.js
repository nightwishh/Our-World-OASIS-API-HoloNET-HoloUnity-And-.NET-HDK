// File: login.js

function onLogin() {
  let email = document.getElementById('login-email').value;
  let password = document.getElementById('login-password').value;
  let userObject = {
    email,
    password
  }
  const userAction = async () => {
    const response = await fetch('https://api.oasisplatform.world/api/avatar/authenticate', {
      method: 'POST',
      body: JSON.stringify(userObject), // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 200) {
      const myJson = await response.json(); //extract JSON from the http response
      alert(myJson.message);

      // hide the login/signup buttons
      var elementList = document.getElementsByClassName("js-nav__login");
      for (var i = 0; i < elementList.length; i++) {
        elementList[i].classList.add('hide-logins');
      }
      //===============================//

      window.location.reload();
    } else {
      const myJson = await response.json(); //extract JSON from the http response
      alert(myJson.title);
      window.location.reload();
    }

  }
  userAction();
}