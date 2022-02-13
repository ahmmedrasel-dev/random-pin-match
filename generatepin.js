
// 4 Digit Pin generate.
function generatePin() {
  const generatePin = Math.round(Math.random() * 10000);
  // Number er length ber kora jay na tai number ke stirng kore length ber kore check kora hoichy. kon number ke empty string dia gun korle number string hoye jay.

  let generatePinString = generatePin + '';
  if (generatePinString.length == 4) {
    return generatePin;
  } else {
    // Jokhon Pin number 3 degit hobe tokhon ai function te again call korbe and 4 digit na asa porjonto aita call hobe.
    console.log('Got 3 Digit and calling agin')
    return generatePin()
  }
}

// Generate Pin Button a click korle random pin generate hobe.
document.getElementById('generate-pin').addEventListener('click', function () {
  const displayValue = document.getElementById('disply-pin');
  displayValue.value = generatePin()

})

// Event Bubble dia keypad er key gulo dora hoichy.Event Bubble hocchy Parent ke event listener add korle tar chaild gulo ke dora jay. that means child gulo ke dorte hole parant ke addeventlistener add korte hobe.

document.getElementById('keypad').addEventListener('click', function (e) {
  const number = e.target.innerText;
  const calcInput = document.getElementById('typed-number');
  // isNaN dia check korle jei gulo number na oi golo paoya jay.
  if (isNaN(number)) {
    if (number == 'C') {
      calcInput.value = '';
    }
  } else {
    calcInput.value += number
  }

})

// Generate Pin and Typed Pin Matching Check Function.
function varifyPin() {
  const generatePinNumber = document.getElementById('disply-pin').value;
  const typePinNumber = document.getElementById('typed-number').value;
  const notifysuccess = document.getElementById('notify-success');
  const notifyFail = document.getElementById('notify-fail');

  if (generatePinNumber == typePinNumber) {
    notifysuccess.style.display = 'block';
    notifyFail.style.display = 'none';
  } else {
    notifyFail.style.display = "block";
    notifysuccess.style.display = 'none'
  }

}

// Jokhon Submit a click kora hoybe tokhon verifyPin function ke call korbe.
document.getElementById('submit').addEventListener('click', function () {
  varifyPin()
})