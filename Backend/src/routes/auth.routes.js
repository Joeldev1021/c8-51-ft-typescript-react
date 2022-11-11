const { Router } = require('express')
const router = Router()

router.get('/signup', (req, res) => {
    res.send('sign up user')
})

router.get('/signin', (req, res) => {
    res.send('sign in user')
})

module.exports = router
