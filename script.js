// script.js

document.getElementById("convertButton").addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Nilai tukar statis
    const exchangeRates = {
        USD: { IDR: 15000, EUR: 0.85 },
        IDR: { USD: 0.000067, EUR: 0.000056 },
        EUR: { USD: 1.18, IDR: 17500 }
    };

    // Fungsi untuk melakukan konversi
    function convertCurrency(amount, from, to) {
        if (from === to) {
            return amount; // Tidak perlu konversi jika mata uang sama
        }
        const rate = exchangeRates[from][to];
        return amount * rate;
    }

    // Menghitung hasil konversi
    const result = convertCurrency(amount, fromCurrency, toCurrency);
    document.getElementById("result").innerText = result.toFixed(2);
});

