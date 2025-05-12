const signUpForm = document.querySelector(".login-form");

signUpForm.addEventListener("submit", handleSubmit);

function handleSubmit (event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
        return alert("All form fields must be filled in");
    };

    const data = {
        email: login.trim(),
        password: password.trim()
    }

    console.log(data);
  form.reset();
}
