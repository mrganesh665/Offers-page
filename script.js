function calculateTotal(selectedUnits) {
  let pricePerUnit;

  switch (selectedUnits) {
    case 1:
      pricePerUnit = 10.0;
      break;
    case 2:
      pricePerUnit = 18.0;
      break;
    case 3:
      pricePerUnit = 24.0;
      break;
    default:
      pricePerUnit = 0;
      break;
  }

  document.getElementById("display-price").textContent =
    pricePerUnit.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
  calculateTotal(1);
});
