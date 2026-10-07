// ====== DATA (ganti dengan data asli) ======
const products = {
  individu: [
    { t: "Tabungan Nusa", d: "Setoran awal ringan, bebas biaya admin bulanan." },
    { t: "Deposito", d: "Bunga tetap dengan tenor fleksibel." },
    { t: "Kredit Multiguna", d: "Untuk kebutuhan pendidikan, renovasi, dan lainnya." }
  ],
  bisnis: [
    { t: "Kredit Usaha Kecil", d: "Modal kerja dan investasi untuk UMKM." },
    { t: "Giro Bisnis", d: "Kelola transaksi usaha dengan laporan harian." },
    { t: "Payroll", d: "Gaji karyawan masuk otomatis setiap bulan." }
  ]
};
const depositRates = { "1 bulan": 3.5, "3 bulan": 3.75, "6 bulan": 4.0, "12 bulan": 4.5, "24 bulan": 4.75 };
const branches = [
  { name: "Kantor Pusat", city: "Surabaya" },
  { name: "Cabang Malang", city: "Malang" },
  { name: "Cabang Sidoarjo", city: "Sidoarjo" },
  { name: "Cabang Kediri", city: "Kediri" },
  { name: "Cabang Jember", city: "Jember" }
];

const $ = (s) => document.querySelector(s);
const rupiah = (n) => "Rp " + Math.round(n).toLocaleString("id-ID");

// ====== Menu mobile ======
const burger = $(".burger"), menu = $("#menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", (e) => { if (e.target.tagName === "A") menu.classList.remove("open"); });

// ====== Slider hero ======
const slides = [...document.querySelectorAll(".slide")];
const dotsBox = $(".dots");
let cur = 0, timer;
slides.forEach((_, i) => {
  const b = document.createElement("button");
  b.setAttribute("aria-label", "Slide " + (i + 1));
  b.onclick = () => { show(i); restart(); };
  dotsBox.appendChild(b);
});
function show(i) {
  cur = i;
  slides.forEach((s, k) => s.classList.toggle("active", k === i));
  [...dotsBox.children].forEach((d, k) => d.classList.toggle("on", k === i));
}
function restart() {
  clearInterval(timer);
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches)
    timer = setInterval(() => show((cur + 1) % slides.length), 5000);
}
show(0); restart();

// ====== Tab segmen Individu / Bisnis ======
function renderProducts(seg) {
  $("#segLabel").textContent = seg;
  $("#cards").innerHTML = products[seg]
    .map((p) => `<article><h3>${p.t}</h3><p>${p.d}</p></article>`).join("");
}
document.querySelectorAll(".seg").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".seg").forEach((x) => x.classList.toggle("active", x === b));
    renderProducts(b.dataset.seg);
  })
);
renderProducts("individu");

// ====== Simulasi kredit (cicilan anuitas) ======
const amt = $("#amt"), ten = $("#ten"), rate = $("#rate");
function calc() {
  const P = +amt.value, n = +ten.value, r = +rate.value / 100 / 12;
  const m = P * r / (1 - Math.pow(1 + r, -n));
  $("#oAmt").textContent = rupiah(P);
  $("#oTen").textContent = n + " bulan";
  $("#oRate").textContent = rate.value + "%";
  $("#monthly").textContent = rupiah(m);
  $("#total").textContent = rupiah(m * n);
}
[amt, ten, rate].forEach((el) => el.addEventListener("input", calc));
calc();

// ====== Suku bunga deposito ======
const tabs = $("#tenorTabs");
Object.keys(depositRates).forEach((k, i) => {
  const b = document.createElement("button");
  b.textContent = k;
  b.onclick = () => selectTenor(k);
  tabs.appendChild(b);
  if (i === 0) selectTenor(k);
});
function selectTenor(k) {
  $("#rateVal").textContent = depositRates[k].toFixed(2) + "%";
  [...tabs.children].forEach((b) => b.classList.toggle("on", b.textContent === k));
}

// ====== Pencarian cabang ======
function renderBranches(q = "") {
  const list = branches.filter((b) => (b.name + b.city).toLowerCase().includes(q.toLowerCase()));
  $("#branches").innerHTML = list.map((b) => `<li><strong>${b.name}</strong> - ${b.city}</li>`).join("");
  $("#empty").hidden = list.length > 0;
}
$("#q").addEventListener("input", (e) => renderBranches(e.target.value));
renderBranches();
