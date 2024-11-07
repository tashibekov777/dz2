function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    let valid = true;
  
    if (name === "") {
      document.getElementById('nameError').innerText = "Заполните строку имени";
      valid = false;
    } else {
      document.getElementById('nameError').innerText = "";
    }
  
    if (!email.includes('@') || !email.includes('.')) {
      document.getElementById('emailError').innerText = "Неправильный email";
      valid = false;
    } else {
      document.getElementById('emailError').innerText = "";
    }
  
    if (password.length < 5) {
      document.getElementById('passwordError').innerText = "Минимум 5 символов";
      valid = false;
    } else {
      document.getElementById('passwordError').innerText = "";
    }
  
    if (valid) {
      alert("Ок");
    }
  }
  