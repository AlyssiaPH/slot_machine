const express = require('http')
const {delete1} = require('delete1')

const router = express.Router()

export default router

router.get('/api/users/delete',delete1)