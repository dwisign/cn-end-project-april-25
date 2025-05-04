//SPLIDE JS
var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
    autoWidth: true,
    autoScroll: {
        speed: 2,
    },
    breakpoints: {
        991: {
          perPage: 2,
          gap    : '.7rem'
        },
        640: {
          perPage: 1,
          gap    : '.7rem'
        },
    },
  });
  
splide.mount();
// new Splide( '.splide' ).mount( window.splide.Extensions );

var main = new Splide( '#main-slider', {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
  } );
  
  var thumbnails = new Splide( '#thumbnail-slider', {
    rewind          : true,
    fixedWidth      : 104,
    fixedHeight     : 58,
    isNavigation    : true,
    gap             : 10,
    focus           : 'center',
    pagination      : false,
    cover           : true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    breakpoints : {
      640: {
        fixedWidth  : 66,
        fixedHeight : 38,
      },
    },
  } );
  
  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();


  //JQUERY
  $(document).ready(function(){
        $('.showHidePhoto').show();

        // $('.btnInfoText').click(function(){
        //     $('.infoText').show();
        // });

        $('.btnInfoText').click(function(){
            $('.showHidePhoto').toggle('fast');
        });
    });

  
//JS PRACTICE
var data = [
    'Agya',
    'Calya',
    'Avanza',
    'Xenia',
    'Sigra',
    'Rush',
    'Terios',
    'Kijang Innova',
    'Fortuner',
    'Hilux',
    'Land Cruiser',
    'Alphard',
    'Vellfire',
    'Camry'
]

var dataMotor = [
    'Vario',
    'Beat',
    'Scoopy',
    'CBR',
    'CB150R',
    'Ninja',
    'Ninja RR',
    'Ninja ZX',
    'Ninja H2',
    'Ninja H2R',
    'Ninja H2 SX',
    'Ninja 650',
    'Ninja 1000',
    'Ninja ZX-10R',
    'Ninja ZX-14R',
    'Ninja ZX-6R',
    'Ninja ZX-10RR',
    'Ninja ZX-10R SE',
    'Ninja ZX-10R ABS'
]

console.log('INI DATA LOCAL: ', data)

//TIPE DATA
var dataString = 'Hello World!!!'
var dataNumber = 1124124124351532
var dataBoolean = true

console.log(dataString)
console.log(dataNumber)
console.log(dataBoolean)

//PERHITUNGAN
var a = 5
var b = 10
var countKali = a * b
var countTambah = a + b
var countKurang = a - b
var countBagi = a/b
var countSisaBagi = a % b

console.log('PERKALIAN', countKali)
console.log('PENJUMLAHAN', countTambah)
console.log('PENGURANGAN', countKurang)
console.log('PEMBAGIAN', countBagi)
console.log('SISA BAGI', countSisaBagi)

//PERBANDINGAN
var resultTipeData = a === b //Ngecek tipe data
//var resultTipeData = a == b //ngga ngecek tipe data
console.log('PERBANDINGAN', resultTipeData)

var resultKurangDari = a < b
console.log(resultKurangDari)

var resultLebihDari =  a > b
console.log(resultLebihDari)

//LOGIKA
const nilaiUjian = 80
const nilaiAbsensi = 70

const lulusUjian = nilaiUjian >= 75
const lulusAbsensi = nilaiAbsensi >= 85

const fullCertificate = lulusUjian && lulusAbsensi
const partialCertificate = lulusUjian || lulusAbsensi
const noCertificate = !lulusUjian && !lulusAbsensi

console.log('FULL CERTIFICATE', fullCertificate)
console.log('PARTIAL CERTIFICATE', partialCertificate)
console.log('NO CERTIFICATE', noCertificate)

//CONDITIONAL
if (nilaiUjian >= 80) {
    console.log('LULUS')
} else {
    console.log('TIDAK LULUS')
}


// 4 CONDITIONAL
if (nilaiUjian >= 75 && nilaiAbsensi >= 75) {

    console.log('EXCELLENT') 

} else if (nilaiUjian < 75 && nilaiAbsensi >= 75) {

    console.log('GOOD')

} else if (nilaiAbsensi < 75 && nilaiUjian >= 75) {

    console.log('GOOD')

} else {

    console.log('BAD')

}

//Ternery Operator
const kelulusan = nilaiUjian >= 75 && nilaiAbsensi >= 75 ? 'Excellent' : (nilaiUjian < 75 && nilaiAbsensi >= 75) ||  (nilaiAbsensi < 75 && nilaiUjian >= 75) ? 'Good' : 'Bad'
console.log(kelulusan) 


//ARRAY METHODS
console.log(dataMotor)
console.log(dataMotor.length)
console.log(dataMotor.toString())
console.log(dataMotor.join(' - '))
console.log(dataMotor[5])

const dataGabung = dataMotor.concat(data)
console.table(dataGabung)

//LOOPING
for (let index = 0; index < dataGabung.length; index++) {
    console.log('DATA KE - ' + index + ': ' + dataGabung[index])
}


const user = {
    fullName : 'Jhon Doe',
    email: 'jhon@mail.co',
    age: '25'
}

let dataUser=''
for(let data in user){
    dataUser += user[data] + ' '
}
console.log(dataUser)


const users =  [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
]

const listUser = document.getElementById('userDataPrint')
users.forEach(user => {
    for(let v in user){
        //console.log(user[v])
        //document.writeln(user[v] + '<br>')
        //document.getElementById("userDataPrint").innerHTML = user[v];
        const dataUserMap = users.map(user => 
            `<div class="col-lg-4 col-md-6">
                <img src="${user.avatar}" width="100%"><br><br>
                <p>
                    ${user.email}<br>
                    ${user.first_name}<br>
                    ${user.last_name}
                </p>
            </div>`
        ).join('')

        listUser.innerHTML = `<div class="row">${dataUserMap}</div>`
    }
})



















// async function getData() {
//     const url = "https://reqres.in/api/users?page=2";
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Response status: ${response}`);
//         }

//         const json = await response.json();
//         console.log('INI DATA REQRES',json);
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// Specify the API endpoint for user data
// const apiUrl = 'https://reqres.in/api/users?page=2';

// // Make a GET request using the Fetch API
// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(userData => {
//     // Process the retrieved user data
//     console.log('User Data:', userData);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });