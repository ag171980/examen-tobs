const month = document.getElementById('month').value;
const year = document.getElementById('year').value;
const priceMonth = document.getElementsByClassName('precioMes');
const priceYear = document.getElementsByClassName('precioAnio');
let PrecMonth = [];
let PrecAnual = [];

for (let m = 0; m < priceMonth.length; m++) {
    PrecMonth.push(parseInt(priceMonth[m].innerHTML));
    priceMonth[m].innerHTML = '<p class="price">' + priceMonth[m].innerHTML + '</p><p class="text-price">/Monthly</p>';
}
for (let p = 0; p < PrecMonth.length; p++) {
    PrecAnual.push(PrecMonth[p] * 12);
}

for (let p = 0; p < priceYear.length; p++) {
    priceYear[p].className = 'off precioAnio';
}

document.getElementById('month').addEventListener('click', function () {
    if (month == 'month') {
        for (let y = 0; y < priceYear.length; y++) {
            priceYear[y].className = 'off precioAnio';
        }
        for (let m = 0; m < priceMonth.length; m++) {
            priceMonth[m].className = 'on precioMes';
            priceMonth[m].innerHTML = '<p class="price" >' + PrecMonth[m] + '</p><p class="text-price">/Monthly</p>';
        }
    }
});
document.getElementById('year').addEventListener('click', function () {
    if (year == 'year') {
        for (let m = 0; m < priceMonth.length; m++) {
            priceMonth[m].className = 'off precioMes';
        }
        for (let y = 0; y < priceYear.length; y++) {
            priceYear[y].className = 'on precioAnio';
            priceYear[y].innerHTML = '<p class="price" >' + PrecAnual[y] + '</p><p class="text-price" >/Annualy</p>';
        }
    }
});
