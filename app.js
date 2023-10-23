// ¿En tu páis de origen es normal dejar propina?
const btn = document.getElementById("calculate");


btn.addEventListener("click", () => {

  const billAmount = +(document.getElementById("bill-amount").value);
  const percentageTip =  document.getElementById("percentage-tip").value;

  let tip = billAmount * (+percentageTip / 100);
  let totalPrice = billAmount + tip;

  document.getElementById("tip-amount").value = tip;
  document.getElementById("total").value = totalPrice;
});
