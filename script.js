// โหลดข้อมูลจาก Local Storage ถ้ามี
function loadData() {
    document.getElementById("name1").value = localStorage.getItem("name1") || "";
    document.getElementById("name2").value = localStorage.getItem("name2") || "";
    document.getElementById("startDate").value = localStorage.getItem("startDate") || "";
    document.getElementById("birthday").value = localStorage.getItem("birthday") || "";
    document.getElementById("theme").value = localStorage.getItem("theme") || "#ffebf0";
    document.body.style.backgroundColor = document.getElementById("theme").value;

    updateAnniversary();
}

// บันทึกข้อมูล
function saveData() {
    localStorage.setItem("name1", document.getElementById("name1").value);
    localStorage.setItem("name2", document.getElementById("name2").value);
    localStorage.setItem("startDate", document.getElementById("startDate").value);
    localStorage.setItem("birthday", document.getElementById("birthday").value);
    localStorage.setItem("theme", document.getElementById("theme").value);

    document.body.style.backgroundColor = document.getElementById("theme").value;
    updateAnniversary();
}

// คำนวณวันครบรอบ
function updateAnniversary() {
    const name1 = localStorage.getItem("name1") || "คนที่ 1";
    const name2 = localStorage.getItem("name2") || "คนที่ 2";
    document.getElementById("names").innerText = `${name1} ❤️ ${name2}`;

    const startDate = new Date(localStorage.getItem("startDate"));
    if (isNaN(startDate)) return;

    const today = new Date();
    const diffTime = today - startDate;
    const daysTogether = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const monthsTogether = Math.floor(daysTogether / 30);

    document.getElementById("showStartDate").innerText = startDate.toISOString().split('T')[0];
    document.getElementById("anniversary").innerText = daysTogether;
    document.getElementById("month-count").innerText = monthsTogether;

    const birthday = localStorage.getItem("birthday") || "";
    document.getElementById("showBirthday").innerText = birthday;
}

// แจ้งเตือนวันสำคัญ
function checkNotifications() {
    const today = new Date().toISOString().split('T')[0];
    const anniversary = localStorage.getItem("startDate");
    const birthday = localStorage.getItem("birthday");

    if (anniversary && today === anniversary) {
        alert("วันนี้วันครบรอบของคุณ! 🎉");
    }

    if (birthday && today === birthday) {
        alert("สุขสันต์วันเกิดคนที่คุณรัก! 🎂");
    }
}

// โหลดข้อมูลเมื่อเปิดเว็บ
window.onload = function () {
    loadData();
    checkNotifications();
};
