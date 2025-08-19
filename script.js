
//Selecting with ID
let id = document.getElementById("myid");
console.dir(id);

//Selecting with Class
let cls = document.getElementsByClassName("myclass");
console.dir(cls);
console.log(cls);   //HTML Collection = something which is similar to an array

//Selecting with tag
let para = document.getElementsByTagName("p");
console.dir(para);
console.log(para);


//Query Selector - A better way to access all at once 
//Query selector returns Node List

//tags
let firele = document.querySelector("p");  //gives the 1st element only
console.dir(firele);

let ele = document.querySelectorAll("p"); //gives all the elements
console.dir(ele);

//class
let fircls = document.querySelector(".myclass");  //gives the 1st cls only
console.dir(fircls);

let cls1 = document.querySelectorAll(".myclass"); //gives all the classese
console.dir(cls1);


//Properties

// 1) tagname = accessed by .tagname = returns tag for element nodes
// 2) innerText = returns the text content 

