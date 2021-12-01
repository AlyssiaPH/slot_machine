const mongoose = require('mongoose');
const User = require('users')
mongoose.connect('mongodb://groupe6:ekwHcv6ZmRVRNBrSX5w@94.130.108.19/groupe6');
const http = require('http')
const express = require('express')



const app = express();
const serveur = http.createServer(app)



exports.delete1 = (req, res) => {
    const id = req.params.id;
  
    deleteUSser.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };


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

