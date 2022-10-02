import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  // res.redirect('/leads/my-leads')
  res.render('index', { title: 'Sales Tracker' })
})

export {
  router
}
