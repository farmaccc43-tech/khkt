// LOAD STATE
let progress = JSON.parse(localStorage.getItem("progressLesson2")) || {
    read: false,
    video: false,
    exercise: false
};

// Nếu mở từ homepage → đánh dấu đã đọc
if (localStorage.getItem("openLesson") === "readOnly") {
    progress.read = true;
    localStorage.removeItem("openLesson");
    saveState();
}

// KHÔNG CHO TỰ CLICK CHECKBOX
document.querySelectorAll('.checkbox').forEach(box => {
    box.style.pointerEvents = "none";
});

// NÚT VIDEO
document.getElementById("videoBtn")?.addEventListener("click", () => {
    progress.video = true;
    saveState();
    updateUI();
    alert("🎬 Video AI đang chạy...");
});

// FORM BÀI TẬP
document.getElementById("quizForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    let correct = 0;
    correct += document.querySelector('input[name="q1"]:checked')?.value === "1" ? 1 : 0;
    correct += document.querySelector('input[name="q2"]:checked')?.value === "1" ? 1 : 0;

    document.getElementById("resultMessage").innerText =
        "Bạn trả lời đúng: " + correct + "/2 câu.";

    // Đánh dấu đã làm bài tập
    progress.exercise = true;
    saveState();
    updateUI();
});

// SAVE
function saveState() {
    localStorage.setItem("progressLesson2", JSON.stringify(progress));
}

// UPDATE UI
function updateUI() {
    document.querySelector('[data-check="read"]').classList.toggle("checked", progress.read);
    document.querySelector('[data-check="video"]').classList.toggle("checked", progress.video);
    document.querySelector('[data-check="exercise"]').classList.toggle("checked", progress.exercise);

    let total = 3;
    let done = (progress.read ? 1 : 0) + (progress.video ? 1 : 0) + (progress.exercise ? 1 : 0);

    let percent = Math.round((done / total) * 100);

    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-text").innerText = percent + "%";
}
// NÚT LÀM BÀI TẬP
document.getElementById("exerciseBtn")?.addEventListener("click", () => {
    // Đánh dấu đã làm bài tập trong tiến độ
    progress.exercise = true;
    saveState();
    updateUI();

    // Chuyển sang trang làm bài tập
    window.location.href = "ex1.html";
});
      function openLesson(id) {
        if (id === 1) {
          window.location.href = "ls3l11.html";
        }
      }
document.getElementById("mindmapBtn").addEventListener("click", function () {
    window.location.href = "mindmap3.html";
});
  const videoBtn = document.getElementById("videoBtn");
  const popup = document.getElementById("videoPopup");
  const closeBtn = document.getElementById("closeVideo");
  const video = document.getElementById("videoAI");

  videoBtn.onclick = () => {
    popup.style.display = "flex";
    video.play();
  };

  closeBtn.onclick = () => {
    popup.style.display = "none";
    video.pause();
    video.currentTime = 0;
  };



// RUN
updateUI();
;

