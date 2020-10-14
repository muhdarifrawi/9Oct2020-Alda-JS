// alert();

// JS equivalent of print()
// console.log("look here");

let x = 42;

let y = "hello world";

let z = true;

// const -> constant.
// variables that would NEVER change

// var -> delcared at a global level

// python -> list
// javascript -> array

let exampleArray = [2,4,6,8];

// python uses -> snake_case
// javascript uses -> camelCase

for(i=0;i<5;i++){
    // console.log(i);
}

// i++ -> i=i+1
// i-- -> i=i-1
// i+=2 -> i=i+2

let lengthOfArray = exampleArray.length;
// console.log("length of example array:", lengthOfArray);

for(i=0;i<lengthOfArray;i++){
    // console.log(exampleArray[i]);
}

// this would iterate values
for(i of exampleArray){
    // console.log(i);
}

// this would iterate index no.
for(i in exampleArray){
    // console.log(i);
}


let counter=0;

while(counter<5){
    // console.log(counter);
    counter++;
}

let counter2 = 0;
let a = ""; 

// do{
//     let input = prompt("yes or no");
//     a = input;
//     // console.log(typeof input);
//     // counter2++;
// }while(a=="yes");


// let flag = true;
// let b = "";
// while(flag==true){
//     let input2=prompt();
//     b = input2;
//     if (b=="no"){
//         flag = false;
//     }
// }


// let counter3 = 0;
// do{
//     console.log(exampleArray[counter3]);
//     counter3++;
// }while(counter3<exampleArray.length);

// def function_name():

// function functionName(){
    
// }

function functionName(){
    let show = "example";
    return show
}

// console.log(functionName())

function timesTwo(){
    let answer = 3*2;
    return answer
}

// DOM manipulation

let target = document.getElementsByTagName("p");

console.log(target);

// select one element
console.log(target[0]);

// check value
console.log(target[0].innerHTML);
console.log(target[0].innerText);

// you can type it this way too
console.log(document.getElementsByTagName("p")[1].innerText)


target[4].innerText = "<h1>one</h1>";

target[3].innerHTML = "<h1>one</h1>";

for(i of target){
    i.innerText = "hello";
}

for(i=0;i<target.length;i++){
    target[i].innerText = "hello " + i;
}

let targetClass = document.getElementsByClassName("numbers");

console.log(targetClass);

let targetId = document.getElementById("one");

console.log(targetId);

let targetId3 = document.getElementById("three");

console.log(targetId3);

targetId3.style.backgroundColor = "red";
targetId3.style.color = "white";