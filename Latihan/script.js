var buahBuahan =['Rambutan', 'Sirsak', 'Mangga', 'Nanas'];

// var buah = console.log(buahBuahan[3]);

// for (var i = 0; i < buahBuahan.length; i++){
// 	console.log(buahBuahan[i]);
// }

// push and pop
// console.log(buahBuahan.length);

// console.log(buahBuahan.join());
// buahBuahan.push('Melon');

// console.log(buahBuahan.join());

// buahBuahan.pop();
// console.log(buahBuahan.join());

// unshift and shift

// console.log(buahBuahan.join());
// buahBuahan.unshift('Lemon'); // menambahkan buah lemon
// console.log(buahBuahan.join()); // menampilkan array setelah ditambah

// buahBuahan.shift();
// console.log(buahBuahan.join());

var buahBuahan =['Rambutan', 'Sirsak', 'Mangga', 'Nanas'];
//console.log(buahBuahan.join());

// toString
var buah = buahBuahan.toString();
console.log(buah);


// Sorting

// buahBuahan.sort();
// console.log(buahBuahan.join());

// buahBuahan.reverse();
// console.log(buahBuahan.join());


// buahBuahan[0] = 'Kersen';
// console.log(buahBuahan.join());


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi"; 

// console.log(fruits.join());

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];  

// console.log(fruits.join());

 
// splice

// buahBuahan.splice(1, 0, 'Kersen');
// console.log(buahBuahan.join());

// buahBuahan.splice(2, 2);
// console.log(buahBuahan.join());


var nilai = [80, 70, 60, 50, 100, 90];
console.log(nilai.join());
nilai.sort(function(a,b){return a-b});
console.log(nilai.join());

