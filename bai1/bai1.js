// INPUT: nhập vào ngày tháng năm, và chọn ngày mai hoặc hôm qua(0 là hôm qua,  1 là ngày mai)
//PROCESS(pseudo code):
    //kiểm tra năm nhuận:Những năm chia hết cho 4 và không chia hết cho 100,hoặc những năm chia hết cho 400 .
    //Khi người dùng chọn Ngày Mai thì chỉ cần tăng giá trị ngày lên 1. Ngược lại, chọn Ngày Hôm Qua thì trừ đi 1.
        //Nếu ngày nhập vào là ngày 1 của các tháng 5,7,10,12 thì Ngày Hôm Qua là ngày 30 của tháng trước
        //Nếu ngày nhập vào là ngày 1 của các tháng 1,2,4,6,8,9,11 thì Ngày Hôm Qua là ngày 31 của tháng trước
        //Nếu ngày nhập vào là ngày 1 của tháng 3 và là năm nhuận thì Ngày Hôm Qua là 29/2
        //Ngược lại, không phải năm nhuận thì Ngày Hôm Qua là 28/2
    //Kiểm tra các trường hợp ngày cuối tháng
        //Nếu ngày nhập vào là ngày 31 của các tháng 1,3,5,7,8,10,12 thì Ngày Mai là ngày 1 của tháng kế tiếp
        //Nếu ngày nhập vào là ngày 30 của các tháng 4,6,9,11 thì Ngày Mai là ngày 1 của tháng kế tiếp.
        //Nếu là tháng 2 và năm nhuận thì ngày mai của ngày 29/2 mới là 1/3
        //Nếu là tháng 2 và năm không nhuận thì ngày mai của ngày 28/2 mới là 1/3
    //Kiểm tra các trường hợp ngày đầu và cuối năm:
        //Nếu ngày đầu năm thì ngày hôm qua là ngày 31/12 của năm cũ.VD: 1/1/2023 => 31/12/2022
        //Nếu ngày cuối năm thì ngày mai sẽ là 1/1 của năm mới. VD: 31/12/2022 => 1/1/2023
// OUTPUT: xuất kết quả: hôm nay hoặc ngày mai.
var date = 20;
var month = 12;
var year = 2012;
var checkDate = 1;
//  checkDate chỉ được chọn 0 hoặc 1
// 0 là ngày hôm qua.
// 1 là ngày mai

if (year < 1920 || date <= 0 ||date>31|| month <= 0||month>12) {
    console.log("Ngày tháng năm không hợp lệ");
}
else {
    if (checkDate === 1) {
        if (date === 31 && month === 12) {
            console.log("ngày mai là: 1/1" + "/" + (year + 1));
        }

        else if (date === 31) {
            if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                console.log("ngày mai là: 1/" + (month + 1) + "/" + year);
            }

        }
        else if (date === 30) {
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                console.log("ngày mai là: 1/" + (month + 1) + "/" + year);
            }

        }
        else if (date === 29 && month === 2) {
            if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                console.log("ngày mai là: 1/" + (month + 1) + "/" + year);
            }
        }
        else if (date === 28 && month === 2) {
            console.log("ngày mai là: 1/" + (month + 1) + "/" + year);
        }
        else {
            date++;
            console.log("ngày mai là: " + date + "/" + month + "/" + year);
        }
    }
    else if(checkDate===0){
        if (date === 1 && month === 1) {
            console.log("ngày hôm qua ngày: 31/12/" + (year - 1));
        }
        else if (date === 1) {
            if (month === 5 || month === 7 || month === 10 || month === 12) {
                console.log("ngày hôm qua ngày: 30 /" + (--month) + "/" + year);
            }
            else if (month === 1 || month === 2 || month === 4 || month === 6 || month === 8 || month === 9 || month === 11) {
                console.log("ngày hôm qua là: 31 /" + (--month) + "/" + year);
            }
            else if (month === 3) {
                if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                    console.log("ngày hôm qua là: 29/" + (month - 1) + "/" + year);
                }
                else {
                    console.log("ngày hôm qua là: 28/" + (month - 1) + "/" + year);
                }
            }

        }
        else{
            console.log("ngày hôm qua là: " + (--date)+"/" + month + "/" + year);
        }
    }
    else{
        console.log("chọn lại ngày mai hoặc hôm qua")
    }

}
