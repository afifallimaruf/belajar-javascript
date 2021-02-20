// function mulai(){
// 	// var masukan = parseInt(prompt('Masukan Angka: '));

// 	for(var num = 0; num <= 1000; num++){
// 		console.log(num);
// 	}


let mulai = () =>{
	var masukan = parseInt(prompt('Masukan Angka:'));

	for (var num = 0; num <= 100000; num++){
		if(num * num === masukan){
			console.log('Akar dari'+' '+ masukan +' ' +'adalah'+ ' '+ num);
			var hasil = num;
			//console.log(hasil);
		}
	}	
}

function hapus(){

}

function faktorisasi(){
	var masukanHasil = parseInt(prompt('Masukan Angka: '));

	for(let num = 0; num <= 100000; num++){
		if(num*1 == masukanHasil){
			console.log(num+'*'+ 1);
			
		}else if(num*2 == masukanHasil){
			console.log(num+'*'+ 2);
		}else if(num*3 == masukanHasil){
			console.log(num+'*'+ 3);
		}else if(num*4 == masukanHasil){
			console.log(num+'*'+ 4);
		}else if(num*5 == masukanHasil){
			console.log(num+'*'+ 5);
		}else if(num*6 == masukanHasil){
			console.log(num+'*'+ 6);
		}else if(num*7 == masukanHasil){
			console.log(num+'*'+ 7);
		}else if(num*8 == masukanHasil){
			console.log(num+'*'+ 8);
		}else if(num*9 == masukanHasil){
			console.log(num+'*'+ 9);
		}else if(num*10 == masukanHasil){
			console.log(num+'*'+ 10);
		}
	}
}
