import { Router } from 'express'

//import the controller functions===========
import * as leadCtrl from '../controllers/leads.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


//============routes==============

// GET /leads
router.get('/', isLoggedIn, leadCtrl.index)

// GET /leads/new
router.get('/new', isLoggedIn, leadCtrl.new)

// GET /leads/:leadId
router.get('/:leadId', isLoggedIn, leadCtrl.show)

// GET /leads/:leadId/edit
router.get('/:leadId/edit', isLoggedIn, leadCtrl.edit)

// POST /leads
router.post('/', isLoggedIn, leadCtrl.create)

// PUT /leads/:leadId
router.put('/:leadId', isLoggedIn, leadCtrl.update)

// DELETE /leads/:leadId
router.delete('/:leadId', isLoggedIn, leadCtrl.delete)

// ADD COMMENTS POST /lead/:leadId/comments
router.post('/:leadId/comments', isLoggedIn, leadCtrl.createComment)


export {
  router
}
