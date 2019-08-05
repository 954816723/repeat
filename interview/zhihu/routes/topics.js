const router = require('koa-router')()
// const jsonwebtoken = require('jsonwebtoken')
const jwt = require('koa-jwt')
const {secret} = require('../conf/config')
const {find,findById,create,update,listTopicFollower,checkTopicExist,listQuestions} = require('../controllers/topics')

router.prefix('/topics')

// const auth = async (ctx,next) => {
//     const {authorization = ''} = ctx.request.header
//     const token = authorization.replace('Bearer ','')
//     try {
//         const user = jsonwebtoken.verify(token,SECRET)
//         ctx.state.user = user
//     } catch (err) {
//        ctx.throw(401,err.message) 
//     }
//     await next()
// }
const auth = jwt({secret})

router.get('/',find)

router.post('/',auth,create)

router.get('/:id',checkTopicExist,findById)

router.patch('/:id',auth,checkTopicExist,update)

router.get('/:id/followers',checkTopicExist,listTopicFollower)

router.get('/:id/questions',checkTopicExist,listQuestions)
 
module.exports = router