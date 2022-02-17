
/*Ejercisio 1
const resultado = [
    {
        fruta: 'manzanas',
        letras: 8,
    },
    {
        fruta: 'peras',
        letras: 5,
    },
    {
        fruta: 'fresas',
        letras: 6,
    },
    {
        fruta: 'granadas',
        letras: 8,
    },
];
const arreglo = ['manzanas', 'peras', 'fresas', 'granadas'];
var resultado=[];
arreglo.forEach((valor) => resultado.push({fruta: valor, letras: valor.length}));
console.log(resultado);*/




















/** Ejercisio 2
 * De la lista de compras obtener lo siguiente:
 * - Lista de artículos que no encontraron.
 * - Total de la cuenta (artículos encontrados) considerando
 *   que el precio es sin descuento.
 

 /////////////////////////////////////////////////
 const compras = [
    {
        producto: 'Leche',
        encontrado: true,
        precio: 20,
        descuento: 5,
    },
    {
        producto: 'Huevo',
        encontrado: false,
        precio: 32,
        descuento: 0,
    },
    {
        producto: 'Atún',
        encontrado: true,
        precio: 11.50,
        descuento: 0,
    },
    {
        producto: 'Galleta',
        encontrado: true,
        precio: 15.70,
        descuento: 10,
    },
    {
        producto: 'Frijol',
        encontrado: false,
        precio: 17,
    },
    {
        producto: 'Arroz',
        encontrado: true,
        precio: 11,
        descuento: 0,
    },
    {
        producto: 'Gelatina',
        encontrado: true,
        precio: 9.70,
        descuento: 0,
    },
    {
        producto: 'Aceite',
        encontrado: true,
        precio: 38.10,
        descuento: 15,
    },
];

// - Lista de artículos que no encontraron.
const noEncontrados = compras.filter(actual => actual.encontrado == false);
noEncontrados.map(valor => console.log(`no se encontro: ${valor.producto}`) );
// - Total de la cuenta (artículos encontrados) considerando
var total,operacion,resultado = 0;
const siEncontrados = compras.filter(actual => actual.encontrado == true);
siEncontrados.map(valor => {
    operacion =  (valor.descuento * valor.precio) / 100;
    total=(valor.precio - operacion);
    resultado = resultado + total;
});
console.log(`el total de la cuenta de los productos es: ${resultado}`);
*/




















/**
 * Ejercisio 3
 * La siguiente lista de empleados debe ser ordenada con base a
 * la fecha de contratación, omitir los que ya no estan activos y
 * presentarla con el siguiente formato:
 * [
 * {
 * name: '',
 * job: {
 * position: '',
 * description: '',
 * },
 * avatar: '',
 * link: '' // Solo el primero en la lista
 * hireDate: '',
 * email: '' // Nombre en minúsculas, los espacios se reemplazan por puntos y se agrega @correo.com
 * }
 * ]

 
 const employees = [
    {
    name: "Eshaan Ravish",
    jobPosition: "Phython Developer",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/eshaan.jpg",
    links: [
    "https://www.facebook.com/eshaan.ravish",
    "https://github.com/ravisheshaan",
    "https://www.linkedin.com/in/eshaan-ravish-7a573567/",
    ],
    hireDate: '31/10/2011',
    status: true,
    },
    {
    name: "Aakriti Kashyap",
    jobPosition: "Front End - Intern",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/aakriti.jpg",
    links: [
    "https://www.linkedin.com/in/aakriti-kashyap-2a134359/",
    "https://www.facebook.com/aakriti.kashyap.33",
    "https://github.com/Aakriti94",
    ],
    hireDate: '14/01/2010',
    status: true,
    },
    {
    name: "Ravi Dhiman",
    jobPosition: "Front End Developer",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/ravi.jpg",
    links: [
    "https://github.com/ravid7000",
    "https://www.facebook.com/dhiman90",
    "https://www.linkedin.com/in/ravidhiman17/",
    ],
    hireDate: '11/02/2010',
    status: true,
    },
    {
    name: "Sanyam Bansal",
    jobPosition: "Back End Developer",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/sanyam.jpg",
    links: [
    "https://www.facebook.com",
    "https://www.linkedin.com/in/sanyam76/",
    "https://github.com/sanyam199",
    ],
    hireDate: '11/02/2010',
    status: true,
    },
    {
    name: "Pankul Mittal",
    jobPosition: "Back End Developer",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/pankul.jpg",
    links: [
    "https://www.linkedin.com/",
    "https://www.facebook.com",
    "https://github.com/Pankul-Mittal",
    ],
    hireDate: '01/07/2011',
    status: true,
    },
    {
    name: "Pushp sharma",
    jobPosition: "Business Development",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/pushp.jpg",
    links: [
    "https://github.com/",
    "https://www.facebook.com/",
    "https://www.linkedin.com",
    ],
    hireDate: '01/12/2011',
    status: false,
    },
    {
    name: "Lakshay Lakhani",
    jobPosition: "Back End Development",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/lakshay.jpg",
    links: [
    "https://www.facebook.com/",
    "https://www.linkedin.com",
    "https://github.com/",
    ],
    hireDate: '21/03/2009',
    status: true,
    },
    {
    name: "Ankit Bhati",
    jobPosition: "Back End - Intern",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/ankit.jpg",
    links: [
    "https://github.com/",
    "https://www.facebook.com/",
    "https://www.linkedin.com",
    ],
    hireDate: '17/08/2012',
    status: false,
    },
    {
    name: "Asif Akhtar",
    jobPosition: "Back End Developer",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/asif.jpg",
    links: [
    "https://www.linkedin.com/in/asif-akhtar-83b7a195/",
    "https://www.facebook.com/asif.akhtar.7106",
    "https://github.com/asif1011",
    ],
    hireDate: '23/06/2009',
    status: true,
    },
    {
    name: "Nitish Kansal",
    jobPosition: "Back End Developer",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/nitish.jpg",
    links: [
    "https://github.com/nitishkansal",
    "https://www.facebook.com/tanu.kansal",
    "https://www.linkedin.com/in/nitish-kansal-57111647/",
    ],
    hireDate: '17/12/2013',
    status: true,
    }
];

console.log(employees);
const Activos = employees.filter(actual => actual.status);
console.log(Activos);

var partes=[];
var fechaOficial="";
const formato = Activos.map((a) => {
    partes = a.hireDate.split("/");
    fechaOficial = partes[2] + "-" + partes[1] + "-" + partes[0];

    return{
        name: a.name,
        job: {
            position: a.jobPosition,
            description: a.jobDescription,
        },
        avatar: a.avatar,
        link: a.links.shift(), // Solo el primero en la lista
        hireDate: fechaOficial,
        email: a.name.toLowerCase().replace(' ', '.').concat('@gmail.com'),// Nombre en minúsculas, los espacios se reemplazan por puntos y se agrega @correo.com
    }
});

const orden = formato.sort((a,b) => {
    if(a.hireDate > b.hireDate)
    {
        return 1;
    }
    if(a.hireDate < b.hireDate)
    {
        return -1;
    }
    return 0;
});

console.log(orden);
 */














/**
 * Ejercisio 4
 * Del siguiente arreglo de número obtener lo siguiente: media, mediana y moda
 * El formato de la respuesta es:
 * {
 * media: 0,
 * mediana: 0,
 * moda: 0,
 * }
 *
 * NOTA: solo se puede utilizar: sort, filter, pop y reduce, para interactuar con el arreglo
 

const datos = [12, 45, 17, 7, 22, 71, 50, 37, 10, 48, 17, 51, 17, 30, 12, 81];
//ordenamos
const orden = datos.sort((a,b) => a - b);
console.log(orden);
//media
const media = Number((orden.reduce((a,b) => (a += b),0) / orden.length).toFixed(2));
//mediana
const mediana1 = orden.filter(actual => actual < orden[(datos.length/2)]);//16/2=8-1=7
const mediana2 = orden.filter(actual => actual > orden[(datos.length/2)]-1);//16/2=8
var mediana= 0;
var suma = 0;
if(mediana1.length == 0 && mediana2.length == 0){
    suma =((orden.length/2)-1).toFixed(0);
    mediana = datos[Number(suma)];
    
}else{
    suma = (mediana1.pop() + mediana2[0]) / 2;
    mediana=suma;
}
//moda
var mayorRepetido = 1;
var valor = 0;
const moda = orden.reduce((acumulador,valorPosicion, indice) =>{
    valorPosicion = orden.filter(filtroPosicion => filtroPosicion == orden[indice]).length;
    if(mayorRepetido < valorPosicion)
    {
        valor = orden[indice];
        mayorRepetido = valorPosicion;
    }
    return valor;
}, 1);
//imprimimos
console.log({
    media: media,
    mediana,
    moda: moda,
});
*/





/**
 * Del siguiente arreglo obtener el número de veces que cada sabor de helado
 * aparece.
 * {
 * "Strawberry": 3,
 * "Vanilla": 4,
 * "Chocolate": 5,
 * "Cookies & Cream": 2,
 * "Mint Chocolate Chip": 3,
 * "Rocky Road": 1,
 * "Pistachio": 1,
 * "Banana": 1,
 * "French Vanilla": 1,
 * "Vanilla Bean": 1
 * }
 *
 * NOTA: solo con reduce
 */
 
 const data = [{
    name: 'Tyler',
    favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream']
   },
   {
    name: 'Richard',
    favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla']
   },
   {
    name: 'Amanda',
    favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana']
   },
   {
    name: 'Andrew',
    favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip']
   },
   {
    name: 'David',
    favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry']
   },
   {
    name: 'Karl',
    favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip']
   }
   ];
// entrar al dato de una poscion del arroglo general --- data[0].favoriteIceCreams[0]
const res = data.reduce((a,b,c,d) => {
    b == data.filter((busqueda, indice) =>{
        data[c].favoriteIceCreams[indice] == busqueda.favoriteIceCreams[c]
        //console.log(busqueda.favoriteIceCreams[c]);
        //console.log(data[c].favoriteIceCreams[indice]);
    });
    //b= data.filter((fa,fb) => data[]);
    //console.log(b.favoriteIceCreams[0]);//aqui me das solo el primer helado de todos los arreglos.
},0);
   console.log(data[0]);
   console.log();