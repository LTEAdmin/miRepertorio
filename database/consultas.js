import dbase from "../config/db.js";
const argumentos = process.argv.slice(2);
const funcion = argumentos[0];

const crearCancion = async ({ cancion, artista, tono }) => {
    try { 
        const query = `INSERT INTO canciones (cancion, artista, tono) VALUES ('${cancion}', '${artista}', '${tono}')`;
        await dbase.query(query);
    }
    catch (error) {
        console.log(" Se detecto el error", error);
    }


try {
} catch (error) {
  console.log(" Se detecto el error", error);
}
    
};


const leerCancion = async () => {
  try {
    const query = `SELECT * FROM canciones`;
    await dbase.query(query);
  } catch (error) {
    console.log(" Se detecto el error", error);
  }
};


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
