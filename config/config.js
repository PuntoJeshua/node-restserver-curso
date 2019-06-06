// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Base de datos
// ============================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://nullbytes:75r2s6QQudyvYR7@cluster0-shard-00-00-ckjqc.mongodb.net:27017,cluster0-shard-00-01-ckjqc.mongodb.net:27017,cluster0-shard-00-02-ckjqc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
}
process.env.URLDB = urlDB;
