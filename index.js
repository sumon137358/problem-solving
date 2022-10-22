 // find out total current bill............
function severalCurrentBill(unit) {
    var currentBill =0;
    if(unit<=400){
        currentBill =unit*5;
    }
    else if(unit<=1500){
        var firstPart = 5*400;
        var remaining =unit -400;
        var secondPart =remaining*10;
        var currentBill =secondPart+firstPart;
    }
    else if(unit<=5000){
        var firstPart = 5*400;
       var  secondPart =1100*10;
        var remaining =unit -1500;
        var thirdPart =remaining*15;
        var currentBill =secondPart+firstPart+thirdPart;
    }

    else{
        var firstPart = 5*400;
        var secondPart  =1100*10;
        var thirdPart =3500*15;
        var remaining =unit -5000;
        var fourthPart =remaining*25;
        var currentBill =firstPart +secondPart+thirdPart+fourthPart;
    }
    return currentBill;
}
var current =severalCurrentBill(290);
console.log("current bill = "+current);

var gas =severalCurrentBill(360);
console.log("gas bill = "+gas);

var water =severalCurrentBill(140);
console.log("water bill = "+water);

var telephone =severalCurrentBill(700);
console.log("Telephone Bill: = "+telephone);

var internet =severalCurrentBill(100);
console.log("Internet Bill:: = "+internet);

var tv =severalCurrentBill(50);
console.log("Tv Bill:: = "+tv);

var tripolBill = (gas)/100 + (water)/100 +(telephone)/100-20;


var total = gas + water +  telephone +current + internet + tv + tripolBill;
console.log(" total bill = ", total);






