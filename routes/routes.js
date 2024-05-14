import express from "express";
import path from "path";
import   {  leerCanciones , crearCancion, leerCancion, modificarCancion, borrarCancion} from "../database/consultas.js";
const router = express.Router;
const __dirname = import.meta.dirname;

//pagina principal de ingreso de cancion
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

//pagina de canciones
router.get("/canciones", (req, res) => {
    const result = leerCanciones();
    res.json(result);
});

//guardar cancion
router.post("/cancion", (req, res) => {
    const { cancion, artista, tono } = req.body;
    const result = crearCancion({ cancion, artista, tono });
    res.json(result);
});

//modificar cancion
router.put("/cancion/:id", (req, res) => {
    const { id } = req.params;
    const { cancion, artista, tono } = req.body;
    const result = modificarCancion({ id, cancion, artista, tono });
    res.json(result);
}); 

//borrar cancion
router.delete("/cancion/:id", (req, res) => {
    const { id } = req.params;  
    const result = borrarCancion({ id });
    res.json(result);
});

//pagina de error
router.get('*', (req, res) => {
    res.send("Esta pagina no se encuentra revise la ruta");
});

export default router;







//pagina general indicando error
router.get('*', (req, res) => {
    res.send("Esta pagina no se encuentra revise la ruta");
})