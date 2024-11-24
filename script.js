// Function to calculate sales tax
document.getElementById("calculate-btn").addEventListener("click", function () {
    const price = parseFloat(document.getElementById("price").value);
    const taxRate = parseFloat(document.getElementById("tax").value);
  
    if (isNaN(price) || isNaN(taxRate)) {
      alert("Please enter valid numbers for price and tax rate.");
      return;
    }
  
    const salesTax = (price * taxRate) / 100;
    const totalPrice = price + salesTax;
  
    const resultValues = document.querySelectorAll(".result-value");
    resultValues[0].textContent = `$${price.toFixed(2)}`;
    resultValues[1].textContent = `${taxRate.toFixed(2)}% or $${salesTax.toFixed(2)}`;
    resultValues[2].textContent = `$${totalPrice.toFixed(2)}`;
  });
  
  // Function to clear inputs and results
  document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("price").value = "";
    document.getElementById("tax").value = "";
  
    const resultValues = document.querySelectorAll(".result-value");
    resultValues.forEach(value => {
      value.textContent = ""; // Clear results
    });
  });
  