// Importando los modulos
import express from 'express'; // Express es el framework para el servidor
import bodyParser from 'body-parser'; // Permite leer datos del cuerpo (body) de las peticiones HTTP.
import cors from 'cors'; // Permite que el servidor acepte peticiones desde otros origenes (dominios).
import path from 'path'; // Modulo nativo de Node.js para manejar rutas de archivos y directorios.
import { fileURLToPath } from 'url'; // Modulo nativo de Node.js para convertir URLs a rutas de archivos.

const __filename = fileURLToPath(import.meta.url); // Obtiene la ruta completa de este archivo (server.js).
const __dirname = path.dirname(__filename); // Obtiene solo la carpeta donde esta el archivo.

// Crear aplicacion express
const app = express(); // Creamos una instancia de express (nuestro servidor).
const PORT = 3000; // Definimos el puerto donde correra el servidor.

// Middlewares
// Los middlewares son funciones que se ejecutan antes de llegar a las rutas.
app.use(cors()); // Permite peticiones desde cualquier origen (es util si el frontend se aloja en otro dominio). 

// bodyParser.json() permite leer el contenido de las funciones que envia json.
// limit:10mb indica el tamaño maximo permitido.
app.use(bodyParser.json({ limit: '10mb' }));

// express.static sirve archivos estaticos (css, js, imagenes) desde la carpeta 'public'.
app.use(express.static(path.join(__dirname, 'public')));

// Indicar la ruta principal
// Cuando alguien visite http://localhost:3000/ se le enviara el archivo index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta / analyze (recibe imagenes)
// Esta ruta recibira la imagen desde el frontend para analizarla.
app.post("/analyze", async (req, res) => {
    // extraemos la propiedad 'image' del cuerpo de la peticion
    const { image } = req.body;

    if (!image) {
        return res.status(400).json({ ok: false, message: 'No se recibio ninguna imagen' });
    }

    console.log('Imagen recibida para analizar. Tamaño:', image.length);


    // Aqui mas adelante se conectara la IA para analizar la imagen.
    // Por ahora solo se responde algo simulado
    res.json({
        ok: true,
        message: 'Imagen recibida correctamente.',
        detected: "Banana (demo)",
        calories: 89,
    });
});

// Iniciar server
// app.listen() pone el sevidor a escuchar peticiones en el puerto indicado.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});