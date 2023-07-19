// Bài 1

/**
 * Đầu vào: số ngày làm
 * 
 * Các bước xử lý:
 * - Khai báo biến và gán giá trị cho biến ngay
 * - Khai báo biến luong
 * - Tính lương theo công thức: luong = 100000 * ngay
 * In giá trị của biến luong ra trang web
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
 * Các bước xử lý:
 * - Khai báo biến và gán giá trị số cho biến so1, so2,...
 * - Khai báo biến trungbinh
 * - Tính trung bình theo công thức: trungbinh = (so1 + so2 + so3 + so4 +so5) / 5
 * - In giá trị của biến trungbinh ra trang web
 * 
 * Đầu ra: trung bình của 5 số thực
 */

function tinh_trungbinh() {
    var so1 = document.getElementById("so_1").value * 1
    var so2 = document.getElementById("so_2").value * 1
    var so3 = document.getElementById("so_3").value * 1
    var so4 = document.getElementById("so_4").value * 1
    var so5 = document.getElementById("so_5").value * 1
    var trungbinh = document.getElementById("trung binh")
    trungbinh.innerText = (so1 + so2 + so3 + so4 + so5) / 5
}

// Bài 3

/**
 * Đầu vào: số tiền USD
 * 
 * Các bước xử lý:
 * - Khai báo và gán giá trị cho biến tienUSD
 * - Khai báo biến tienVND
 * - Tính số tiền VND theo công thức: tienVND = tienUSD * 23500
 * - In giá trị của biến tienVND ra trang web
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
 * Các bước xử lý:
 * - Khai báo và gán giá trị số cho biến chieudai
 * - Khai báo và gán giá trị số cho biến chieurong
 * - Khai báo biến dientich
 * - Khai báo biến chuvi
 * - Tính diện tích theo công thức: dientich = chieudai * chieurong
 * - Tính chu vi theo công thức: chuvi = chieudai * chieurrong
 * - In giá trị của biến dientich và biến chuvi ra trang web
 * 
 * Đầu ra: chu vi, diện tích
 */

function tinh_chuvidientich() {
    var chieudai = document.getElementById("chieudai").value * 1
    var chieurong = document.getElementById("chieurong").value * 1
    var dientich = document.getElementById("dien_tich")
    var chuvi = document.getElementById("chu_vi")
    dientich.innerText = chieudai * chieurong
    chuvi.innerText = chieudai + chieurong
}

// Bài 5

/**
 * Đầu vào: số có 2 chữ số
 * 
 * Các bước xử lý:
 * - Khai báo và gán giá trị cho biến so
 * - Lấy số hàng đơn vị bằng công thức: so_hang_dv = so % 10
 * - Lấy số hàng chục bằng công thức: so_hang_chuc = Math.floor (so / 10)
 * - Khai báo biến tong_2_ky_so
 * - Tính tổng 2 ký số bằng công thức: tong_2_ky_so = so_hang_dv + so_hang_chuc
 * - In ra giá trị của biến tong_2_ky_so
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