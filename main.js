document.getElementById("submit").addEventListener("click", function () {
        let isClassRed;

        this.classList.contains("red")
          ? (isClassRed = true)
          : (isClassRed = false);
        if (isClassRed) {
          this.classList.remove("red");
          this.classList.add("green");
        } else {
          this.classList.remove("green");
          this.classList.add("red");         
        };
  const calculation = actionOperation();
  document.getElementById("result").innerHTML = calculation;
});


function actionOperation() {
    let result;
    let number1 = Number(document.getElementById("number_1").value);
    let number2 = Number(document.getElementById("number_2").value);
    let operator = document.getElementById("action").value;
    switch (operator) {
        case '+':
           result = number1 + number2;
           break;
        case '-':
           result = number1 - number2;
           break;
        case '*':
           result = number1 * number2;
           break;
        case '/':
           result = number1 / number2;
           break;
    } 
    return result;
  };
   
  
   

