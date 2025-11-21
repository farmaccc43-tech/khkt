function openLesson(id) {
    if (id === 1) {
        localStorage.setItem("openLesson", "readOnly");
        window.location.href = "ls3l11.html";
    }
}
