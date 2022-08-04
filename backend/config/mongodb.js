const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_database', { useNewUrlParser: true })
.catch(e => {
    const msg = "ERRO! Falha ao conectar com o MongoDB!"
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
})