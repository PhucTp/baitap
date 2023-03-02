const loginBtn = document.querySelector('#loginBtn');

function handleLogin(username, password) {
    // xu ly dang nhap
    if(username == 'admin' && password == 'admin') {
        alert("thanh cong");
        window.location.href = "dashboard.html";
    }
  }

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const username = document.querySelector('#txtUsername').value;
  const password = document.querySelector('#txtmatkhau').value;
  handleLogin(username, password);
  
});
