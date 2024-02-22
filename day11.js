document.addEventListener("DOMContentLoaded", function () {
    loadExerciseLog();
});

function logExercise() {
    const exerciseInput = document.getElementById("exercise");
    const durationInput = document.getElementById("duration");

    const exercise = exerciseInput.value;
    const duration = durationInput.value;

    if (exercise && duration) {
        const logSection = document.getElementById("exercise-log");

        const li = document.createElement("li");
        li.innerHTML = <strong>${exercise}</strong> - ${duration} minutes;
        logSection.appendChild(li);

        // Clear input fields
        exerciseInput.value = "";
        durationInput.value = "";

        // Save the exercise log to localStorage (you can use a backend for persistence)
        saveExerciseLog();
    } else {
        alert("Please enter both exercise and duration");
    }
}

function saveExerciseLog() {
    const logSection = document.getElementById("exercise-log");
    const exerciseLog = logSection.innerHTML;

    // Save to localStorage
    localStorage.setItem("exerciseLog", exerciseLog);
}

function loadExerciseLog() {
    const logSection = document.getElementById("exercise-log");
    const exerciseLog = localStorage.getItem("exerciseLog");

    if (exerciseLog) {
        logSection.innerHTML = exerciseLog;
    }
}