document.getElementById("addCoursesBtn").addEventListener("click", addCourseInputs);
document.getElementById("calculateBtn").addEventListener("click", calculateCGPA);

function addCourseInputs() {
  const numCourses = parseInt(document.getElementById("numCourses").value);
  const courseInputsContainer = document.getElementById("courseInputs");
  courseInputsContainer.innerHTML = '';

  for (let i = 1; i <= numCourses; i++) {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course-input");

    courseDiv.innerHTML = `
      <h3>Course ${i}</h3>
      <label for="credit${i}">Credit:</label>
      <input type="number" id="credit${i}" min="1" max="10" value="1">
      <label for="grade${i}">Grade (out of 100):</label>
      <input type="number" id="grade${i}" min="0" max="100" value="0">
    `;

    courseInputsContainer.appendChild(courseDiv);
  }
}

function calculateCGPA() {
  const numCourses = parseInt(document.getElementById("numCourses").value);
  let totalCredits = 0;
  let totalGradePoints = 0;

  for (let i = 1; i <= numCourses; i++) {
    const credit = parseInt(document.getElementById(`credit${i}`).value);
    const grade = parseFloat(document.getElementById(`grade${i}`).value);

    if (isNaN(credit) || isNaN(grade) || credit < 1 || grade < 0 || grade > 100) {
      alert("Invalid input. Please enter valid credit and grade values.");
      return;
    }

    totalCredits += credit;
    totalGradePoints += (credit * (grade / 100));
  }

  const cgpa = totalGradePoints / totalCredits * 10;
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Your CGPA is: ${cgpa.toFixed(2)}`;
}
