// window.onload = function(){
//   console.log(" dom loaded");



cust = [
  {
    Name: "Avi Cohen",
    pin: 1234,
    amount: 1000,
  },
  {
    Name: "Itay Vanunu",
    pin: 1425,
    amount: 12000,
  },
  {
    Name: "Robert Test",
    pin: 5789,
    amount: 21000,
  },
  {
    Name: "Ruven Doar",
    pin: 9153,
    amount: 30000,
  },
  {
    Name: "Silvia Karta",
    pin: 7311,
    amount: 700,
  },
  {
    Name: "Adi Gold",
    pin: 4826,
    amount: 5000,
  },
];

      let i = Math.floor(Math.random() * 7); //רנד לשמות

      let content = document.querySelector("#content");
      let start = document.querySelector('#card');
      start.addEventListener("click",welcome);
      // תחילת פונקציה
      function welcome() {
        // for(let i=0;i <= cust.length;i++){
        //     if (i==r){

          
          // }
        // }
        // console.log(cust.Name, cust.pin)
        // let x = document.querySelector('#number')
        // console.log(x)
        
        var image = document.getElementById("image");
        card.style.animationName = "example";
        
        content.innerHTML =
          "<form><h2>WELCOME, " +
          uName +
          '<br> PLEASE ENTER YOUR PIN.</h2><input id="number" type="number" max="9999">';
          
          console.log(uName, currentPin);
      }
    
// console.log(data);
// welcome();
      let inputField = document.querySelector("input#number");


// buttons 0-9
      // document.querySelectorAll("button").forEach((occurence) => {
      //   let id = occurence.getAttribute("id");
      //   occurence.addEventListener("click", function (num) {
      //     inputField = document.querySelector("input#number");

      //     console.log("A button with ID " + id + " was clicked!");
      //     inputField.value += num.target.value;
      //     console.log(inputField.value);
      //     //   document.getElementById('id').value = document.getElementById('id').value + num
      //     //   content.innerHTML ='<form><h2>WELCOME, ' + cust[i].Name + '<br> PLEASE ENTER YOUR PIN.</h2><input id="number" type=number max="9999">'
      //   });
      // });
      document.querySelectorAll("button").forEach((occurence) => {
        // let id = occurence.getAttribute("id");
        occurence.addEventListener("click", function () {
          inputField = content;
            inputField = document.querySelector("input#number");
            // console.log("A button with ID " + id + " was clicked!");
            inputField.value += this.value; // use this.value instead of num.target.value
            console.log(inputField.value);
        });
    });
    

      const enter = document.querySelector(".enter")
      enter.addEventListener("click", verifyPin);
      


/* verify 2 option menu*/
      let uName = cust[i].Name
      let currentBalance = cust[i].amount;
      let currentPin = cust[i].pin;
      let correctPin = false;
      let done = false;
// let inputMain = document.querySelector("content").innerHTML ='<form> <input type = "number" id = "number"></input></form>';


let currentTime = 0;

function verifyPin(currentTime1) {
  // console.log("enter was clicked");
  inputField = document.querySelector("input#number");
  console.log(currentTime);
        //  enteredPin = inputField.value;
        // console.log(enteredPin)
        
        if(inputField.value == currentPin){
        
            content.innerHTML='<h2> welcome '+ uName +" "+' Your current amount is : ' + currentBalance + '</h2>' ;
            correctPin = true;
          setTimeout (optionMenu ,2000 );
          
       
      }
          else {

          for(let i = currentTime; i < 4 ; i++){
              content.innerHTML = "<h2>Invalid pin please try again</h2>";
              currentTime++;
              console.log(currentTime);
              
              
             setTimeout( welcome, 2000);
            
            
             if ( currentTime == 4 ){
              content.innerHTML = "<h2>to many trys</h2>"
            };
             };
          }
      }

      
      // for(let i = currentTime; i <= cust.length; i++){
      //    }


// this is were the pin is verified
// function match() {
//   let inputField = document.querySelector("input#number");
 
//   console.log(inputField.value);
//     for(let i=0; i <= cust.length; i++){
//       // const customer = cust[i].pin;
//       if (inputField.value == cust[i].pin) {
//        console.log("pin is correct");
//        content.innerHTML='<h2> welcome '+ cust[i].Name +" "+' Your current amount is : ' + cust[i].amount + '</h2>'};
//        }
//     };
 


/* menu options D =deposit w =withdraw  C=checkbalance P = pinchang R=  receipt Q=quit  */

      function optionMenu (option){
        inputSelection = content.innerHTML="<h2> what would you like to do? </h2>";
        content.innerHTML = inputSelection
        let option1 = document.querySelector('#option1');
        option1.innerText = "DEPOSIT";
        let option2 = document.querySelector('#option2');
        option2.innerText = "WITHDRAW";
        let option3 = document.querySelector('#option3');
        option3.innerText = "CHECKBALANCE";
        let option4 = document.querySelector('#option4');
        option4.innerText = "PIN CHANGE";
        let option5 = document.querySelector('#option5');
        option5.innerText = "RECEIPT";
        let option6 = document.querySelector('#option6');
        option6.innerText = "QUIT";
        
       
     

      // add buttons fordeposit
     const depositButton = document.querySelector('#opbut1');
     depositButton.addEventListener('click',deposit);

     function deposit () {
       let depositAmount = document.querySelector("input#number");
       content.innerHTML = `<h2>how much you would like to deposit</h2>`
       content.innerHTML=`<input type="number" id="number>` 
                // btn1 50
                 let option1Btn = document.querySelector("#opbut1");
                 let option1 = document.querySelector('#option1');
                 option1.innerText = "50";
                 option1Btn.addEventListener('click',deposit50);

                 function deposit50(){
                   depositAmount=50;
                   currentBalance += depositAmount;
                    
                   return content.innerText = "your currentBalance is" +currentBalance;
                 } 
                 //btn 100
                 let option2Btn = document.querySelector("#opbut2");
                 let option2 = document.querySelector('#option2');
                 option2.innerText = "100";
                 option2Btn.addEventListener('click',deposit100);

                 function deposit100(){
                   depositAmount=100;
                   currentBalance += depositAmount;
                    
                   return content.innerText = "your currentBalance is" +currentBalance;
                 } 

                 // btn 150
                 let option3Btn = document.querySelector("#opbut3");
                 let option3 = document.querySelector('#option3');
                 option3.innerText = "150";
                 option3Btn.addEventListener('click',deposit150);

                 function deposit150(){
                   depositAmount=150;
                   currentBalance += depositAmount;
                    
                   return content.innerText = "your currentBalance is" +currentBalance;
                 } 
                 //btn 200
                 let option4Btn = document.querySelector("#opbut4");
                 let option4 = document.querySelector('#option4');
                 option4.innerText = "200";
                 option4Btn.addEventListener('click',deposit200);

                 function deposit200(){
                  depositAmount=200;
                  currentBalance += depositAmount;
                   
                  return content.innerText = "your currentBalance is" +currentBalance;
                } 
                //btn 450
                let option5Btn = document.querySelector("#opbut5");
                 let option5 = document.querySelector('#option5');                 
                 option5.innerText = "450";
                 option5Btn.addEventListener('click',deposit450);

                 function deposit450(){
                  depositAmount=450;
                  currentBalance += depositAmount;
                   
                  return content.innerText = "your currentBalance is" +currentBalance;
                } 
                //btn other
                let option6Btn = document.querySelector("#opbut6");
                 let option6 = document.querySelector('#option6');
                 option6.innerText = "other";
                 option6Btn.addEventListener('click',depositOther);

                 function depositOther(){
                  inputField = document.querySelector("input#number");
                  let other = inputField.value;
                  currentBalance += other.value;

                  return content.innerText = "your currentBalance is" +currentBalance;
                 };


       if(depositAmount%20 || depositAmount%50 || depositAmount%100 || depositAmount%200){
       currentBalance += depositAmount;
       content.innerHTML="<h2> Your new Blance is: "+currentBalance+"</h2>";
       }
       else {
         content.innerHTML="<h2> bills only (20,50,100,200)</h2>";
       }};
      };