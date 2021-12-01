const mongoose = require('mongoose');

mongoose.connect('mongodb://groupe6:ekwHcv6ZmRVRNBrSX5w@94.130.108.19/groupe6');
let modelUsers = mongoose.model('user', {name: String, email: String, pass: String})
const GETISNULL = 'emailNull'
const GETEXIST = 'emailExist'

async function getFindOneElementByArguments(argumentMethode,arguments){
    let data = await modelUsers.findOne({email: arguments})
    switch (argumentMethode){
        case GETISNULL:
            return data === null;
        case GETEXIST:
            return data !== null;
        default:
            break
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};


async function createUserInstance(user){
    if(validateEmail(user.email)){
        if(await getFindOneElementByArguments(GETISNULL,user.email)){
            const addUser = new modelUsers({
                name: user.name,
                email: user.email,
                pass: user.pass
            })
            await addUser.save()
            return 1
        }else{
            return -2
        }
    }else{
        return -1
    }
}


async function getByEmail(user){
    if(validateEmail(user.email)){
        if(await getFindOneElementByArguments(GETEXIST,user.email)){
            modelUsers.find({email: user.email}).then(result =>{
                console.log(result)
            })
            // if(tab[0].email === user.email && tab[0].pass === user.pass){
            //     return tab[0]
            // }else {
            //     return -3
            // }
        }else{
            return -2
        }
    }else{
        return - 1
    }
}






let user = {
    name: 'teddy2',
    email: 'teddy@gmail.com',
    pass: 'test'
}

// createUserInstance(user).then(result =>{
//     console.log(result)
// })

getByEmail(user).then(result =>{
    console.log(result)
})

