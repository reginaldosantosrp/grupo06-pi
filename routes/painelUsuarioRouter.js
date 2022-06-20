var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');
var multer = require('multer');


var multerDiskStorage = multer.diskStorage ({
    destination: (req, file, callback)=>{
        var folder = path.join(__dirname, "../public/profile");
        callback(null, folder);
    },
    filename: (req, file, callback)=>{
        var imageName = Date.now() + file.originalname;
        callback(null,imageName);
    }
});

var upload = multer({storage: multerDiskStorage});




//CONTROLLERS
var PainelUsuarioController = require("../controllers/PainelUsuarioController");


//ROTAS

router.get('/', upload.single('foto'), PainelUsuarioController.index);
router.get('/:id', PainelUsuarioController.dadosCliente);




module.exports = router;