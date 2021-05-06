function authUser(req, res, next) {
    if (req.user == null) { // u see here if you put == it doesn't work -> the importance of learning and understanding JS concepts 
        res.status(401)
        return res.send("u need to sign in before ")
    } else {
        console.log("jawek bhy");
    }
    next()
}

function authRole(role) {
    return (req, res, next) => {
        if (req.user.role != role) {
            res.status(401)
            return res.send("u have to be the admin to enter here be careful");
        }
        next()
    }
}

module.exports = { authUser, authRole  };

/* const UserId = req.body.UserId;
    if (UserId) {
        req.user = res
    } */