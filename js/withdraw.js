document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdraw = getInputValueByID("withdraw-field");
  if (isNaN(newWithdraw)) {
    return alert("Please provide the number");
  }
  const previousWithdraw = getElementValueByID("withdraw-total");
  const newWithdrawTotal = previousWithdraw + newWithdraw;

  const previousBalance = getElementValueByID("balance-total");
  if (newWithdraw > previousBalance) {
    return alert("You don't have enough balance");
  }
  setElementValueByID("withdraw-total", newWithdrawTotal);
  const newBalance = previousBalance - newWithdraw;
  setElementValueByID("balance-total", newBalance);
});
