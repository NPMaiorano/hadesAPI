const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


const hadesGAME = {
    
        'hades':{
            'name': 'hades',
            'god of': 'Death and ruler of the underworld',
            'son of': 'Cronus & Rhea',
        },
        'zagreus':{
            'name': 'zagreus',
            'god of': 'hunting & rebirth',
            'son of': 'Hades & Persephonie',
        },
        'nyx':{
            'name': 'nyx',
            'goddess of': 'the night itself, she is sometimes called the Mother Night',
            'daughter of': 'Chaos',
        },
        'unknown':{
            'name': 'unknown',
            'goddess of': 'unknown',
            'son of': 'unknown',
        }
    
}

app.get('/', (request, response)  =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response)=>{
    response.json(hadesGAME)      
})

app.get('/api/:name', (request, response)=>{
    const character = request.params.name.toLowerCase()
    console.log(character)
    if( hadesGAME[request.params.name] ){
        response.json(hadesGAME[character])
    }else{
        response.json(hadesGAME['unknown'])
    }
   
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`This server is running on port ${PORT}!`)
})