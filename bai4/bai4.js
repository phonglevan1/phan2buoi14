//INPUT: Nhập vào tọa độ của 3 sinh viên
//PROCESS(pseudo code): 
    // tìm sinh viên có quãng đường xa nhất bằng cách:
        //S_1= Math.sqrt((School_X*School_X-2*School_X*student_1X + student_1X*student_1X)+(School_y*School_y-2*School_y*student_1Y + student_1Y*student_1Y));
        //S_2= Math.sqrt((School_X*School_X-2*School_X*student_2X + student_2X*student_2X)+(School_y*School_y-2*School_y*student_2Y + student_2Y*student_2Y));
        //S_3= Math.sqrt((School_X*School_X-2*School_X*student_3X + student_3X*student_3X)+(School_y*School_y-2*School_y*student_3Y + student_3Y*student_3Y));
//OUTPUT: xuất sinh viên có quãng đường xa nhất
var student_1 = "phong";
var student_1X =1;
var student_1Y =2;
var student_2 = "phu";
var student_2X =3;
var student_2Y =4;
var student_3 = "thanh";
var student_3X =5;
var student_3Y =6;
var School_X =1;
var School_y =1;

var S_1= Math.sqrt((School_X*School_X-2*School_X*student_1X + student_1X*student_1X)+(School_y*School_y-2*School_y*student_1Y + student_1Y*student_1Y));
var S_2= Math.sqrt((School_X*School_X-2*School_X*student_2X + student_2X*student_2X)+(School_y*School_y-2*School_y*student_2Y + student_2Y*student_2Y));
var S_3= Math.sqrt((School_X*School_X-2*School_X*student_3X + student_3X*student_3X)+(School_y*School_y-2*School_y*student_3Y + student_3Y*student_3Y));
if(S_1>S_2&&S_1>S_3){
    console.log("Sinh viên xa trường nhất: "+ student_1);
}
if(S_2>S_1&&S_2>S_3){
    console.log("Sinh viên xa trường nhất: "+ student_2);
}
if(S_3>S_2&&S_3>S_1){
    console.log("Sinh viên xa trường nhất: "+ student_3);
}