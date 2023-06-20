// array = ["array","array2"]
// const addName = array.join(0)
// console.log(array);

// var names =["Jasurbek","Otabek","Umar","Ziyodillo"];
// const result = names.filter((name) => name.length <6);
// console.log(result);
// console.log(names.indexOf("Umar", 2));
// console.log(names.lastIndexOf("Ziyodillo"));
// const numbers =[ 1, 3, 9, 20, 53, 40];
// const numberList= (currentValue)=> currentValue<10;
// console.log(number.every(numberList));
// const resultReverse =numbers.reverse();
// names.forEach((name) => console.log(name));
// h-m
// const resultSort = numbers.sort(function(a, b){return a-b});
// console.log(resultSort);
;

//h-m
// const numbers =[ 20, 53, 1, 3, 9,  40];
// const result = numbers.filter(function(num){return num > 30;});
// console.log(result);

// const numbers =[ 1, 3, 9, 20, [[53, 40]]];
// console.log(numbers.flat(2))     
// var names =["Jasurbek","Otabek","Umar","Ziyodillo"];
// const resultlist = names.values();
// for(const value of resultlist){
//     console.log(value);
// }
const numbers =[ 1,20, 3, 53, 9, 40];
// const mapping = numbers.map((num)=> num*5)
// console.log(mapping);
// const value =0;
// const mathCount= numbers.reduce((calculate, currentValue) => calculate + currentValue, value);
// console.log(mathCount);


var names =["Jasurbek","Otabek","Umar","Ziyodillo"];

const mapping= numbers.map((num)=>num+8);
console.log(mapping);

const resultlist= names.values();
for(const value of resultlist){
    console.log(value);
}
const value =0;
const mathCount= numbers.reduce((calculate, currentValue)=> calculate+ currentValue, value);
console.log(mathCount);
 console.log(numbers.flat());


 const filterName= names.filter((name)=>name.length>6);
 console.log(filterName);

