let form = document.getElementById('loan-form');
let load = document.getElementById('loader');

let btn = document.querySelector('button');

form.addEventListener('submit', function (e) {
  output.style.display = 'none';
  load.style.display = 'block';
  setTimeout(loanCalc, 500);
  e.preventDefault();
});




function loanCalc() {

  let  creditSum = parseFloat(document.getElementById('amount').value);
  let  interest = parseFloat(document.getElementById('interest').value);
  let  years = parseFloat(document.getElementById('years').value);
  
  
  let output = document.getElementById('output');
  let monthAmountRes = document.getElementById('monthAmount');
  let totalVal = document.getElementById('totalVal');
  let totalInterest = document.getElementById('totalInterest');
 

  if(isNaN(creditSum) || isNaN(interest) || isNaN(years)){
   alert('Please fill in the inputs!');
  }


  let monthinterest = +(interest/ 100 / 12).toFixed(6);
  let deadLine = 12 * years;
  let i =monthinterest + (monthinterest/(Math.pow((1+monthinterest), deadLine) -1));
  let monthAmount = (creditSum * i).toFixed(2);

  

  monthAmountRes.value = monthAmount;
  totalVal.value = (monthAmount * deadLine).toFixed(2);
  totalInterest.value = ((monthAmount * deadLine) - creditSum).toFixed(2);
  output.style.display = "block";
  load.style.display = "none";

}



btn.addEventListener('click' , loanCalc);


