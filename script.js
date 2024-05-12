const btn = document.getElementById("getItems");
const input = document.getElementById("input");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy");
const clearBtn = document.getElementById("clear");

let items;

btn.addEventListener("click", () => {
  const products = input.value.split("\n");
  const getProductCodes = (products) => {
    return products.map((product) => {
      const lastTwoChars = product.slice(-2);
      const secondLastChar = product.slice(-3, -2);
      const lastTwoDigits = parseInt(lastTwoChars);
      const secondLastDigit = parseInt(secondLastChar);
      if (!isNaN(lastTwoDigits) && !isNaN(secondLastDigit)) {
        return parseInt(`${secondLastChar}${lastTwoChars}`);
      } else if (!isNaN(lastTwoDigits)) {
        return parseInt(lastTwoDigits);
      } else {
        return 0;
      }
    });
  };

  items = getProductCodes(products);
  const numOfItems = items.join("<br>");

  output.innerHTML = numOfItems;
});

copyBtn.addEventListener("click", async () => {
  const values = items.join("\n");
  try {
    await navigator.clipboard.writeText(values);
    alert("copied");
  } catch (error) {
    alert("Failed, copy manually");
  }
});

clearBtn.addEventListener("click", () => {
  input.value = "";
});
