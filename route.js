const express = require('express')

const router = express.Router()


const{edgets,edget,edput,edpost,eddelete}= require('./controlrouter')

router.route('/').get(edgets).post(edpost)
router.route('/:id').get(edget).put(edput).delete(eddelete)

module.exports =router
