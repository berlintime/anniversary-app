// วันที่เริ่มคบกัน (ปี, เดือน (0 = ม.ค.), วัน)
const startDate = new Date(2022, 5, 20);

function updateCounter() {
    const today = new Date();
    let diff = today - startDate;
    
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    let months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    document.getElementById('counter').innerText = `${years} ปี ${months} เดือน ${days} วัน`;
}

// อัปเดตเวลาทุกวัน
setInterval(updateCounter, 1000);
updateCounter();

// ฟังก์ชันอัปโหลดรูปภาพ
function uploadImage(inputId, imgId) {
    document.getElementById(inputId).addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById(imgId).src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
}

uploadImage("upload1", "img1");
uploadImage("upload2", "img2");
