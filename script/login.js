document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login");
    const registerBtn = document.getElementById("register");
    const container = document.getElementById("container");

    const signUpForm = document.querySelector(".sign-up form");
    const signInForm = document.querySelector(".sign-in form");

    /* 🔥 HIỆU ỨNG CHUYỂN PANEL (CHÍNH XÁC THEO CSS CỦA BẠN) */
    registerBtn.addEventListener("click", () => {
        container.classList.add("active");   // chuyển sang SIGN UP
    });

    loginBtn.addEventListener("click", () => {
        container.classList.remove("active"); // chuyển sang SIGN IN
    });

    /* 🔵 ĐĂNG KÝ */
    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;
        const pass2 = document.getElementById("password-again").value;

        if (pass !== pass2) {
            alert("Mật khẩu không khớp!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.find(u => u.email === email)) {
            alert("Email đã tồn tại!");
            return;
        }

        users.push({ name, email, password: pass });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Đăng ký thành công!");

        container.classList.remove("active"); // chuyển về SIGN IN
    });

    /* 🟢 ĐĂNG NHẬP */
    signInForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = signInForm.querySelector("input[type='name']").value;
        const password = signInForm.querySelector("input[type='password']").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(u => u.name === email && u.password === password);

        if (!user) {
            alert("Sai tên hoặc mật khẩu!");
            return;
        }

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));

        let redirect = localStorage.getItem("redirectAfterLogin") || "index.html";
        localStorage.removeItem("redirectAfterLogin");

        window.location.href = redirect;
    });
});

