// ฟังก์ชันคำนวณวันครบรอบ
function updateCounter() {
    let startDate = localStorage.getItem("startDate");
    if (!startDate) {
        document.getElementById("counter").innerText = "กรุณาเลือกวันที่เริ่มคบกัน";
        return;
    }

    startDate = new Date(startDate);
    const today = new Date();
    let diff = today - startDate;

    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    let months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    document.getElementById("counter").innerText = `${years} ปี ${months} เดือน ${days} วัน`;
}

// ฟังก์ชันบันทึกข้อมูลลง Local Storage
function saveData() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const startDate = document.getElementById("startDate").value;

    localStorage.setItem("name1", name1);
    localStorage.setItem("name2", name2);
    localStorage.setItem("startDate", startDate);

    updateCounter();
}

// โหลดข้อมูลที่บันทึกไว้
function loadData() {
    // โหลดชื่อ
    document.getElementById("name1").value = localStorage.getItem("name1") || "";
    document.getElementById("name2").value = localStorage.getItem("name2") || "";
    document.getElementById("startDate").value = localStorage.getItem("startDate") || "";

    // โหลดและตั้งค่ารูปภาพ
    const img1 = localStorage.getItem("img1");
    const img2 = localStorage.getItem("img2");
    if (img1) document.getElementById("img1").src = img1;
    if (img2) document.getElementById("img2").src = img2;

    updateCounter();
}

// ฟังก์ชันอัปโหลดรูปภาพและบันทึกลง Local Storage
function uploadImage(inputId, imgId, storageKey) {
    document.getElementById(inputId).addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById(imgId).src = e.target.result;
                localStorage.setItem(storageKey, e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
}

// โหลดข้อมูลเมื่อเปิดหน้าเว็บ
window.onload = function() {
    loadData();
    uploadImage("upload1", "img1", "img1");
    uploadImage("upload2", "img2", "img2");
};
