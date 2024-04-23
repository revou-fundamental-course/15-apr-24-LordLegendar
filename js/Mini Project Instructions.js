const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const reverseBtn = document.getElementById('reverseBtn');
const calculation = document.getElementById('calculation');
const celsiusToFahrenheitCalculation = document.getElementById('celsiusToFahrenheitCalculation');

convertBtn.addEventListener('click', convertTemperature);
resetBtn.addEventListener('click', resetFields);
reverseBtn.addEventListener('click', reverseConversion);

function convertTemperature() {
    const celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsius)) {
        calculation.textContent = 'Masukkan nilai suhu dalam Celsius yang valid.';
        fahrenheitInput.value = '';
        celsiusToFahrenheitCalculation.textContent = '';
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    celsiusToFahrenheitCalculation.textContent = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    fahrenheitInput.value = fahrenheit.toFixed(2);
}

function resetFields() {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    calculation.textContent = '';
    celsiusToFahrenheitCalculation.textContent = '';
}

function reverseConversion() {
    const temp = celsiusInput.value;
    celsiusInput.value = fahrenheitInput.value;
    fahrenheitInput.value = temp;
}