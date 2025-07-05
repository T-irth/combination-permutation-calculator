function factorial(num) {
  if (num === 1 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

function calculate() {
  const n = parseInt(document.getElementById('n').value);
  const r = parseInt(document.getElementById('r').value);
  const resultDiv = document.getElementById('result');
  const type = document.querySelector('input[name="type"]:checked').value;

  // Validation
  if (isNaN(n) || isNaN(r)) {
    resultDiv.innerHTML = '<span class="error">Please enter valid numbers for n and r.</span>';
    return;
  }

  if (n < 1 || r < 1) {
    resultDiv.innerHTML = '<span class="error">n and r must be non-negative integers.</span>';
    return;
  }

  if (r > n) {
    resultDiv.innerHTML = '<span class="error">r must be less than or equal to n.</span>';
    return;
  }

  let result;
  if (type === 'nCr') {
    result = factorial(n) / (factorial(r) * factorial(n - r));
    resultDiv.textContent = `C(${n}, ${r}) = ${result}`;
  } else {
    result = factorial(n) / factorial(n - r);
    resultDiv.textContent = `P(${n}, ${r}) = ${result}`;
  }
}
