const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

let scheduleData = [
    {
        namaPemilik: "Hugo",
        namaHewan: "Cherry",
        jenisHewanPeliharaan: "Anjing", 
        jenisLayanan: "Grooming", 
        tanggalBerobat: "2026-05-10"
    }
];

app.get("/api/schedule", (req, res) => {
    res.json(scheduleData);
});

app.post("/api/register", (req, res) => {
    const newBooking = req.body;
    scheduleData.push(newBooking);
    res.json({ message: "Pendaftaran Berhasil", data: newBooking });
});

app.listen(port, () => {
    console.log(`Succesfully running server in port : ${port}`)
})  
