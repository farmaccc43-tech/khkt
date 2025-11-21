// Kiểm tra trước khi vào 1 trang cần login
function requireLogin(nextPage) {
    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = nextPage;
    } else {
        localStorage.setItem("redirectAfterLogin", nextPage);
        window.location.href = "signup.html";
    }
}

// Khi bấm nút đăng nhập ở navbar
function goLogin() {
    window.location.href = "signup.html";
}

// Đăng xuất
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

