"use strict"


// function factorial(x) {

//     if (x == 0) {
//         return 1;
//     }
//     return x * factorial(x - 1);

// }
// console.log(factorial(5));








// let stu1 = {
//     name: "Cavid",
//     surname: "Ismayilzada",
//     age: 22,
//     email: "javidai@code.edu.az"
// }

// let stu2 = {
//     name: "Shai",
//     surname: "Kazimov",
//     age: 25,
//     email: "saiqak@code.edu.az"
// }

// let stu3 = {
//     name: "Ferid",
//     surname: "Abdullayev",
//     age: 19,
//     email: "Farid19@gmail.com"
// }

// let stu4 = {
//     name: "Konul",
//     surname: "Ibrahimli",
//     age: 26,
//     email: "Konul26@mail.ru"
// }


// let students = [stu1, stu2, stu3, stu4]










// function GetAgeFiltred(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i].age > 18 && arr[i].age < 25) {
//             count++;

//         }

//     }
//     console.log("Count = "+ count);
// }

// GetAgeFiltred(students);









// function GetEmailFiltredForC(arr){

//     let count=0;
//     for (let i= 0; i < arr.length; i++) {
       
//         if (arr[i].email.match(/c/)) {
            
//             count++
            
//         }
        
//     }
//     console.log("Count = "+ count);
// }

// GetEmailFiltredForC(students);






function GetYearByAge(num) {

    let year= 2023;
    let result = year-num;
    console.log(result);

}

GetYearByAge(23);
