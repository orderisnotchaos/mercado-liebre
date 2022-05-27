const express = require("express");
const res = require("express/lib/response");
const path = require("path");
const app = express();

app.use( express.static ( path.join( __dirname, "./public" ) ) );

app.listen( 3000, () => {
    console.log("servidor corriendo");
} );

app.get( "/", ( req, res ) =>{
    res.sendFile( __dirname + "/views/index.html" );
} );

app.get( "/ofertas", ( req, res ) =>{
    res.sendFile( __dirname + "/views/ofertas.html" );
} );

app.get( "/tiendas", (req, res) =>{
    res.sendFile( __dirname + "/views/tiendas.html" );
} );

app.get( "/ventas", (req, res) =>{
    res.sendFile( __dirname + "/views/ventas.html" );
} );

app.get( "/ayuda", (req, res) =>{
    res.sendFile( __dirname + "/views/ayuda.html" );
} );

app.get("/register", (req,res) =>{
    res.sendFile(__dirname + "/views/register.html");
});

app.get( "/en-progreso", (req, res) =>{
    res.sendFile( __dirname + "/views/progreso.html" );
} );