const form = document.getElementById('register-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (username === '') {
    alert('Username is required');
    return;
  }

  if (email === '') {
    alert('Email is required');
    return;
  }

  if (!validateEmail(email)) {
    alert('Invalid email address');
    return;
  }

  if (password === '') {
    alert('Password is required');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
  }

  if (confirmPassword === '') {
    alert('Confirm password is required');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  if (phone === '') {
    alert('Phone number is required');
    return;
  }

  if (!validatePhone(phone)) {
    alert('Invalid phone number');
    return;
  }

  // If all validation passes, submit the form
  form.submit();
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  return phoneRegex.test(phone);
}