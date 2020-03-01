const express = require('express')

const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 4000
app.use(express.static('public'))
app.use(express.static('files'))


const questions = [
    { type: "question", file: "/sounds/a.m4a", key: "a", image: "/images/question.png" },
    { type: "question", file: "/sounds/b.mp3", key: "b", image: "/images/question.png" },
    { type: "question", file: "/sounds/c.mp3", key: "c", image: "/images/question.png" },
    { type: "question", file: "/sounds/d.mp3", key: "d", image: "/images/question.png" },
    { type: "question", file: "/sounds/e.mp3", key: "e", image: "/images/question.png" },
    { type: "question", file: "/sounds/f.mp3", key: "f", image: "/images/question.png" },
    { type: "question", file: "/sounds/g.mp3", key: "g", image: "/images/question.png" },
    { type: "letter", file: "/sounds/what.mp3", text: "A", showFooter: true, image: "/images/LetterA.png" },
    { type: "letter", file: "/sounds/what.mp3", text: "B", showFooter: true, image: "/images/LetterB.png" },
    { type: "letter", file: "/sounds/what.mp3", text: "C", showFooter: true, image: "/images/LetterC.png" },
    { type: "letter", file: "/sounds/what.mp3", text: "D", showFooter: true, image: "/images/LetterD.png" },
    { type: "letter", file: "/sounds/what.mp3", text: "E", showFooter: true, image: "/images/LetterE.png" },
]

app.get('/api/nextLetter', (req, res) => {


    var index = getRandomInt(questions.length);
    res.json(questions[index])


})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


app.listen(process.env.PORT || port)