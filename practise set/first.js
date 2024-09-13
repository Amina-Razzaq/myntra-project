console.log("My Chemistry")
fullName="tony";
fullName=24;
fullName="Amina";
console.log(fullName)
// let a=5;
// let b=4;
// console.log("a=", a , "& b =", b)
// console.log("a + b =" ,a+b)
// console.log("a - b =" ,a-b)
// urinary operator
// let a=5;
// let b=4;
// console.log("a=", a , "& b =", b)
// // console.log("++a =", ++a)
// console.log("a++ =", a++)
// console.log("a=",a)

// comparison operator
// let a=5;
// let b=5;
// console.log("5=5", a==b)
//let a= 6;
//let b=5;
//let cond1= a>b; //true
//let cond2= a===6;//true
//console.log("cond1 && cond2 " , cond1 && cond2)
//console.log("cond1 && cond2 ", a>b && a===6 )

// conditional statement

let num=10;

if (num%2===0){
    console.log("even")
}
else{
    console.log("odd")
}
let age=24;
 let result = age>=18? "adult": "not adult"
console.log(result);

//for of loop

// let str="apnacollege";

// for(let i of str){
//     console.log("i=" ,i)
// }

//for in loop

// let student ={
//     name:"amina",
//     age:24,
//     cgpa:3.6,
//     isPass:true,
// }
// for(let key in student){
//     console.log("key=", key ,"value=", student[key])
// }
//even num


// for(let num=0;num<=100; num++ ){
//     if(num%2===0){
//         console.log("num=",num)
//     }

// }
//odd num
// for(let num=0;num<=100; num++ ){
//     if(num%2!==0){
//         console.log("num=",num)
//     }

// }

//game practise question

// let gameNum=25;
// let userNum=prompt("Guess the game number:");
// while(userNum!=gameNum){
//     userNum=prompt("You entered wrong, Guess again:");
// }
// string length
// let str="Apna college";
//console.log(str[1]);

//template literals

let obj={
    item:"pen",
    price:100,

}
let output=`The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output)
//console.log("The cost of ", obj.item, "is", obj.price, "rupees");

// let str="apna college";
// let newStr= str.toUpperCase()
// console.log(str)
// ;
// console.log(newStr)
let str="apna college";
str= str.toUpperCase();


console.log(str);


let array=["amina", "billi","mama"];

for(let idx=0; idx<array.length; array++){
    console.log(array[idx]);
}

//array practise question


// let marks=[85,97,44,37,76,60]
// let sum=0;
// for(let val of marks){
//     sum += val;
//     console.log(sum)
//     let avg=sum/marks.length;
//     console.log(`avg of the class = ${avg}` ) ;
// }

//array second practise

let items=[250,645,300,900,50]

// let i=0;
// for(let val of items){
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`price after offer=${items[i]}`)
//     i++;
// }

for(let i=0;i<items.length; i++){
    let offer=items[i]/10;
    items[i]-=offer
}
console.log(items)


//function

// function myFunction(msg) {
// console.log(msg)
// }
// myFunction("my world")

//sum of 2 numbers

// function sum(a,b){
//     console.log(a+b)
// }

// function sum(a,b){
// s=a+b
// return s
// }
// let val=sum(3,4)
// console.log(val);

//sum function
// function sum(a,b){
//     return a+b
// }
//multiplication function
// function mul(a,b){
//     return a*b
// }


// const arrowSum=(a,b) =>{
//     console.log(a+b)

// }


//practise for vowels count

// function countVowel(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"||
//            char==="i"||
//            char==="o"||
//            char==="u"||
//            char==="e" )
//            {count++}
// }
//   return count  
// }
//arrow function
// const countVow=(str) =>{
//     let count=0;
//     for(const char of str){
//         if(char==="a"||
//            char==="i"||
//            char==="o"||
//            char==="u"||
//            char==="e" )
//            {count++}
// }
//   return count 

// }

//forEach loop in arrays

// let arr=[1,2,8,10,11]
// arr.forEach(function printVal(val){
//     console.log(val)
// })

// let arr=[1,2,8,10,11]
// arr.forEach((val ,idx, arr) =>{
//     console.log(val ,idx, arr)
// })

// let nums=[1,7,9,11]
// nums.forEach((num)=>{
//     console.log(num*num)
// })

//map array method
// let nums=[1,6,9,12]
// let newArr=nums.map((num)=>{
//    return num
// })
// console.log(newArr)

// filter array method
// let nums=[1,6,9,12]
// let newArr=nums.filter((val)=>{
//    return val % 2===0
// })
// console.log(newArr)

//practise

// let n=prompt("enter a number")
// let arr= [];
// for( let i=1; i<= n; i++)
// {
//     arr[i-1]=i
// }
// console.log(arr)

// let sum=arr.reduce((res,curr)=>{
//     return res+curr
// })
// console.log("sum=",sum)

// let factorial=arr.reduce((res,curr)=>{
//     return res*curr
// })
// console.log("factorial=",factorial)


// let firstEl=document.querySelector("p")
// console.dir(firstEl)

// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));
// let div=document.querySelector("div")
// div.onmouseover=() =>{
//     console.log("you are inside the div")
// }

//event
let btn1=document.querySelector(".btn1")
// btn1.onclick=(evt)=>{
// console.log(evt);
// console.log(evt.type)
// console.log(evt.target)
// console.log(evt.clientX,evt.ClientY)
// }
//best event method (eventListener)

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked")
// })

// /// for remove
// // btn1.addEventListener("click",()=>{
// //     console.log("button was clicked ,handler2")
// // })
// const handler2=()=>{
//     console.log("button was clicked ,2")
// }
// btn1.addEventListener("click",handler2)
// btn1.removeEventListener("click",handler2)


// mood change button(toggler button)

// let modeBtn=document.querySelector("#mode")
// let currMode="light";
// let body=document.querySelector("body")
// modeBtn.addEventListener("click",()=>{
//     if(currMode==="light"){
//         currMode="dark"
//         body.classList.add("dark")
//         body.classList.remove("light")
//     }
//     else{
//         currMode="light"
//         body.classList.add("light")