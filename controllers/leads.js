import { Lead } from "../models/lead.js";

function index(req,res){
  Lead.find({})
  .populate('owner')
  .then(leads => {
    res.render('leads/index', {
      leads: leads,
    })
  }
  )
}

function show(req,res){
  console.log('show san check!!!')
  Lead.findById(req.params.leadId)
  .populate('owner')
  .then(lead => {
    res.render('leads/show',{
      lead: lead,
    })
  })
}

function newLead(req,res){
  res.render('leads/new')
}

function create(req,res){
  console.log(req.user.profile._id, "user profile!!!")
  req.body.owner = req.user.profile._id
  Lead.create(req.body)
  .then(lead => {
    res.redirect('/leads/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  show,
  newLead as new,
  create,
}