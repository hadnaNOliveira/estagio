var x = 0

for (var i = 100; i <= 1; i--) {
    if ((i % 2) === 0) {
        x = i;
    }
    console.log(Math.pow(x, i))
}