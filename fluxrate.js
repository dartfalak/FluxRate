
const url = "https://api.exchangerate-api.com/v4/latest/USD";
const currencyselection = document.querySelectorAll(".currency-selection")
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from');
const toCurrency = document.getElementById('to');
const fetchBtn = document.getElementById('fetch');
const msg = document.querySelector('.msg'); 


const rates = {
  USD: 1,
  PKR: 281,
  EUR: 0.92
};


fetchBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (!amount || amount <= 0) {
    msg.textContent = '⚠️ Please enter a valid amount!';
    return;
  }

  
  const converted = (amount / rates[from]) * rates[to];

  msg.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
});
