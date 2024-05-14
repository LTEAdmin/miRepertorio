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

const leerCanciones = async () => {
  try {
    const query = `SELECT * FROM canciones`;
    await dbase.query(query);
  } catch (error) {
    console.log(" Se detecto el error", error);
  }
};

const leerCancion = async () => {
  try {
    const query = `SELECT * FROM canciones WHERE id = ${id}`;
    await dbase.query(query);
  } catch (error) {
    console.log(" Se detecto el error", error);
  }
};
const modificarCancion = async () => {
    try {
        const query = `UPDATE canciones SET cancion = '${cancion}', artista = '${artista}', tono = '${tono}' WHERE id = ${id}`;
        await dbase.query(query);
    } catch (error) {
        console.log(" Se detecto el error", error);
    }
};

const borrarCancion = async () => {
    try {
        const query = `DELETE FROM canciones WHERE id = ${id}`;
        await dbase.query(query);
    } catch (error) {
        console.log(" Se detecto el error", error);
    }
};

export {
  crearCancion,
  leerCanciones,
  leerCancion,
  modificarCancion,
  borrarCancion,
};
