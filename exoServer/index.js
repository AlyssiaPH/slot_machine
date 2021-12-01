const mongoose = require('mongoose');
const User = require('users')
mongoose.connect('mongodb://groupe6:ekwHcv6ZmRVRNBrSX5w@94.130.108.19/groupe6');

function createDB(){
    return mongoose.model('users',{
        email : String,
        pass : String
    })
}

function createNewUse(user){
    user = new User()
    mongoose.model('user',{
        id : user._id,
        email: user._email,
        pass: user._pass
    })
}


const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));