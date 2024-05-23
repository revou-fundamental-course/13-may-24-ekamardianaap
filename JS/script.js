// script.js - Luas Segitiga
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

// script.js - Keliling Segitiga
function calculatePerimeter(event) {
    event.preventDefault();
    
    var sisi1 = parseFloat(document.getElementById("sisi1").value);
    var sisi2 = parseFloat(document.getElementById("sisi2").value);
    var sisi3 = parseFloat(document.getElementById("sisi3").value);

    var keliling = sisi1 + sisi2 + sisi3;

    var formula = "Rumus: K = S1 + S2 + S3";
    var result = "Keliling Segitiga: " + keliling.toFixed(2);

    document.getElementById("result_perimeter").innerHTML = formula + "<br>" + result;
}

