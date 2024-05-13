import dbase from "../config/db.js";
const argumentos = process.argv.slice(2);
const funcion = argumentos[0];



//CRUD de canciones
const funciones = {
  create: crearCancion,
  read: leerCancion,
  update: modificarCancion,
  delete: borrarCancion,
};

(async () => {
  await funciones[funcion]({
    cancion,
    artista,
    tono
  });
  pool.end;
})();
