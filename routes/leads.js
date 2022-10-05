import { Router } from 'express'

//import the controller functions===========
import * as leadCtrl from '../controllers/leads.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


//============routes==============


// GET /leads
router.get('/', isLoggedIn, leadCtrl.index)

// GET /leads/my-leads
router.get('/my-leads', isLoggedIn, leadCtrl.indexMyLeads)

// GET /leads/my-leads-open
router.get('/my-leads-open', isLoggedIn, leadCtrl.indexMyLeadsOpen)

// GET /leads/my-leads-closed
router.get('/my-leads-closed', isLoggedIn, leadCtrl.indexMyLeadsClosed)

// GET /leads/sales
router.get('/my-sales', isLoggedIn, leadCtrl.reportMySales)

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
