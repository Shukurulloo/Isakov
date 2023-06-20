// let month = 2;
// let year= 2025;
// function findDaysInMonth(month, year){

//     if(  month <1||month > 12){
//       console.log(`inavalid month`);
//       return;
//     }
//     let DaysInMonth;
//      if(month===2){
//         if(year%4 ==0 && year %100 != 0 || year%400==0){
//       DaysInMonth=`29 is leap year`;
//       }else{
//         DaysInMonth=`28 is leap year`;
//       }
      
//     }
//     else if(month===4 || month===6 || month===9 || month===11){
//      DaysInMonth =`30 is not leap year`;
//     } else{
//      DaysInMonth=`31 is not leap year`;
//     }
//   console.log( ` ${year},${month},${DaysInMonth}`);
//   }
  
//   findDaysInMonth(month, year);

 








// let year= 2020;
// let month=3;
// function findDaysInMonth(year,month){
//   if(month <1 || month >12){
// console.log(`invalid month`);
// return;
//   }

//   if(month==2){
//     if(year%4==0 && year%100==0|| year%400==0){
//       DaysInMonth=`29 is leap year`;
//     }else{
//       DaysInMonth=`28 is not leap year`;
//     }
// }else if(month==4,month==6, month==9|| month==11){
//   DaysInMonth=`30 is not leap year`
//   }
//   else{
//     DaysInMonth=`31 is not leap year`
//   }
//   console.log(`${year},${month},${DaysInMonth}`);
// }
// findDaysInMonth(year,month);


let month = 5;
let year = 2024;
function findDaysInMonth(month, year) {
    if(month < 1|| month > 12){
        console.log(`Invalid month`);
    }
    else if(month == 2){
        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
        console.log(`29 days ${year}'LEAP YEARS'`);

        else{
            console.log(`28 days ${year}'NOT A LEAP YEARS'`);
        }
    }
    else if(month == 4,  month == 6 , month == 9 , month == 11){
        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
        console.log( `30 days "LEAP YEARS"`);
        else{
            console.log(`30 days ${year}"NOT A LEAP YEARS"`);
        }
    }
    else{
        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
        console.log(`31 days ${year} "LEAP YEARS"`);
        else{
            console.log(`31 days ${year} "NOT A LEAP YEARS"`);
        }
    }};

    findDaysInMonth(month, year);


// var names =["Jasurbek","Otabek","Umar","Ziyodillo"];

// const mapping= numbers.map((num)=>num+8);
// console.log(mapping);

// const resultlist= names.values();
// for(const value of resultlist){
//     console.log(value);
// }
// const value =0;
// const mathCount= numbers.reduce((calculate, currentValue)=> calculate+ currentValue, value);
// console.log(mathCount);



//  const filterName= names.filter((name)=>name.length>6);
//  console.log(filterName);















