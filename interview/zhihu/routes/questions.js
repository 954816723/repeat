const router = require('koa-router')()
// const jsonwebtoken = require('jsonwebtoken')
const jwt = require('koa-jwt')
const {secret} = require('../conf/config')
const {find,findById,create,update,delete:del,checkQuestionExist,checkQuestioner} = require('../controllers/questions')

router.prefix('/questions')

const auth = jwt({secret})

router.get('/',find)

router.post('/',auth,create)

router.get('/:id',checkQuestionExist,findById)

router.patch('/:id',auth,checkQuestionExist,checkQuestioner,update)

router.delete('/:id',auth,checkQuestionExist,checkQuestioner,del)

module.exports = router