//var children = [
  //{ name: "Ali", gender: "male" },
  //{ name: "Ahmed", gender: "male" },
  //{ name: "Fatma", gender: "female" }
//];

//console.log(children[2].gender);


//var user = {
 // name: "Anoud",
 // id: 2245,
 // address:"oman",
   //children: [
    //{ name: "Ali", gender: "male" },
    //{ name: "Ahmed", gender: "male" },
   // { name: "Fatma", gender: "female" }
  //]

//};

//console.log(children[1].gender);


//var BigArray = [
//[[1,2,3],[1,2,3]],
//[[1,2,3],[1,2,3],["Talaal","Yousef"]],
//[["Ahemd","Eid","Saieed"],[1,2,3]],
//[["Mahmoud","Hassan","Soliman"],[1,2,3]],
//[[1,2,3],[1,2,3],[{name:"Monsef",id:[45,45,45,["SARA"]]}]],
//]
//console.log(BigArray[4][2][0].id[3][0]);


//المطلوب:
//- إدخال درجات 5 طلاب.
//- حساب المجموع والمتوسط.
//- استخدام if statement لتحديد إذا الطالب ناجح أو راسب.
//- استخدام operators المختلفة أثناء الحساب.
//- استخدام for loop للتكرار على الطلاب.

//var studentmark;
//var totalmark=0;
//var avgmark;

//for(var i=1; i<=5;i+=1){
  //studentmark=Number(prompt("Enter Marks Student :"+i));
  //totalmark = totalmark + studentmark;

//if(studentmark >=50){
  //console.log("student No:"+ i +" Successfull");
//}
//else{
  //console.log("student No:"+i+" failed");
//}
//}
//avgmark=totalmark / 5;
//console.log("Total 5 Students Mark :"+totalmark);
//console.log("Avgerage 5 Students Mark :"+avgmark);
//----------------------------------------------------
//Taks:
//display the numbers from 1 to 100,
//number is divisible by 3 only, we print the word "fizz"
//If a number is divisible by 5 only, we print the word "buzz"
//If a number is divisible by both 3 and 5, we print the word "fizzbuzz"


//var num
//for(i=1;i<=100;i++)
//{
//if(i%3==0 && i%5==0){
  //console.log("This Number is fizzbuzz");
//}
//else if(i%3==0){
  //console.log("This Number is Fizz");
//}
//else if(i%5==0){
 // console.log("This Number is buzz");
//}
//else{
  //console.log(i);
//}

//}


//for(i=1;i<=100;i++){
  //console.log(i);
//}

//var random=Math.floor(Math.random() * 10);

 //for (i=1;i<=5;i++) {
   //var input = Number(prompt("Gusse number:"));

  // if (input > random) {
   // console.log("too hot");
   //else if (input < random) {
    //console.log("too cold");
   //}
  // else {
    //console.log("well done");
   // break;
   //}
//}


//if (useremail == "a" && userpassword == "a") {

  //alert("Successfully logged in ");

  //var number_of_questions = Number(prompt("PLZ enter number of questions "));
  //var score = 0;

  //for (var i = 1; i <= number_of_questions; i++) {

    //var num1 = Math.floor(Math.random() * 10);
    //var num2 = Math.floor(Math.random() * 10);

    //var operators = ["+", "-", "*", "/"];
    //var operator = operators[Math.floor(Math.random() * operators.length)];

    //var correctAnswer;

    //if (operator == "+") {
      //correctAnswer = num1 + num2;
    //} 
    //else if (operator == "-") {
      //correctAnswer = num1 - num2;
    //} 
    //else if (operator == "*") {
      //correctAnswer = num1 * num2;
    //}
    

   // var useranswer = Number(prompt("Question " + i + ": " + num1 + " " + operator + " " + num2));

    //if (useranswer === correctAnswer) {
      //alert("Correct Answer");
      //score++;
   // } //else {
     // alert("Wrong ");
    //}
 // }

  //alert(`Final score is:   ${score} / ${number_of_questions}`);
//}


var num1=Number(prompt("plz enter number 1: "));
var num2=Number(prompt("plz enter number 2: "));
var calculator=(prompt("choose operation : + , -, *, /"));


function calcnumber (num1 , num2,calculator){
  if(calculator === "+"){
    total= num1 + num2;
  return total;
  }
 else if(calculator === '-'){
    total= num1 - num2;
  return total;
  }
  else if(calculator === "*"){
    total= num1 - num2;
  return total;
  }
  else if(calculator == "/"){
    total= num1 - num2;
  return total;
  }
  else{
    return"WRONG OPERATION";
  }
}



var finalnum = calcnumber(num1, num2, calculator);

console.log(` ${num1} ${calculator} ${num2} = ${finalnum}`);


