// IF-ELSE
function CalculateBMI(){
	let Weight = document.getElementById('Weight').value * 1
	let Height = document.getElementById('Height').value * 1
	let BMI = Math.round(Weight/Math.pow(Height,2))
 if (BMI == 18.5 && BMI <24.9){
	 	window.alert( "Your weight is "+ BMI + ". You are normal weight.");
      }
	 else if (BMI < 18.5 ){	
	 	window.alert("Your weight is " + BMI + " . You are underweight.");
	  }
	  else if (BMI > 25 && BMI <=29.9){
	  	window.alert("Your wieght is " + BMI + ". You are overweight.");
	  }
	  else {
	  	window.alert("You are obese.");
	  }
}