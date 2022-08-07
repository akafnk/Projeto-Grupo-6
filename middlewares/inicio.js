const fs = require ("fs");

function inicioSite (req,res,next) {
    fs.appendFileSync("caminho.txt", "Acesso ao site: " + req.url )

    next()
}

module.exports = inicioSite;