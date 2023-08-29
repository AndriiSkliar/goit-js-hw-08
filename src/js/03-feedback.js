import throttle from 'lodash.throttle';

    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('[type="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const btnSubmit = form.querySelector('[type="submit"]');
    const LOCALSTORAGE_KEY = 'feedback-form-state';

    form.addEventListener("input", throttle(setUserInfo, 500));
    const savedState = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

     if (savedState) {
        emailInput.value = savedState.email;
        messageInput.value = savedState.message;
      }

function setUserInfo() {
      const currentState = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentState));
};


function submitForm(e) {
  e.preventDefault();

  if (emailInput.value === "" || messageInput.value === "") {
    alert("Please fill in all fields!");
    return
  }

  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(currentState);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
}
btnSubmit.addEventListener("click", submitForm);
