const text = document.getElementById('text-input');
const result = document.getElementById('result');
const button = document.getElementById('check-btn');

function Palindrome() {
  if (text.value === '') {
    alert('Please input a value');
    return;
  }
  const original = text.value;
  result.innerText = "";
  const regex = /[^a-zA-Z0-9]/gi;
  const updatedText = original.replace(regex, '');
  const reversedText = updatedText.split('').reverse().join('');
  if (updatedText.toLowerCase() == reversedText.toLowerCase()) {
    result.innerText = `${original} is palindrome!`;
  } else {
    result.innerText = `${original} is not palindrome!`;
  }
  text.value = '';
  result.classList.remove('hidden');
}

button.addEventListener('click', Palindrome);