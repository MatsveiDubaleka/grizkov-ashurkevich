const BTN = document.querySelector('.btn');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const tel = document.querySelector('#tel');

const USERS = [];

BTN.addEventListener('click', () => {
  let user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    tel: tel.value,
  }
  USERS.push(user);

  let userContainer = document.createElement('div');
  userContainer.classList.add('user__container');
  document.body.appendChild(userContainer);

  for(let key in user) {
    let userKeys = document.createElement('div')
    userKeys.classList.add(key)
    userKeys.textContent = key + ': ' + user[key];
    userContainer.appendChild(userKeys)
  }
});