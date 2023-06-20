// var a = 10;
// var b =3;
// var c = a/b;
// console.log(c.toFixed(6));
// console.log(Number.parseFloat(c));
// console.log(Number.parseInt(c));
// console.log(c.toFixed(3));



// const result = Math.round(3.5);   Math(meees)round bu cod sonni yaxlitlab beradi yahlitlash bu 3.5dan yuqori Bo'lsa 4deb yahlitlaydi 3.5dan past bo'lsa 3 deb yahlitlaydi.
// var a = 10;
// var b =3;
// const result= Math.pow(a,b);   Math.pow  bu sonning darajasini chiqarib beradi.

// const result = Math.sqrt(81); (esquart) bu cod sonning ildiz ostini chiqarib beradi yani 81ni ikkilik ildizi 9 ga teng       'rt'ildiz osti deganidir.

// const result = Math.cbrt(1000); Math.cbrt (kub arti) bu esa kub ildiz ostini chiqarib beradi yani 1000 soning cub ildizi 10ga teng

// var a = 10;
// var b =3;
// var c = a-b; 
// const result = Math.abs(c); bu cod sonning modulini chiqarib beradi , yani b=3 ni ayiramiz a=10 ga (3-10) javobi aslida minus- chiqishi kerak lekin moduldan foydalanib butun javobni chiqaramiz

// const result = Math.ceil(3.1); (siiyl) bu cod sonning yuqoriga yahlitladi , yani 3dan yuqori nechchi bo'lsa ham 4 qilib yahlitlaydi , yani Math.ceil(3.5) (3.7) (3.9)
// const result = Math.floor(3.9); (flor) bu cod sonning pastga qarab yahlitlaydi, yani yuqoridagi codning aksi misoluchun Math.floor(3.9) ni 3 qilib yahlitlaydi. 

// const result = Math.min(1, 23, 13, 10, 8); bu codlar sonlarning minimum va maximumini olib beradi yani minimum 1  ,   maximum 23.
// const result2 = Math.max(1, 23, 13, 10, 8);
// uyga vazifadan
//  const result = Math.floor(Math.random() *100)+1
//  const result = parseInt(Math.random() *100)+1
// console.log(result);



//Binary numbers - bayneri raqamlar   010110101010

// const numberResult = Number(296).toString(2);

// console.log(parseInt(100101000, 2));       

// const string = `hskhdkh
// shdjsh`
// console.log(string);



// const string ="Be coder Academy Coder coder students";
// console.log(string.length); (lengs) BU TEXTNI UZUNLIGINI YANI NECHTA JOYNI EGALLAGANINI ANIQLAYDI.

// console.log(string.indexOf('coder')); - BU NECHINCHI JOYDALINI ANIQLAYDI.

// console.log(string.search("coder")) (sorch) BU HAM NECHINCHI JOYDA EKANINI QIDIRIB BERADI

// console.log(string.includes("Academy")); incluu(d)s BU SHUNDAY MALUMOT BOR YOKI YO'QLIGINI ANIQLAYDI  true/false   tru yoki fols
// console.log(string.startWith("Be")); bu cod yuqoridagi coddan farqli ravishda faqat  shundan boshlandimi yo'qmi chiqarib beradi. bu ham tru/fols bilan ishledi
// console.log("startWith:",string.startWith("Be")); shu holatda yozilsa terminalda  'startWith: true' chiqadi.

// console.log(string.slice(3, 10)); (slays) BU 3DAN 10GACHA BO'LGAN MALUMOTNI QIRQIB OLADI. SHUNI  - QILSAK console.log(string.slice(3, -10)); ORQADAN HISOBLAK QIRQIB OLADI.

// console.log(string.substring(3, 10)) slice codi  bilan bir xil faqat -minus bilan olmaydi

//  console.log(string.substr(3, 10)); bu cod uchinchi joydan boshlab 10ta  joydagi malumotni qirqib oladi .   

// console.log(string.replace("coder","IT")); (repleys) bu cod yuqoridagi stringni ichidagi matnni taxrir qilib beradi...  
//                    va    shunay qilsak console.log(string.replace(/coder/i,"IT"))  so'zni ichidagi harfni katta kichikligidan qatiy nazar o'zgartirib beradi.beradi
//                    va   console.log(string.replace(/coder/g,"IT")) qilsak matnni ichida nechta bir xil so'z bo'lsa hammasini o'zgartirib beradi misol coder coder coder kabi...
//                    va  console.log(string.replace(/coder/gi,"IT")); yani "i" va "g" larni qo'shib yozsa ichidagi harflarni katta kichikligiga u so'z ko'pligiga qaramasdan  o'zgartiradi.


// const string3 = "*********";
// const result = string3.padStart(string3.length +4, "+998");  bu cod stringni ichidagi textni boshiga biror malumotni qo'shib beradi.
// console.log(result);  terminal: +998**********
//  const string4 = "+998";
//  const result1 = string4.padEnd(string4.length +9, "****") bu cod esa stringni ichidagi textni oxiriga biror malumotni qo'shib beradi.
//  console.log(result1); terminal: +998**********     bu cod textni ichidagi so'zlarni hammasini katta harfga aylantirib beradi.

// const string3 ="Be coder Academy Coder coder students";
// console.log(string3.toLocaleUpperCase());   bu cod textni ichidagi so'zlarni hammasini katta harfga aylantirib beradi.
// console.log(string3.toLowerCase());  bu cod esa textni ichidagi so'zlarni hammasini kichik harfga aylantirib beradi.

// const mathString = "2 + 2";
// console.log(eval(mathString)); (ivl) bu cod string holatidagi matematik amalni number holatida hisoblab beradi misol "2+2" terminalda 4.
// console.log(new String(mathString)); bu cod (ivl) codi bilan birga keladi shu co yozlsa [string: '2+2'] chiqadi yani nima hisoblanganini bilb  beradi.
// console.log(MathString.trim()); bu cod stringni ichidagi textni oxiridagi oshiqcha bo'sh joylarni qirqib beradi.

// uyga vazifa
//  const string ="Be coder Academy Coder coder students"; shu codni  ["Be", "Coder", "IT", "Academy"] shu holatga chiqarib  oxiridagi sozni boshiga chiqarish.
//const web11 = "Be Coder IT Academy";
//const words11 = web11.split(" "); bu cod srtingni ichidagi so'zlarni alohida qilib beradi  ["Be", "Coder", "IT", "Academy"].
// const string = ["Be", "Coder", "IT", "Academy", "Students"];
// console.log(string.sort()); bu cod stringni ichiadi so'zlarni boshlanish harfiga qarab alfabit bilan tarttiblab beradi.
// console.log(string.reverse()); bu cod esa stringni ichidagi so'zlarni oyog'ini osmondan qilib beradi.

// const NameFuction =( a,b) =>{                 bu funksiya deyiladi
//     return console.log(a/b);
// }
// NameFuction(6,3); bu kalit





// var weather =25;

//   while (weather >30){
//     console.log(`bugun havo issiq`);
//   }

// do{
//     console.log(`bugun havo issiq`);
//     weather++;
//     break;
// } while(weather>30);


// arr = ['Shukurullo', 'Nodirbek', 'Jasurbek']
// const addName = arr.push('Begzodbek')
// console.log(arr.length);
//const addName = arr.unshift('Bekzodbek') boshiga qo'shadi
//const deleteName =arr.pop(); oxiridan qirqib oladi
//const deleteName2  =arr.shift(); boshidan qirqib oladi


