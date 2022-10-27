//INPUT: nhập vào 1 số có 3 chữ số
//PROCESS(pseudo code):
//Sử dụng cách lấy từng số hàng trăm, hàng chục, hàng đơn vị. Dùng kiến thức lấy phần dư (%), lấy phần nguyên Math.floor() của phép chia 
//Sử dụng if...else if...else hoặc switch case để xử lý cách đọc số.
//OUTPUT: in ra cách đọc
var num = 999;
var units = 0;
var dozen = 0;
var hundred = 0;
units = num % 10;
dozen = Math.floor(num / 10) % 10;
hundred = Math.floor(num / 100)

if (num <= 99 || num > 999) {
    console.log("nhập 1 số có 3 chữ số");
}
else {
        switch (hundred) {
            case 1: console.log("Một trăm"); break;
            case 2: console.log("Hai trăm"); break; 
            case 3: console.log("Ba trăm"); break;
            case 4: console.log("Bốn trăm"); break;
            case 5: console.log("Năm trăm"); break;
            case 6: console.log("Sáu trăm"); break;
            case 7: console.log("Bảy trăm"); break;
            case 8: console.log("Tám trăm"); break;
            case 9: console.log("Chín trăm"); break;
    }
    if (units === 0 && dozen === 0) {
       
    }
    else if (dozen === 0) {
        console.log("lẻ");
    }

    switch (dozen) {
        case 1: console.log("Mười"); break;
        case 2: console.log("Hai mươi"); break;
        case 3: console.log("Ba mươi"); break;
        case 4: console.log("Bốn mươi"); break;
        case 5: console.log("Năm mươi"); break;
        case 6: console.log("Sáu mươi"); break;
        case 7: console.log("Bảy mươi"); break;
        case 8: console.log("Tám mươi "); break;
        case 9: console.log("Chín mươi"); break;
    }

    switch (units) {
        case 1: console.log("Một"); break;
        case 2: console.log("Hai"); break;
        case 3: console.log("Ba"); break;
        case 4: console.log("Bốn"); break;
        case 5: console.log("Lăm"); break;
        case 6: console.log("Sáu"); break;
        case 7: console.log("Bảy"); break;
        case 8: console.log("Tám"); break;
        case 9: console.log("Chín"); break;
    }
}