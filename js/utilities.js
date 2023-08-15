function getInputValueByID(inputFieldID) {
  const inputField = document.getElementById(inputFieldID);
  const inputFieldValueString = inputField.value;
  const inputFieldAmount = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldAmount;
}

function getElementValueByID(elementID) {
  const element = document.getElementById(elementID);
  const elementValueString = element.innerText;
  const value = parseFloat(elementValueString);
  return value;
}

function setElementValueByID(elementID, newValue) {
  const element = document.getElementById(elementID);
  element.innerText = newValue;
}
