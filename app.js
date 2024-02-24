const calcTxt = document.querySelector(".sub-display");
const btn0 = document.querySelector("#zero");
const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");
const btnclr = document.querySelector("#clear");
const btnplus = document.querySelector("#plus");
const btnminus = document.querySelector("#minus");
const btndiv = document.querySelector("#divide");
const btnmul = document.querySelector("#multiply");
const btnfclr = document.querySelector("full-clear");
const btnans = document.querySelector("#answer");

op1 = "";
op2 = "";
operation = "";
ans = 0;
opflag = 0;

btn0.addEventListener("click", ()=>{
   if(opflag===0){
      op1 = op1 + "0";
      console.log(op1);
   }
   else if(opflag===1){
      op2 = op2 + "0";
      console.log(op2);
   } 
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btn1.addEventListener("click", ()=>{
   if(opflag===0){
      op1 = op1 + "1";
      console.log(op1);
   }
   else if(opflag===1){
      op2 = op2 + "1";
      console.log(op2);
   } 
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btn2.addEventListener("click", ()=>{
   if(opflag===0){
      op1 = op1 + "2";
      console.log(op1);
   }
   else if(opflag===1){
      op2 = op2 + "2";
      console.log(op2);
   } 
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btn3.addEventListener("click", ()=>{
   if(opflag===0){
      op1 = op1 + "3";
      console.log(op1);
   }
   else if(opflag===1){
      op2 = op2 + "3";
      console.log(op2);
   } 
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btn4.addEventListener("click", ()=>{
   if(opflag===0){
      op1 = op1 + "4";
      console.log(op1);
   }
   else if(opflag===1){
      op2 = op2 + "4";
      console.log(op2);
   } 
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btn5.addEventListener("click", ()=>{
   if(opflag===0){
      op1 = op1 + "5";
      console.log(op1);
   }
   else if(opflag===1){
      op2 = op2 + "5";
      console.log(op2);
   } 
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btn6.addEventListener("click", ()=>{
   if(opflag===0){
      op1 = op1 + "6";
      console.log(op1);
   }
   else if(opflag===1){
      op2 = op2 + "6";
      console.log(op2);
   } 
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btn7.addEventListener("click", ()=>{
   if(opflag===0){
      op1 = op1 + "7";
      console.log(op1);
   }
   else if(opflag===1){
      op2 = op2 + "7";
      console.log(op2);
   } 
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btn8.addEventListener("click", ()=>{
   if(opflag===0){
      op1 = op1 + "8";
      console.log(op1);
   }
   else if(opflag===1){
      op2 = op2 + "8";
      console.log(op2);
   } 
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btn9.addEventListener("click", ()=>{
   if(opflag===0){
      op1 = op1 + "9";
      console.log(op1);
   }
   else if(opflag===1){
      op2 = op2 + "9";
      console.log(op2);
   } 
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btnclr.addEventListener("click", ()=>{
   if(opflag===0){
      op1 = "";
      console.log(op1);
   }
   else if(opflag===1){
      op2 = "";
      console.log(op2);
   } 
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

/* btnfclr.addEventListener("click", ()=>{
   op1 = "";
   op2 = "";
   operation = "";
   ans = 0;
   opflag = 0;
   calcTxt.textContent = op1 + operation + op2;
}) */

btnplus.addEventListener("click", ()=>{
   if(opflag===0){
      operation = operation + "+";
      opflag = 1;
   }
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btnminus.addEventListener("click", ()=>{
   if(opflag===0){
      operation = operation + "-";
      opflag = 1;
   }
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btndiv.addEventListener("click", ()=>{
   if(opflag===0){
      operation = operation + "/";
      opflag = 1;
   }
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btnmul.addEventListener("click", ()=>{
   if(opflag===0){
      operation = operation + "X";
      opflag = 1;
   }
   calcTxt.textContent = op1 + " " + operation + " " + op2;
})

btnans.addEventListener("click", ()=>{
   if(opflag===0){
      ans = op1;
   }
   else if(opflag===1){
      switch(operation){
         case "+":
            ans = Number(op1) + Number(op2);
            break;
         case "-":
            ans = Number(op1) - Number(op2);
            break;
         case "X":
            ans = Number(op1) * Number(op2);
            break;
         case "/":
            ans = Number(op1) / Number(op2);
            break;
      }
   }
   calcTxt.textContent = "= " + ans;
   opflag = 0;
   op1 ="";
   op2 ="";
   operation ="";
})


