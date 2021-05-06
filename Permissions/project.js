const {ROLE} = require('../data')

function CanViewProject(user, proj) {
    //console.log(user.role) the admin role is altight !
    ///console.log(ROLE.ADMIN)
    return (
        user.role == ROLE.ADMIN || proj.userId == user.id
    );
}

function scopedProject(user, projects) {
    if (user.role == ROLE.ADMIN) {
        return projects
    } 
        return projects.filter(elem => elem.userId == user.id)
}

module.exports = { CanViewProject, scopedProject }