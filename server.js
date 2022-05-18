const { faker } = require('@faker-js/faker');

//Importando express
const express = require('express'); 

const app = express(); //inicializando express

//Creando objetos 
const objetoUsuario = () => ({
    _id: faker.datatype.uuid(),
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(), 
    telefono: faker.phone.imei(),
    email: faker.internet.email(),
    password: faker.internet.password()
});

const objetoEmpresa = () => ({
    _id:faker.datatype.uuid(),
    nombre:faker.company.companyName(),
    direccion: {
        calle:faker.address.streetAddress(),
        ciudad: faker.address.city(),
        estado:faker.address.state(),
        cp: faker.address.zipCode(),
        País:faker.address.country()
    }

})

//CREAR UNA RUTA QUE ME REGRESE INFORMACION ALEAOTRIA DE UN USUARIO o ya sea UNA EMPRESA 

app.get("/api/users/new",(req,res) =>{
    const nuevoUsuario = objetoUsuario();
    res.json (nuevoUsuario);
});

app.get("/api/companies/new",(req,res)=>{
    const nuevaEmpresa = objetoEmpresa();
    res.json(nuevaEmpresa);
});

app.get("/api/users/company", (req,res) => {
    const nuevoUsuario = objetoUsuario();
    const nuevaEmpresa = objetoEmpresa();
    res.json({objetoUsuario:nuevoUsuario,objetoEmpresa:nuevaEmpresa});


});
app.listen(8000, () => console.log("Servidor corriendo") ); //Ejecutando/Levantando el server