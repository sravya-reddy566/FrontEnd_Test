// Focus first box on load
window.onload = function () {
    document.getElementById("ch1").focus();
};

// Convert grade letters to points
function gradeToPoints(grade) {
    grade = grade.toUpperCase();

    const table = {
        "A": 4.0,
        "B": 3.0,
        "C": 2.0,
        "D": 1.0,
        "F": 0.0
    };

    return table[grade] ?? null;
}

function calculateGPA() {
    let totalPoints = 0;
    let totalCredits = 0;
    let entries = 0;

    for (let i = 1; i <= 5; i++) {
        let ch = document.getElementById("ch" + i).value.trim();
        let gr = document.getElementById("gr" + i).value.trim();

        if (ch !== "" && gr !== "") {

            let credit = Number(ch);
            let points = gradeToPoints(gr);

            if (isNaN(credit) || credit <= 0) {
                alert("Invalid credit hours in Course " + i);
                return;
            }

            if (points === null) {
                alert("Invalid grade for Course " + i + ": " + gr);
                return;
            }

            totalCredits += credit;
            totalPoints += points * credit;
            entries++;
        }
    }

    if (entries < 2) {
        alert("Please enter at least 2 courses to calculate GPA.");
        return;
    }

    let gpa = totalPoints / totalCredits;

    document.getElementById("result").value = gpa.toFixed(2);
}

function resetGPA() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById("ch" + i).value = "";
        document.getElementById("gr" + i).value = "";
    }

    document.getElementById("result").value = "";
    document.getElementById("ch1").focus();
}
