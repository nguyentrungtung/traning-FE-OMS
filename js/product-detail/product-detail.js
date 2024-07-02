
document.getElementById('button-minus').addEventListener('click', function () {
    var input = document.getElementById('number-input');
    var value = parseInt(input.value, 10);
    if (value > parseInt(input.min, 10)) {
        input.value = value - 1;
    }
});

document.getElementById('button-plus').addEventListener('click', function () {
    var input = document.getElementById('number-input');
    var value = parseInt(input.value, 10);
    input.value = value + 1;
});