let fs = require('fs')
const file = './csv_files/euromillions.csv';

// program to get the file extension

function getNameFile(filename){
    // get file extension
    console.log(filename.split('/'))
    return filename.split('/')[2]
}

function getExtention(name){
    let data = true
    if(name.split('.').pop() !== 'csv'){
        data = false
    }
    return data
}

if(getExtention(getNameFile(file))){
    console.log('It\'s good extension')
}else{
    console.log('It\' bad extension')
}

// passing the filename
const name = getNameFile(file);
console.log(name);

function cleanUpData(data){
    let newData = []
    for (let i = 0; i < 47; i++) {
        newData.push(data[i])
    }
    return newData
}

function convertObjectFormat(data,dataTitle){

    let dataObjet = []

    for (let j = 0; j < data.length; j++) {
        
        for (let i = 0; i < dataTitle.length; i++) {


        }
    }


}

fs.readFile(file,'utf-8',(err ,data ) =>{
    if(err){
        console.log(err)
    }else {
        console.log(data)
        let convertTab = data.split(';')
    }
})



