import { Lead } from "../models/lead.js";

function newLead(req,res){
  res.render('leads/new')
}

export {
  newLead as new
}