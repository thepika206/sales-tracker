import { Lead } from "../models/lead.js";

function index(req,res){
  Lead.find({})
  .populate('owner')
  .then(leads => {
    res.render('leads/index', {
      leads: leads,
      title: 'Leads',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function indexMyLeads(req,res){
  Lead.find({
    owner: req.user.profile._id
  })
  .populate('owner')
  .then(leads => {
    res.render('leads/index', {
      leads: leads,
      title: 'My Leads',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req,res){
  Lead.findById(req.params.leadId)
  .populate('owner')
  .populate('comments.author')
  .then(lead => {
    // console.log(comments.author,'author???')
    res.render('leads/show',{
      lead: lead,
      title: 'Lead Details',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newLead(req,res){
  res.render('leads/new',{
    title: 'New Lead',
  })
}

function create(req,res){
  req.body.owner = req.user.profile._id
  Lead.create(req.body)
  .then(lead => {
    res.redirect(`/leads/${lead._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req,res){
  Lead.findById(req.params.leadId)
  .populate('owner')
  .then(lead => {
    res.render('leads/edit',{
      lead: lead,
      title: 'Edit Lead',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req,res){
  Lead.findById(req.params.leadId)
  .then(lead => {
    if (lead.owner.equals(req.user.profile._id)){
      const opts = { runValidators: true }
      lead.updateOne(req.body, opts)
      .then(()=>{
        res.redirect(`/leads/${req.params.leadId}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })
    } else {
      throw new Error('not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteLead(req,res){
  Lead.findById(req.params.leadId)
  .then(lead => {
    if (lead.owner.equals(req.user.profile._id)){
      Lead.findByIdAndDelete(req.params.leadId)
      .then((lead)=>{
        res.redirect(`/leads/my-leads`)
      })
        .catch(err => {
    console.log(err)
    res.redirect('/')
  })
    } else {
      throw new Error('not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createComment(req,res){
  req.body.author = req.user.profile._id
  Lead.findById(req.params.leadId)
  .then(lead =>{
    lead.comments.push(req.body)
    lead.save()
    .then(()=>{
      res.redirect(`/leads/${req.params.leadId}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  indexMyLeads,
  show,
  newLead as new,
  create,
  edit,
  update,
  deleteLead as delete,
  createComment,
}