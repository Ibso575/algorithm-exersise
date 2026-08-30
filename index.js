// let numbers = [1,2,4,5,7,8,9,178,16,12,355,79,46,22];

// let juft = numbers.filter(num => num%2 == 0)
// console.log(juft);


// let doubled = numbers.map(num => num*2)
// console.log(doubled);


// let colors = [];
// let push = colors.push("red","green")
// console.log(colors);

// let pop = numbers.pop();
// console.log(numbers);


// let fruits = ["apple","banana"];
// let adddd = fruits.unshift("orange") 
// console.log(fruits);

// let ism = ["ali","vali","nabi"];
// let take = ism.shift();
// console.log(ism);


// let qosh = numbers.map(num => num*3);
// console.log(numbers);

// let yosh = numbers.filter(num => num>18);
// console.log(yosh);


// let names = ["Anvar", "Sardor", "Bekzod", "Sanjar"]
// let fnd = names.find(num => num.startsWith("B"))
// console.log(fnd);

// let names = ["Anvar", "Sardor", "Bekzod", "Sanjar"]
// let ncld = names.includes("Anvar")
// console.log(ncld);


// String metodlari

// trim() = matnni oxiridagi va boshidagi boshliqlarni olib tashlaydi {trimStart va trimEnd ham bor}
// chartAt(index) = berilgan indexdagi belgini qaytaradi 
// at(index) = berilgan indexsdagi belgini qaytaradi (manfiy indexsni ham oladi)
// slice(start,end) = start va end orasidagi qismni kesib oladi
// substring = slice bilan birxil lekin manfiy qiymat olmaydi
// replace(old,new) = matndagi birinci moss kelgan qismni yangisiga almashtiradi
// split(separator) = matnni bellgilangan ajratuvchi boyicha bolib,massiv hosil qiladi
// repeat() = matnni korsatilgan marotaba takrorlab,yangi matn qaytaradi


// Array metodlari
// push() = massiv oxiriga yangi ellemnt qoshadi
// pop() = massiv oxiridagi elementni ochiradi va uni qaytaradi
// shift() = massiv boshidagi elemntni ochiradi
// unshift massiv boshiga element qoshadi
// splice(start,deletecount,items..) = massivnign istalgan joyidan elemnt ochiradi,almashtiradi yoki qoshadi
// sort() = massiv elemntlarini alifbo yoki osn qiymati boyicha saralaydi
// reverse() = massiv elementlarini tartibini teskari qiladi
// concat () = ikki yoki undan ortiq massivni birlasjtiradi va yangimassiv qaytaradi



// let ism = "anvar,bobur,ibrohimjon";

// let splt = ism.split(",")
// let mp = splt.map(num => num.charAt(0).toUpperCase() + num.slice(1).toLowerCase());
// let jon = mp.join(" ")
// console.log(jon);

// let text = "meni ismim hon cssv";
// let splt = text.split(" ")
// console.log(splt.length);

// let text = "men ismim javascript";
// let rplc = text.replace("javascript","phyton")
// let teskari = rplc.split(" ").reverse().join(" ")
// console.log(teskari);


// let num = [1,,4,9,8,4,1,3,6,7];
// let juft = num.filter(num => num % 2 ==0)
// let kv = juft.map(n => n**2)
// console.log(kv);

// let price = [145,364,799,154]
// let allprice = price.reduce((a,b) => a+b,0)
// console.log(allprice);

// let text = " string "
// let trm = text.trim().toUpperCase()
// console.log(trm.length);

// let text = "salom nma gAplar"
// let a = text.replaceAll("a" && "A","o")
// let b= text.includes("script")
// console.log(a);


// let text = "radar"
// let a = text.toLowerCase().split("").reverse().join("")
// function b() {
// if(text.toLowerCase() === a){
//     return true;
// }else{
//     return false;
// }

// } ;
// console.log(b());


// let n = [1,4,7,7,8,9,4,3,1,2,56]
// let num = n.filter(i => i%2==0).map(d => d*2)
// console.log(num);

// let a = [{name: "Ali", age: 16}, 
//          {name: "Vali", age: 22}, 
//          {name: "Sardor", age: 19}]

// let b = a.filter(n => n.age>18).map(user => user.name).join(",")
// console.log(b);

// let text = [{ title: "Phone", price: 500 }, { title: "Laptop", price: 1200 }, { title: "Watch", price: 150 }]
// let total = text.reduce((a,b) => a+b.price,0)
// let mostexpencive = text.reduce((max,item) => item.price > max.price ? item : max)

// console.log("umumiy "+total,"eng qimmat "+mostexpencive.title);


// let text = "salom alik"
// let a = text.split(" ").reverse().join(" ")
// console.log(a);


// function findMAx(nums){
//     let max = nums[0];

//     for (let i = 1;i<nums.length;i++){
//         if(nums[i] > max){
//             max = nums[i]
//         }
//     }
//     return max
// }

// let n = [1,5,7,8,9,6,5,2,4,6,5]
// let a = findMAx(n)
// console.log(a);


// function reverseString(s){
//     let a = s.split("").reverse().join("");
//     return a;
// }
// let b = "salom eshak"
// let c = reverseString(b)
// console.log(c);


// function count(a){
//     let juft = 0

//     for(let i = 0;i<a.length;i++){
//         if(a % 2 == 0){
//             juft ++
//         }
//     }
//     return juft
// }

// let nums = [1,
//     ,5,4,9,6,,2
// ]
// let d = count(nums)
// console.log(d);

// function sumarray(total) {
//     let a = total.reduce((a,b) => a+b,0);
//     return a;
// }

// let c = [1,4,7,9,9,5,2]
// console.log(sumarray(c));

// function isPalindrom(word){
//     let a = word.split("").reverse().join("");
//     return word == a ?true : false
// }

// let c = "radal"
// console.log(isPalindrom(c));

// function search(n,son){
//     for(i=0;i<n.length;i++){
//         if(n[i] == son){
//             return i;
//         }
//     }
//     return  -1;
// }

// let nums = [1,4,5,4,7,8,6,]
// console.log(search(nums,9));
















