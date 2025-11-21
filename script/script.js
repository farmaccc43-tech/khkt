
    const modal = document.getElementById("gradeModal");
    const startBtn = document.getElementById("startBtn");
    const closeModal = document.getElementById("closeModal");

    startBtn.onclick = () => modal.style.display = "flex";
    closeModal.onclick = () => modal.style.display = "none";
    document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("gradeModal").style.display = "flex";
});


    // Điều hướng theo từng khối
    function goToGrade(grade) {
        if (grade === 10) window.location.href = "homepage10.html";
        if (grade === 11) window.location.href = "homepage11.html";
        if (grade === 12) window.location.href = "homepage12.html";
    }
    function updateNavbarUser() {
        const userPanel = document.getElementById("userPanel");
        const loggedIn = localStorage.getItem("loggedIn");
        const user = JSON.parse(localStorage.getItem("currentUser"));

        if (loggedIn && user) {
            userPanel.innerHTML = `
                <span style="font-weight:600; margin-right:10px;">👋 ${user.name}</span>
                <button class="login-btn" onclick="logout()">Đăng xuất</button>
            `;
        } else {
            userPanel.innerHTML = `
                <button class="login-btn" onclick="goLogin()">Đăng nhập</button>
            `;
        }
    }

    updateNavbarUser();


