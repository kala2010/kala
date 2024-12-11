let attendanceData = [];

// فتح شاشة الأشهر
function openMonthsScreen(selectedClass) {
  document.getElementById("main-screen").style.display = "none";
  document.getElementById("months-screen").style.display = "block";
  document.getElementById("selected-class").innerText = `الصف: ${selectedClass}`;
}

// فتح شاشة الأيام
function openDaysScreen(month) {
  document.getElementById("months-screen").style.display = "none";
  document.getElementById("days-screen").style.display = "block";
  document.getElementById("selected-month").innerText = `الشهر: ${month}`;
}

// فتح شاشة الأسماء
function openNamesScreen(day) {
  document.getElementById("days-screen").style.display = "none";
  document.getElementById("names-screen").style.display = "block";
  document.getElementById("selected-day").innerText = `اليوم: ${day}`;
}

// العودة للشاشة الرئيسية
function goBackToMain() {
  document.getElementById("months-screen").style.display = "none";
  document.getElementById("main-screen").style.display = "block";
}

// العودة لشاشة الأشهر
function goBackToMonths() {
  document.getElementById("days-screen").style.display = "none";
  document.getElementById("months-screen").style.display = "block";
}

// العودة لشاشة الأيام
function goBackToDays() {
  document.getElementById("names-screen").style.display = "none";
  document.getElementById("days-screen").style.display = "block";
}

// تسجيل الحضور
function setAttendance(studentId, status) {
  const studentName = document.getElementById(`student-${studentId}`).value || `طالب ${studentId}`;
  const day = document.getElementById("selected-day").innerText;
  const month = document.getElementById("selected-month").innerText;
  const className = document.getElementById("selected-class").innerText;
  attendanceData.push({ className, month, day, studentName, status });
  alert(`تم تسجيل ${status} للطالب: ${studentName}`);
}

// حفظ البيانات إلى Excel
function saveToExcel() {
  const ws = XLSX.utils.json_to_sheet(attendanceData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "الحضور");
  XLSX.writeFile(wb, "Attendance.xlsx");
}
