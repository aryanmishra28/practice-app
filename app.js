const express = require('express');
const app = express();
const path= require('path');
const userModel = require('./models/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/read', (req, res) => {
    res.render("read");
});

app.post('/create', async (req, res) => {
   let { name, email, image } = req.body;

    let createdUser = await userModel.create({
         name,
         email,
         image
})
    res.send(createdUser);
})

app.listen(3000);





























// Uncomment the following code to use Mongoose for CRUD operations


// const express = require('express');
// const app= express();

// const userModel = require('./usermodel');

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/create',async (req, res) => {
//    let createduser = await userModel.create({
//         name: 'John Doe 1',
//         username: 'john',
//         email: 'john@gmail.com'
// }) //make changes here to create a new user

//     res.send(createduser);
// })


// app.get('/update',async (req, res) => {
//    let updateduser = await userModel.findOneAndUpdate({username: 'john'}, {name: 'John doe again'}, {new: true});
//    res.send(updateduser);
// })

// app.get('/read', async (req, res) => {
//     let users = await userModel.find();
//     res.send(users);
// }) // Read all users

// //for reading a specific user, you can use the following code
// //app.get('/read', async (req, res) => {
// //     let users = await userModel.find({username: 'john'});
// //     res.send(users);
// // }) //find gives an array of users
// //findOne gives a object of a user

// app.get('/delete', async (req, res) => {
//     let deleteduser = await userModel.findOneAndDelete({username: 'john'});
//     res.send(deleteduser);
// })// Delete a user

// app.listen(3000);