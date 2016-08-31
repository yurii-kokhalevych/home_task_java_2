var fabNum = Number(prompt('Enter number fabiachi:'));
function fabiachi(n) {
    var t = [];
    var i;
    t[0] = 1;
    t[1] = 1;
    for (i = 2; i < n + 1; i++) {
        t[i] = t[i - 1] + t[i - 2];
    }
    for (i = 0; i < (n + 1); i++) {
        document.write(t[i] + ",");
    }
}
    fabiachi(fabNum);
