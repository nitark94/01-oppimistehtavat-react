const x = 1;
let y = 5;

console.log(x, y); // tulostaa 1 5
y += 10;
console.log(x, y); // tulostaa 1 15
y = "teksti";
console.log(x, y); // tulostaa 1 teksti

// Tämä aiheuttaa virheen, koska x on const
// x = 4;
