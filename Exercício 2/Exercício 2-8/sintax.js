var x = 0

for (var i = 1; i <= 100; i++) {
    if ((i % 2) === 0) {
        x = i;
    }
    console.log(Math.pow(x, i))
}