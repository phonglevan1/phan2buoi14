//INPUT: nhập vào tháng và năm
//PROCESS(pseudo code):
    //Đối với các tháng 1,3,5,7,8,10,12 sẽ có 31 ngày
    //Đối với các tháng 4,6,9,11 sẽ có 30 ngày
    //Đối với tháng 2, nếu là năm nhuận sẽ có 29 ngày. Ngược lại là 28 ngày.
//OUTPUT: xuất kết quả: tháng đó có bào nhiêu ngày
var month = 2;
var year = 2011;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("tháng " + month + " có: 31 ngày")
        break;
}
switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
    case 8:
        console.log("tháng " + month + " có: 30 ngày")
        break;
}
switch (month) {
    case 2: ;
        if (month === 2) {
            if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                console.log("tháng " + month + " có: 29 ngày");
            }
            else console.log("tháng " + month + " có: 28 ngày");
        }
}