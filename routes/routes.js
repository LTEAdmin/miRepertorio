import express from "express";
import path from "path";
import dbase from "../config/db";
const router = express.Router;
const __dirname = import.meta.dirname;

//pagina principal de ingreso de cancion
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});








//pagina general indicando error
router.get('*', (req, res) => {
    res.send("Esta pagina no se encuentra revise la ruta");
})