function authUser(req, res, next) {
    if (req.user === null) { // u see here if you put == it doesn't work -> the importance of learning and understanding JS concepts 
        res.status(401)
        return res.send("u don't have the access here ") 
    }
    next()
}

  function authAdmin(req, res, nex) {
     if (req.user !== "ADMIN") {
         res.status(401)
         return res.send("u have to be the admin to enter here be careful");
    }
}  

module.exports = { authUser };

/* const UserId = req.body.UserId;
    if (UserId) {
        req.user = res
    } */