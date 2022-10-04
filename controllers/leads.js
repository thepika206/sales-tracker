import { Lead } from "../models/lead.js";
import { Profile } from "../models/profile.js";

function index(req,res){
  Lead.find({}).sort({name: 1})
  .populate('owner')
  .then(leads => {
    res.render('leads/index', {
      leads: leads,
      title: 'Leads',
      subtitle: '',
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
  .sort({name: 1})
  .populate('owner')
  .then(leads => {
    res.render('leads/index', {
      leads: leads,
      title: 'Leads',
      subtitle: 'My Leads (All)',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function indexMyLeadsOpen(req,res){
  Lead.find({
    owner: req.user.profile._id,
    status: ['New','Working',]
  })
  .sort({name: 1})
  .populate('owner')
  .then(leads => {
    res.render('leads/index', {
      leads: leads,
      title: 'Leads',
      subtitle: 'My Leads (Open)'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function indexMyLeadsClosed(req,res){
  Lead.find({
    owner: req.user.profile._id,
    status: ['Closed',]
  })
  .sort({name: 1})
  .populate('owner')
  .then(leads => {
    res.render('leads/index', {
      leads: leads,
      title: 'Leads',
      subtitle: 'My Leads (Closed)'
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
    res.render('leads/show',{
      lead: lead,
      title: `Lead Details for ${lead.name}`,
      commentsCount: lead.comments.length,
      leadValue: numberWithCommas(lead.value)
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
    Profile.find({})
    .then(profiles => {
      res.render('leads/edit',{
        lead: lead,
        title: `Edit ${lead.name}`,
        profiles: profiles,
      })
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

function update(req,res){
  Lead.findById(req.params.leadId)
  .then(lead => {
    if (lead.owner.equals(req.user.profile._id)){
      const opts = { runValidators: true }
      lead.updateOne(req.body, opts)
      .then(()=>{
        res.redirect(`/leads/my-leads-open`)
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

function reportSales(req,res){
  Lead.find({
    owner: req.user.profile._id,
    value: { $gt:0 },
    status: 'Closed'
  })
  .then(leads => {
    let totalValue = 0
    leads.forEach((lead) => {
      totalValue += lead.value
    })
    res.render('leads/sales', {
      title: 'My Sales',
      subtitle: 'My Closed Leads with Value greater than 0',
      totalLeads: leads.length,
      totalValue: numberWithCommas(totalValue),
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

//Utility functions
function numberWithCommas(x) {
  return (x > 0) ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
}
export {
  index,
  indexMyLeads,
  indexMyLeadsOpen,
  indexMyLeadsClosed,
  show,
  newLead as new,
  create,
  edit,
  update,
  deleteLead as delete,
  createComment,
  reportSales
}