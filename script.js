document.getElementById('calculate-button').addEventListener('click', function(){
  let income = getInputValue('income-id');
  let food = getInputValue('food-id');
  let rent = getInputValue('rent-id');
  let clothes = getInputValue('clothes-id');

  const totalExpenses = food + rent + clothes;
  document.querySelector('#final-expenses').innerText= totalExpenses;
  const remainingBalance = income-totalExpenses;
  document.querySelector('#balance-left').innerText = remainingBalance;
  


})

document.getElementById('save-button').addEventListener('click',function(){
  const percentgeAmount = getInputValue('saving-area');
  // let income = getInputValue('income-id');
  
  const previousBalanceText = document.getElementById('balance-left').innerText;
  const previousBalance = parseFloat(previousBalanceText)
  const totalSavingAmount =  percentgeAmount / 100 * previousBalance ;
  document.querySelector('#saving-amount').innerText = totalSavingAmount;
  document.getElementById('remaining-balance').innerText= previousBalance - totalSavingAmount;




})

function getInputValue(id){
  const inputvalueText =document.getElementById(id).value ;
  const inputValue = parseFloat(inputvalueText);
  return inputValue;
}

