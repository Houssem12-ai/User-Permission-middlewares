const express = require('express')
const router = express.Router()
const { projects } = require('../data')
const { CanViewProject,scopedProject } = require('../Permissions/project');
const { authUser } = require('../MidldleAuth')


router.get('/' , authUser,(req, res) => {
  res.json(scopedProject(req.user,projects))
  
})

router.get('/:projectId',setProject ,authProj ,(req, res) => {
  res.json(req.project)
})

function setProject(req, res, next) {

  const projectId = parseInt(req.params.projectId)
  req.project = projects.find(project => project.id === projectId)
  
  if (req.project == null) {
    res.status(404)
    return res.send('Project not found')
  }
  next()
}

function authProj(req, res, next) {
  if (!CanViewProject(req.user,req.project)) {
    res.status(401)
    return res.send("u couldn't access thi project")
  }
  next();
}

module.exports = router