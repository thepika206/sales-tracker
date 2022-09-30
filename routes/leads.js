import { Router } from 'express'

//import the controller functions===========
import * as leadCtrl from '../controllers/leads.js'

const router = Router()


//============routes==============
// leads/new
router.get('/new', leadCtrl.new)










export {
  router
}
