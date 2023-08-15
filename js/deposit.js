
document.getElementById("btn-deposit").addEventListener("click", function () {
  // function
  // 1. get the element by id
  // 2. get the value from the element
  // 3. convert string to number

  const newDepositAmount = getInputValueByID("deposit-field");
  const previousDepositTotal = getElementValueByID("deposit-total");
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setElementValueByID("deposit-total", newDepositTotal);

  const previousBalance = getElementValueByID("balance-total");
  const newBalance = previousBalance + newDepositAmount;
  setElementValueByID("balance-total", newBalance);
});
