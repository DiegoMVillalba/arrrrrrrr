const productos = [];
const nombreUsuario=[];



// let nombre ;
// let apellido;
// let dni;

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
productos.push(creatina);
// const creatina1 = new Suplementos("CREATINA", "STAR NUTRITION", "1000GRS", 9000);
// suplementos.push(creatina1);
// const creatina2 = new Suplementos("CREATINA", "MUSCLETECH", "300GRS", 7500);
// suplementos.push(creatina2);
const proteina = new Suplementos("WHEY PROTEIN", "STAR NUTRITION", "1000GRS", 8000);
productos.push(proteina);
// const proteina1 = new Suplementos("WHEY PROTEIN", "STAR NUTRITION", "5KG", 14000);
// suplementos.push(proteina1);
const bcaa = new Suplementos("BCAA", "STAR NUTRITION", "540GRS", 3800);
productos.push(bcaa);
// const bcaa1 = new Suplementos("BCAA", "MUSCLETECH", "240GRS", 6800);
// suplementos.push(bcaa1);
const betaAlanina = new Suplementos("BETA ALANINA", "STAR NUTRITION", "300GRS", 4900);
productos.push(betaAlanina);
// const betaAlanina1 = new Suplementos("BETA ALANINA","MUSCLETECH", "750GRS", 9600);
// suplementos.push(betaAlanina1);


let nombre = prompt('¡Hola! Escribe tu nombre');
nombreUsuario.push(nombre);
let apellido = prompt('Escribe tu apellido');
nombreUsuario.push(apellido);
let mail = prompt('Escibre tu email');
nombreUsuario.push(mail);
let password = prompt('Escribe tu contraseña');
nombreUsuario.push(password);
let password2 = prompt('Repite tu contraseña');
nombreUsuario.push(password2);
let dni = parseInt(prompt('Escribe tu DNI'));
nombreUsuario.push(dni);
let tarjeta = parseInt(prompt('Ingresa los 16 digitos de tu tarjeta'));
nombreUsuario.push(tarjeta);
let pass = parseInt(prompt('Ingresa el codigo de seguridad de 3 digitos'));
nombreUsuario.push(pass);




console.log(nombreUsuario);

console.log("STOCK:");


for(let suple of productos){
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
    for(let suple of productos){
        if(compra.toUpperCase() == suple.nombre){
            suple.cuantoVale();
            total += suple.precio;
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

const creat = productos.filter((el)=> el.nombre.includes('CREATINA'));
const creataprecio = productos.filter((el) => el.precio < 10000);

console.log(creat);
console.log(creataprecio);

const datos =productos.find((el)=> el.nombre ===('WHEY PROTEIN'));
console.log(datos);


