//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//BD
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/polizas-seguro';
} else {
    urlDB = 'mongodb://admin:admin1234@ds027145.mlab.com:27145/sffst'
}

process.env.URLDB = urlDB;