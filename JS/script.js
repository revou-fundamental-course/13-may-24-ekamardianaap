function calculateArea(event) {
    event.preventDefault();
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const area = 0.5 * alas * tinggi;
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        L = 1/2 x a x t <br>
        L = 1/2 x ${alas} x ${tinggi} <br>
        L = ${area}
    `;
}
