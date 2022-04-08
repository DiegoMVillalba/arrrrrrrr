const suplementos = [];


class Suplementos {
    constructor(nombre, marca, gramos, precio){
        this.nombre = nombre;
        this.marca = marca;
        this.gramos = gramos;
        this.precio = precio;
    
    }
    cuantoVale(){
        alert(this.precio);
    }

};

const creatina = new Suplementos("CREATINA", "STAR NUTRITION", "300GRS", 5000);
suplementos.push(creatina);
const proteina = new Suplementos("WHEY PROTEIN", "STAR NUTRITION", "1000GRS", 8000);
suplementos.push(proteina);
const bcaa = new Suplementos("BCAA", "STAR NUTRITION", "540GRS", 3800);
suplementos.push(bcaa);
const betaAlanina = new Suplementos("BETA ALANINA", "STAR NUTRITION", "300GRS", 4900);
suplementos.push(betaAlanina);

console.log("STOCK:");

for(let suple of suplementos){
    console.log(suple.nombre);
}

let compra ="" ;
let total = 0;
while(compra.toUpperCase() != "ESC"){
    compra = prompt(`¿Que suplemento desea comprar? (para finalizar escriba 'ESC'):
                        1.CREATINA
                        2.WHEY PROTEIN
                        3.BCAA
                        4.BETA ALANINA`);
    for(let suple of suplementos){
        if(compra.toUpperCase() == suple.nombre){
            suple.cuantoVale();
            total = total + suple.precio;
            console.log(total);
            
            
        };
    };
};


alert("el precio total es : " + total);
let valorTotal = total;
let monto = parseInt(prompt("¿Con cuanto abona?"));
let abono = monto;
function pagar(numA,numB) {
   let resta = numA - numB;
    return resta;
};
let resultado = pagar(abono,valorTotal);
alert(`Su vuelto es: ${resultado}`);
console.log(resultado);
document.write(resultado);