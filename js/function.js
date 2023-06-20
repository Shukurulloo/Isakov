

// function evalNumbers(num1, num2,operations){
//     if (operations == "add"){
//         console.log(num1+num2);
//     }
// else if ( operations == "subtract"){
//     console.log(num1-num2);
// }
// else if (operations == "multiply"){
//     console.log(num1*num2);
// }
// else if (operations == "divide"){
//     console.log(num1/num2);
// }
// else if (operations == "modulus"){
//     console.log(num1%num2);
// }

// else {
//     console.log( "invalid operation");
// }
//     }
    

// evalNumbers(24,9,"add");
// evalNumbers(55,24,"subtract");
// evalNumbers(23,13, "multiply");
// evalNumbers(49,7, "divide");
// evalNumbers(30,100, "modulus");

// var string ="Be Coder"
// var string1="web"
// function Name2(){
// console.log(string);
// console.log(string1);
// }
// for(let i=0; i<=5; i++){
//     Name2();
// }

 

// var Weather ="shamol";

// switch(Weather){
//     case "issiq":
//     console.log("yengilroq kiyinib oling");
//     break;
//     case "iliq":
//         console.log("yubqaroq kiyinib oling");
//         break;
//         case "sovuq":
//             console.log("qalinroq kiyinib oling")
//             break;
//             default:
//                 console.log("Bunday malumot kitilmagan")
// }


// var weather = `yomg'ir`;
//  switch(weather){
//     case "sovuq":
//         console.log("qalinroq kiyinib oling")
//         break;
//     case `yomg'ir`:
//         console.log("soyabonni olib chiqing")
//         break;
//         case "quyosh":
//             console.log("ko'z oynak taqib oling")
//             break;
//     case `bo'ron`:
//         console.log(`ko'chaga chiqmaslik tafsiya etiladi`)
//         break;
//  default:
//     console.log("bunday malumot yoq")
//     break
//  }


// var string ="shams"

// function Name(){
//     console.log(string)
// }
// for(let i=0; i<=4; i++){
//     Name()
// } 


//  var obhavo= "iliq";

//  switch (obhavo){
//     case "sovuq":
//         console.log("qalin kiyinib olibg")
//         break;
//     case " issiq":
//         console.log("yubqa kiyinib oling")
//     break;
//     default:
//         console.log("bunday malumot yoq")

//  }


//  var web ="shukurullo";
//   function Name()   {
// console.log(web)
//   }
//   for (let i=0; i<=13; i++){
//     Name()
//   }



















function findDaysInMonth(month){
  if(  month <=1 && month >= 12){
    console.log(`inavalid month`);
  }else if(2==28){
    console.log(`28 days`);
  }
  else if(4 ==30 && 6==30 && 9==30 && 11==30){
    console.log(`30 days`);
  } else{
    console.log('31 days')
  }

}

findDaysInMonth(2);