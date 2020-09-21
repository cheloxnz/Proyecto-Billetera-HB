
const { Router } = require("express");
const bodyParser = require("body-parser");

//----------------------------------------------------------------------------//
//---------------------------MODULES-IMPORTS----------------------------------//
//----------------------------------------------------------------------------//
    
const userRouter = require('../routes/user');
const accountRouter = require('./accounts');
const contactRouter = require('../routes/contact')
const datesHardCore = require('../routes/datesHardCore.js');
const tranferRouter = require("../routes/transaction")

//----------------------------------------------------------------------------//
//-----------------------MIDDLEWARES-FUNCIONAL--------------------------------//
//----------------------------------------------------------------------------//

const router = Router();
router.use(bodyParser.json());

//----------------------------------------------------------------------------//
//-----------------------MIDDLEWARES-ROUTES-----------------------------------//
//----------------------------------------------------------------------------//

router.use('/users', userRouter);
router.use('/accounts', accountRouter);
router.use('/contacts', contactRouter)
router.use('/hardcore', datesHardCore);
router.use('/transfers', tranferRouter);

module.exports = router;