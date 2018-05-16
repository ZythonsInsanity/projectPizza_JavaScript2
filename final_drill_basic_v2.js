
function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	//console.log(selectedSize+" = $"+sizeTotal+".00");
	//console.log("size text1: "+text1);
	//console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); 
	document.getElementById("showText").style.display="inline"
	document.getElementById("totalPrice").style.display="inline"
};
//Get Meat
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			//console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	//console.log("total selected meat items: "+meatCount);
	//console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	//console.log("meat text1: "+text1);
	//console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVeggies(runningTotal,text1);
};

//Get Veggies
function getVeggies(runningTotal,text1) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggiesArray.length; j++) {
		if (veggiesArray[j].checked) {
			selectedVeggies.push(veggiesArray[j].value);
			//console.log("selected veggies item: ("+veggiesArray[j].value+")");
			text1 = text1+veggiesArray[j].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount > 1) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	runningTotal = (runningTotal + veggiesTotal);
	//console.log("total selected veggies items: "+veggiesCount);
	//console.log(veggiesCount+" veggies - 1 free veggies = "+"$"+veggiesTotal+".00");
	//console.log("veggies text1: "+text1);
	//console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCheese(runningTotal,text1);
};

//Get Cheese
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	//console.log(cheeseArray);
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			//console.log("selected cheese item: ("+cheeseArray[j].value+")");
			text1 = text1+cheeseArray[j].value+"<br>";
			//console.log(cheeseTotal)
			if (cheeseArray[j].value === "Extra Cheese"){
				cheeseTotal = 3;
			} 
			else {
				cheeseTotal = 0;
			}
			//console.log(cheeseTotal)
			//console.log(cheeseArray[j].checked)
		}	
	}

	runningTotal = (runningTotal + cheeseTotal);
	//console.log("total selected cheese items: "+cheeseCount);
	//console.log(cheeseCount+" cheese - 1 free cheese = "+"$"+cheeseTotal+".00");
	//console.log("cheese text1: "+text1);
	//console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getSauce(runningTotal,text1)
};

//Get Sauce
function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce.push(sauceArray[j].value);
			//console.log("selected sauce item: ("+sauceArray[j].value+")");
			text1 = text1+sauceArray[j].value+"<br>";
		}
	}
	var sauceCount = selectedSauce.length;
	if (sauceCount > 1) {
		sauceTotal = (sauceCount - 1);
	} else {
		sauceTotal = 0;
	}
	runningTotal = (runningTotal + sauceTotal);
	//console.log("total selected sauce items: "+sauceCount);
	//console.log(sauceCount+" sauce - 1 free sauce = "+"$"+sauceTotal+".00");
	//console.log("sauce text1: "+text1);
	//console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCrust(runningTotal,text1)
};

//Get Crust
function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			//console.log("selected crust item: ("+crustArray[j].value+")");
			text1 = text1+crustArray[j].value+"<br>";
		
			if(crustArray[j].value === "Cheese Stuffed Crust"){
				crustTotal = 3;
			} 
			else {
				crustTotal = 0;
			}
		}
	}

	runningTotal = (runningTotal + crustTotal);
	//console.log("total selected crust items: "+crustCount);
	//console.log(crustCount+" crust - 1 free crust = "+"$"+crustTotal+".00");
	//console.log("crust text1: "+text1);
	//console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
  
};

function clearAll() {
	document.getElementById("frmMenu").reset();
	document.getElementById("cart").style.minHeight="40px";
	document.getElementById("showText").style.display="none"
	document.getElementById("totalPrice").style.display="none"
};