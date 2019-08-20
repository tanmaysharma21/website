document.getElementById("userr").hidden = true;
document.getElementById("loginn").hidden = true;
function ToDo() {
  document.getElementById("myInputa").hidden = false;
  document.getElementById("userr").hidden = true;
  document.getElementById("loginn").hidden = true;
}
function User() {
  document.getElementById("userr").hidden = false;
  document.getElementById("myInputa").hidden = true;
  document.getElementById("loginn").hidden = true;
}
function Login() {
  document.getElementById("loginn").hidden = false;
  document.getElementById("myInputa").hidden = true;
  document.getElementById("userr").hidden = true;
}
