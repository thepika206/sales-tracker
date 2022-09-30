import { Lead } from "../models/lead.js";

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
  newLead as new,
  create,
}