document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('areaForm').addEventListener('submit', calculateArea);
    document.getElementById('perimeterForm').addEventListener('submit', calculatePerimeter);
});

function calculateArea(event) {
    event.preventDefault();
    
    try {
        const alas = parseFloat(document.getElementById('alas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);

        if (isNaN(alas) || isNaN(tinggi)) {
            throw new Error('Input values must be numbers');
        }

        const area = 0.5 * alas * tinggi;

        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `
            L = 1/2 x a x t <br>
            L = 1/2 x ${alas} x ${tinggi} <br>
            L = ${area}
        `;
    } catch (error) {
        console.error('Error calculating area:', error);
    }
}

function calculatePerimeter(event) {
    event.preventDefault();

    try {
        const sisi1 = parseFloat(document.getElementById("sisi1").value);
        const sisi2 = parseFloat(document.getElementById("sisi2").value);
        const sisi3 = parseFloat(document.getElementById("sisi3").value);

        if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
            throw new Error('Input values must be numbers');
        }

        const keliling = sisi1 + sisi2 + sisi3;

        const formula = "Rumus: K = S1 + S2 + S3";
        const result = "Keliling Segitiga: " + keliling.toFixed(2);

        document.getElementById("result_perimeter").innerHTML = formula + "<br>" + result;
    } catch (error) {
        console.error('Error calculating perimeter:', error);
    }
}
