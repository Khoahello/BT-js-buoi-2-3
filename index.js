// Bài 1

/**
 * Đầu vào: số ngày làm
 * 
 * Các bước xử lý
 * 
 * Đầu ra: lương
 */

function tinh_luong() {
    var ngay = document.getElementById("so_ngay_lam").value
    var luong = document.getElementById("luong")
    luong.innerText = new Intl.NumberFormat('vn-VN').format (100000 * ngay)
}

// Bài 2

/**
 * Đầu vào: 5 số thực
 * 
 * Các bước xử lý
 * 
 * Đầu ra: trung bình của 5 số thực
 */

function tinh_trungbinh() {
    var so1 = Number(document.getElementById("so1").value)
    var so2 = Number(document.getElementById("so2").value)
    var so3 = Number(document.getElementById("so3").value)
    var so4 = Number(document.getElementById("so4").value)
    var so5 = Number(document.getElementById("so5").value)
    var trungbinh = document.getElementById("trung binh")
    trungbinh.innerText = (so1 + so2 + so3 + so4 + so5) / 5
}

// Bài 3

/**
 * Đầu vào: số tiền USD
 * 
 * Các bước xử lý
 * 
 * Đầu ra: số tiền VND
 */

function doitien() {
    var tienUSD = document.getElementById("tienUSD").value
    var tienVND = document.getElementById("doi tien")
    tienVND.innerText = new Intl.NumberFormat('vn-VN').format (tienUSD * 23500)
}

// Bài 4

/**
 * Đầu vào: chiều dài, chiều rộng
 * 
 * Các bước xử lý
 * 
 * Đầu ra: chu vi, diện tích
 */

function tinh_chuvidientich() {
    var chieudai = Number(document.getElementById("chieudai").value)
    var chieurong = Number(document.getElementById("chieurong").value)
    var dientich = document.getElementById("dientich")
    dientich.innerText = chieudai * chieurong
    var chuvi = document.getElementById("chuvi")
    chuvi.innerText = (chieudai + chieurong)
}

// Bài 5

/**
 * Đầu vào: số có 2 chữ số
 * 
 * Các bước xử lý
 * 
 * Đầu ra: tổng 2 ký số
 */

function tinh_tong2kyso() {
    var so = document.getElementById("so2chuso").value
    var so_hang_dv = so % 10
    var so_hang_chuc = Math.floor (so / 10)
    var tong_2_ky_so = document.getElementById("tong2kyso")
    tong_2_ky_so.innerText = so_hang_dv + so_hang_chuc
}