async function loadSchedule() {
    try {
        const tbody = document.getElementById("table-body");
        const response = await fetch('/api/schedule');
        const data = await response.json();

        tbody.innerHTML = data.map((item, index) =>`
            <tr>
                <td>${index + 1}</td>
                <td>${item.namaPemilik}</td>
                <td>${item.namaHewan}</td>
                <td>${item.jenisHewanPeliharaan}</td>
                <td>${item.jenisLayanan}</td>
                <td>${item.tanggalBerobat}</td>
            </tr>
            `).join("")
    } catch (error) {
        console.error("Error loading schedule", error);
    }
}

document.getElementById("booking-form").addEventListener("submit", async (e) =>{
    e.preventDefault();

    const namapemilik = document.getElementById('owner-name').value;
    const namahewan = document.getElementById('pet-name').value;
    const jenishewanpeliharaan = document.getElementById('pet-type').value;
    const jenislayanan = document.getElementById('service-type').value;
    const tanggalberobat = document.getElementById('date').value;
    const newBooking={
        namaPemilik:namapemilik,
        namaHewan:namahewan,
        jenisHewanPeliharaan:jenishewanpeliharaan,
        jenisLayanan:jenislayanan,
        tanggalBerobat:tanggalberobat
    }
    await fetch('/api/register',{
        method:"POST",
        headers:{"Content-type" : "application/json"},
        body: JSON.stringify(newBooking)
    });

    document.getElementById('booking-form').reset();
    loadSchedule();
    
})

document.getElementById('btn-refresh').addEventListener("click",loadSchedule);

loadSchedule();