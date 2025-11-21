document.getElementById("quizForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    let score = 0;

    for (let i = 1; i <= 10; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) score += Number(answer.value);
    }

    // Lưu trạng thái đã làm + điểm
    localStorage.setItem("exerciseFinished", "true");
    localStorage.setItem("exerciseScore", score);

    alert("Bạn được: " + score + "/10 điểm 😍");

    // Quay lại trang học
    window.location.href = "ls3l11.html";
});
