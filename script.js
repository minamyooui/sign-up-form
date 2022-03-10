const password = document.getElementById('password');
const confirm_pw = document.getElementById('confirm_pw');
const div = document.getElementById('pw-div');
const submit = document.getElementById("submit");
addElisteners();

function addElisteners() {
  submit.addEventListener('click', validate_pw);
  confirm_pw.addEventListener('blur', validate_pw);
  confirm_pw.addEventListener('keyup', validate_pw);
  password.addEventListener('blur', validate_pw);
  password.addEventListener('focus', remove);
}

function validate_pw() {
  if (password.value != confirm_pw.value) {
    add(); 
  } else {
    remove();
  }
}

function add() {
  password.classList.add('error');
  confirm_pw.classList.add('error');
  div.classList.add('error');
}

function remove() {
  password.classList.remove('error');
  confirm_pw.classList.remove('error');
  div.classList.remove('error');
}

