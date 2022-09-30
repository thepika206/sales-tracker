import { Router } from 'express'

//import the controller functions===========
import * as leadCtrl from '../controllers/leads.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


//============routes==============
// GET /leads/new
router.get('/new', isLoggedIn, leadCtrl.new)

// POST /leads
router.post('/', isLoggedIn, leadCtrl.create)








export {
  router
}
