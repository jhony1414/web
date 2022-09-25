import express from 'express'
import { engine } from '@paroi/express-edge'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import db from './config/db.js'
import indexRoutes from './routes/indexRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT || 3000
import { dirname } from 'path'; //Solucion para dirname con modulos ES6
import { fileURLToPath } from 'url'; //Solucion para dirname con modulos ES6
const __dirname = dirname(fileURLToPath(import.meta.url)); //Solucion para dirname con modulos ES6

//Template engine Edge para las vistas
app.use(engine);

//Conexion a la base de datos
try {
    await db.authenticate()
    db.sync()
    console.log('Conexión correcta a la base de datos')
} catch (error) {
    console.log(`${error}`)
}

//Leer datos de formularios
app.use(express.urlencoded({ extended: true })) // Utilizar esto en vez de body-parser

//Habilitar cookie-parser
app.use( cookieParser() )

//Habilitar CSRF
app.use( csrf( { cookie: true } ) )

app.use(express.json())

//Archivos estaticos
app.use(express.static('public'))

/* // Vistas

app.set('views', './views') */
// Carpeta de vistas
app.set( 'views', __dirname + '/views')

//Rutas
app.use('/', indexRoutes)
app.use('/auth/', adminRoutes)



app.listen( port, ()=>{
    console.log(`Servidor en: http://127.0.0.1:${ port }`)
})
