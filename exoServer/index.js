const mongoose = require('mongoose');
// const User = require('users')
mongoose.connect('mongodb://groupe6:ekwHcv6ZmRVRNBrSX5w@94.130.108.19/groupe6');

let modelUsers = mongoose.model('user', {name: String, email: String, pass: String})

// function createNewUse(user, modelUsers) {
//     const addUser = new modelUsers({
//         name: user.name,
//         email: user.email,
//         pass: user.pass
//     })
//     addUser.save().then(() => console.log('user : ' + user.name + ' add in database '))
// }
//
// let user = {
//
//     name: 'teddy2',
//     email: 'teddy@gmail.com',
//     pass: 'test'
// }
//
// createNewUse(user, modelUsers)
//
// modelUsers.find({name:'teddy'}).then(result =>{
//     console.log(result)
// })
//
// modelUsers.findOne({name:'teddy'}).then(result =>{
//     console.log({result})
// })
