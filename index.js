const express = require('express')

const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 4000
app.use(express.static('public'))
app.use(express.static('files'))
app.get('/', (req, res) => res.send('Hello World!'))

const questions = [
    {type:"question",file:"/sounds/a.m4a",key:"a",image:"/images/question.png"},
    {type:"letter",file:"/sounds/what.mp3",text:"A",showFooter:true,image:"/images/LetterA.png"},
]

app.get('/api/nextLetter',(req,res)=>{

    
    var index = getRandomInt(questions.length);    
    res.json(questions[index])
    

})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


app.listen(port, () => console.log(`Example app listening on port ${port}!`))