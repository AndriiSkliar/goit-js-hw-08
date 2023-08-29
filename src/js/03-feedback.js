import throttle from 'lodash.throttle';

    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const LOCALSTORAGE_KEY = 'feedback-form-state';

    form.addEventListener("input", throttle(setUserInfo, 500));
    form.addEventListener('submit', submitForm);
    const savedState = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

     if (savedState) {
        emailInput.value = savedState.email;
        messageInput.value = savedState.message;
      }

function setUserInfo() {
  if (emailInput.value === "" || messageInput.value ==="") {
    alert("Please fill in all fields!");
    return
  }
      const currentState = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentState));
};


function submitForm(e) {
  e.preventDefault();

  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(currentState);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
}

