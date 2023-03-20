const { MongoClient} = require("mongodb");
const {faker} = require ('@faker-js/faker');
const uri = "mongodb+srv://CarolinaCr:carolina96@cluster0.mubdllx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const dataBase = client.db('Sena');

// ------------------INSERT ONE USUARIOS-----------------------------

    // for (let i=0; i<100; i++) {
    //     const users = {
    //     name:faker.name.firstName(),
    //     lastName:faker.name.lastName(),
    //     age:faker.datatype.number({min:15,max:60}),
    //     email:faker.internet.email(),
    //     cellPhone: faker.phone.number(),
    //     };
    //     const result = await createDocumentsUsers(dataBase, 'Usuarios', users);
// }
        // console.log('Usuarios agregados con éxito');

// ----------------------INSERT ONE COMENTARIOS--------------------------------

    // for (let i=0; i<100; i++) {
    //     const coments = {
    //         numPost:faker.datatype.number({min:1,max:20}),
    //         name:faker.name.firstName(),
    //         lastName:faker.name.lastName(),
    //         email:faker.internet.email(),
    //         body:faker.lorem.sentences(3) 
    //     };
    //     const result = await createDocumentsComents(dataBase, 'Comentarios', coments);
    // }
    // console.log('Comentarios agregados con éxito');

// ------------------INSERT ONE FOTOS-----------------------------

// for (let i=0; i<100; i++) {
//     const photos = {
//         numAlbum:faker.datatype.number({min:1,max:20}),
//         title:faker.music.songName(),
//         description:faker.lorem.text(),
//         author:faker.name.fullName(),
//         year:faker.datatype.number({min:1996,max:2023}) 
//     };
//     const result = await createDocumentsPhotos(dataBase, 'Fotos', photos);
// }
// console.log('Fotos agregadas con éxito');

// ------------------INSERT MANY USUARIOS-----------------------------

//     for (let i=0; i<30; i++) {
//         const users = [{
//             name:faker.name.firstName(),
//             lastName:faker.name.lastName(),
//             age:faker.datatype.number({min:15,max:60}),
//             email:faker.internet.email(),
//             cellPhone: faker.phone.number(),
//         },
//         {
//             name:faker.name.firstName(),
//             lastName:faker.name.lastName(),
//             age:faker.datatype.number({min:15,max:60}),
//             email:faker.internet.email(),
//             cellPhone: faker.phone.number(),
//         },
//         {
//             name:faker.name.firstName(),
//             lastName:faker.name.lastName(),
//             age:faker.datatype.number({min:15,max:60}),
//             email:faker.internet.email(),
//             cellPhone: faker.phone.number(),
//         }
//         ];
//         const result = await agregarDocumentsUsers(dataBase, 'Usuarios', users);
// }
//         console.log('Usuarios agregados con éxito');

// ------------------INSERT MANY COMENTARIOS-----------------------------

// for (let i=0; i<100; i++) {
//         const coments = [{
//             numPost:faker.datatype.number({min:1,max:20}),
//             name:faker.name.firstName(),
//             lastName:faker.name.lastName(),
//             email:faker.internet.email(),
//             body:faker.lorem.sentences(3) 
//         },
//         {
//             numPost:faker.datatype.number({min:1,max:20}),
//             name:faker.name.firstName(),
//             lastName:faker.name.lastName(),
//             email:faker.internet.email(),
//             body:faker.lorem.sentences(3) 
//         },
//         {
//             numPost:faker.datatype.number({min:1,max:20}),
//             name:faker.name.firstName(),
//             lastName:faker.name.lastName(),
//             email:faker.internet.email(),
//             body:faker.lorem.sentences(3) 
//         }
//         ];
//         const result = await agregarDocumentsComents(dataBase, 'Comentarios', coments);
//     }
//     console.log('Comentarios agregados con éxito');

// ------------------INSERT MANY FOTOS-----------------------------

// for (let i=0; i<45; i++) {
//     const photos = [{
//         numAlbum:faker.datatype.number({min:1,max:20}),
//         title:faker.music.songName(),
//         description:faker.lorem.text(),
//         author:faker.name.fullName(),
//         year:faker.datatype.number({min:1986,max:2018}) 
//     },
//     {
//         numAlbum:faker.datatype.number({min:1,max:20}),
//         title:faker.music.songName(),
//         description:faker.lorem.text(),
//         author:faker.name.fullName(),
//         year:faker.datatype.number({min:1986,max:2018}) 
//     },
//     {
//         numAlbum:faker.datatype.number({min:1,max:20}),
//         title:faker.music.songName(),
//         description:faker.lorem.text(),
//         author:faker.name.fullName(),
//         year:faker.datatype.number({min:1986,max:2018}) 
//     }
// ];
//     const result = await agregarDocumentsPhotos(dataBase, 'Fotos', photos);
// }
// console.log('Fotos agregadas con éxito');

// -------------------------FIND---------------------------------------

    // await encontrarFotos(dataBase, 'Fotos');

// -----------------------------FIND ONE------------------------------------

    // await encontrarUsuario(dataBase, 'Usuarios', "Prince");

// -----------------------------UPDAE ONE SIN UPSERT------------------------------------

    // await encontrarUsuario(dataBase, 'Usuarios', "Prince");
    // await actualizarUsuario(dataBase, 'Usuarios', 'Prince', {
    //     name: 'Prince',
    //     lastName: 'Mueller',
    //     age: 65,
    //     email: 'Prince4@gmail.com',
    //     cellPhone: '301 301 59 32' 
    // });
    // await encontrarUsuario(dataBase, 'Usuarios', "Prince");

// -------------------------UPDATE ONE CON UPSERT------------------------------------

    // await encontrarUsuario(dataBase, 'Usuarios', "Lorena");
    // await actualizarUsuarioUpsert(dataBase, 'Usuarios', "Lorena", {
    //         name: "Lorena",
    //         lastName: "Castro",
    //         age: 28,
    //         email: "ccastro599@gmail.com", 
    //         cellPhone: "312 567 3429"
    //     }
    //     );
    //     await encontrarUsuario(dataBase, 'Usuarios', "Lorena");

// -----------------------------UPDATE MANY SIN UPSERT------------------------------------

    // await encontrarFotos(dataBase, 'Fotos');
    // await actualizarFotosMany(dataBase, 'Fotos', 5, {
    //         year: 1955
    //     });    
    // await encontrarFotos(dataBase, 'Fotos');

// --------------------------------UPDATE MANY CON UPSERT-----------------------------

    // await encontrarFotos(dataBase, 'Fotos');
    // await actualizarFotosManyUpsert(dataBase, 'Fotos', 45, {
    //     title: "La Gioconda",
    //     description: "El retrato de Lisa Gherardini, esposa de Francesco del Giocondo, más conocido como La Gioconda o Monna Lisa, es una obra pictórica del polímata renacentista italiano Leonardo da Vinci. Fue adquirida por el rey Francisco I de Francia a comienzos del siglo XVI y desde entonces es propiedad del Estado francés",
    //     author:"Leonardo da Vinci",
    //     year: 1503
    // })
    // await encontrarFotos(dataBase, 'Fotos');
  
// -------------------DELETE ONE----------------------------------------------
    
    // await encontrarUsuario(dataBase, 'Usuarios', "Jayde");
    // await DeleteUsuario(dataBase, 'Usuarios');
    // await encontrarUsuario(dataBase, 'Usuarios', "Jayde");

  
// -------------------DELETE MANY----------------------------------------------
    
    // await encontrarFotos(dataBase, 'Fotos');
    // await DeleteFotosMany(dataBase, 'Fotos');
    // await encontrarFotos(dataBase, 'Fotos');

// ----------------------------LOOKUP-----------------------------------

    // const result = lookup(client)
    // result.forEach(element=>{
    //     console.log(element)
    // });
// -----------------------------PIPELINES------------------------------------    

    // const result = await pipelinesFotos(client)
    //     result.forEach(e=>{
    //         console.log(e)
    //     });
  
    // const result = await pipelinesUsuarios(client)
    //     result.forEach(e=>{
    //         console.log(e)
    //     });

// -------------------------------DROP COLLECTION-------------------------------

    // const result = await dropCollection(client);

// ----------------------------------DROP DATABASE----------------------------------

        // const result = await dropDataBase(client);
 

  } finally {
    // await client.close();
  }
  }

run().catch(console.dir);

// -------------- INSERT ONE-----------------------------

const createDocumentsUsers = (db,colecion,users)=>{
    try{
        db.collection(colecion).insertOne(users);
    }catch (error){
        console.log(error);
    }
};

const createDocumentsComents = (db,colecion,users)=>{
    try{
        db.collection(colecion).insertOne(users);
    }catch (error){
        console.log(error);
    }
};

const createDocumentsPhotos = (db,colecion,users)=>{
    try{
        db.collection(colecion).insertOne(users);
    }catch (error){
        console.log(error);
    }
};

// ------------------INSERT MANTY-------------------------

const agregarDocumentsUsers = (db,colecion,users)=>{
    try{
        db.collection(colecion).insertMany(users);
    }catch (error){
        console.log(error);
    }
};

const agregarDocumentsComents = (db,colecion,users)=>{
    try{
        db.collection(colecion).insertMany(users);
    }catch (error){
        console.log(error);
    }
};

const agregarDocumentsPhotos = (db,colecion,users)=>{
    try{
        db.collection(colecion).insertMany(users);
    }catch (error){
        console.log(error);
    }
};

// ------------------FIND-------------------------

async function encontrarFotos(db, colecion){
        const result = await db.collection(colecion).find({numAlbum:{$eq:45}});
        const results = await result.toArray();
        if(results.length>0){
          console.log("Las fotos que cumplen los criterios son:")
          results.forEach((fotos) => {
            console.log(`Nombre foto: ${fotos.title} con _id: ${fotos._id}`);
            console.log(`Nro. album: ${fotos.numAlbum}`);
            console.log(`Autor: ${fotos.author}`);
            console.log(`Año: ${fotos.year}`);
          }
          );
        }else{
            console.log("No se encontraron fotos \n")
        }
  }

// ----------------------FIND ONE---------------------------

async function encontrarUsuario(db, colecion, nombre){
    const result = await db.collection(colecion).findOne({name:nombre});
    if(result){
        console.log(`Se encontró el usuario: ${nombre}`);
        console.log(result);
    }else{
        console.log(`No se encontró el usuario: ${nombre}`);
    }
}

// ----------------------UPDATE ONE SIN UPSERT---------------------------

async function actualizarUsuario(db, colecion, userName, userUpdate){
    const result = await db.collection(colecion).updateOne({name:userName},{$set:userUpdate});
      console.log(`Se actualizaron los datos de ${userName}`);
  }
// ----------------------UPDATE ONE CON UPSERT---------------------------

async function actualizarUsuarioUpsert(db, colecion, userName, userUpdate){
    const result = await db.collection(colecion).updateOne({name:userName},{$set:userUpdate},{upsert:true});
      console.log(`Se encontró un nuevo usuario: ${userName}`);
      console.log(result);
  }

// ----------------------UPDATE MANY SIN UPSERT---------------------------

async function actualizarFotosMany(db, colecion, nroAlbum, UpdateFoto){
    const result = await db.collection(colecion).updateMany({numAlbum:{$eq:nroAlbum}},{$set:UpdateFoto});
    console.log("Se actualizaron las fotos");
}

// ----------------------UPDATE MANY CON UPSERT---------------------------

async function actualizarFotosManyUpsert(db, colecion, nroAlbum, UpdateFoto){
    const result = await db.collection(colecion).updateMany({numAlbum:{$eq:nroAlbum}},{$set:UpdateFoto},{upsert:true});
    console.log("Se encontró un nuevo álbum");
    console.log(result);
}
        
//   ----------------------------DELETE ONE-----------------------------------

const DeleteUsuario = (db,colecion)=>{
try {
    db.collection(colecion).deleteOne( { "name" : "Jayde" } );
 } catch (e) {
    print(e);
 }
}

// ----------------------------------DELETE MANY------------------------------------

const DeleteFotosMany = (db,colecion)=>{
try {
    db.collection(colecion).deleteMany( { "numAlbum" : 12 } );
    console.log("Se eliminaron las fotos con éxito! \n")
 } catch (e) {
    print (e);
 }
}

// ----------------------------------LOOKUP------------------------------------

const lookup = (client)=>{
    try{
    const result= client.db("Sena").collection("Usuarios").aggregate([
            {
            $lookup:{
                from: "Comentarios",
                localField: "name",
                foreignField: "name",
                as: "coments"
            }},
            {$match: {$expr: {$gte: [{ $size:`$${"coments"}` }, 1]}}},
            {$project:{_id:0,comentario:"$coments.body",name:1,lastName:1,age:1,email:1, cellPhone:1}}
        ])
        return result
    }catch (error){
        console.log(error)
    }
}

// ----------------------------------PIPELINES------------------------------------

const pipelinesFotos = (client)=>{
    try{
       const result = client.db("Sena").collection("Fotos").aggregate([
        {$match: {numAlbum: {$eq:1}}},
        {$project:{_id:0, numAlbum:1, year:1, title:1}}, 
       {$sort: {year: 1}},
       {$limit: 3}
    ])
    return result
    }catch(error){
        console.log(error)
    }
}   

const pipelinesUsuarios = (client)=>{
    try{
       const result = client.db("Sena").collection("Usuarios").aggregate([
        {$match: {age: {$gte:30}}},
        {$project:{_id:0, name:1, lastName:1, age:1, cellPhone:1}}, 
       {$sort: {name: -1}},
       {$limit: 5}
    ])
    return result
    }catch(error){
        console.log(error)
    }
}   
// ----------------------------------DROP COLLECITION------------------------------------

const dropCollection = (client)=>{
    try{
        const result =  client.db("Sena").collection("Fotos").drop()
        console.log("Se eliminó con éxito la colección!")
        return result
    }catch(error){
        console.log(error)
    }
}

// ----------------------------------DROP COLLECITION------------------------------------

const dropDataBase = (client)=>{
    try{
        const result =  client.db("Sena").dropDatabase()
        console.log("Se eliminó con éxito la base de datos")
        return result
    }catch(error){
        console.log(error)
    }
}
