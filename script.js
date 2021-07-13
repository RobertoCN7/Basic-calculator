function Calculate(n1,n2) {
    let number1 = parseInt(document.getElementById("Number1").value);
    
    let number2 = parseInt(document.getElementById("Number2").value);
    
    let operation = document.getElementById("Operator").value;
    
    let results =0;
    
    if (operation == "Sum"){
        result = number1 + number2;
    
      } else if(operation == "Substract") {
          result = number1 - number2;
      }
      else if(operation == "Divide") {// 
         result = number1 / number2;
      }
      else if(operation == "Multiply") {// 
         result = number1 * number2;
      }
      document.querySelector("#Results").innerHTML =  result;
      //console.log(result);
    
    }
    