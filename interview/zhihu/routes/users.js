const router = require('koa-router')()
// const jsonwebtoken = require('jsonwebtoken')
const jwt = require('koa-jwt')
const {secret} = require('../conf/config')
const {
    find,findById,create,update,delete:del,
    login,checkOwner,listFollowing,follow,unfollow,listFollower,
    checkUserExist,followTopic,unfollowTopic,listFollowingTopics,
    listQuestions,
    listLikingAnswers,likeAnswer,unlikeAnswer,
    listDisLikingAnswers,dislikeAnswer,unDislikeAnswer,
    listCollectingAnswers,collectAnswer,unCollectAnswer
    } = require('../controllers/users')
const {checkTopicExist} = require('../controllers/topics')
const {checkAnswerExist} = require('../controllers/answers')

router.prefix('/users')

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

router.post('/',create)

router.get('/:id',findById)

router.patch('/:id',auth,checkOwner,update)

router.delete('/:id',auth,checkOwner,del)

router.post('/login',login)

router.get('/:id/following',listFollowing)

router.get('/:id/followers',listFollower)

router.get('/following/:id',auth,checkUserExist,follow)

router.delete('/following/:id',auth,checkUserExist,unfollow)

router.get('/:id/followingTopics',listFollowingTopics)

router.put('/followingTopics/:id',auth,checkTopicExist,followTopic)

router.delete('/followingTopics/:id',auth,checkTopicExist,unfollowTopic)

router.get('/:id/questions',listQuestions)

router.get('/:id/likingAnswers',listLikingAnswers)

router.put('/likingAnswers/:id',auth,checkAnswerExist,likeAnswer,unDislikeAnswer)

router.delete('/likingAnswers/:id',auth,checkAnswerExist,unlikeAnswer)
 
router.get('/:id/dislikingAnswers',listDisLikingAnswers)

router.put('/dislikingAnswers/:id',auth,checkAnswerExist,dislikeAnswer,unlikeAnswer)

router.delete('/dislikingAnswers/:id',auth,checkAnswerExist,unDislikeAnswer)

router.get('/:id/collectingAnawers',listCollectingAnswers)

router.put('/collectingAnawers/:id',auth,checkAnswerExist,collectAnswer)

router.delete('/collectingAnawers/:id',auth,checkAnswerExist,unCollectAnswer)

module.exports = router