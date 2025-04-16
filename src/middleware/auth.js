const authAdmin = (req, res, next) => {
    console.log("HGello")
    auth = false
    if (!auth) {
        res.status(401).send("Unauthorised")
    } else {
        next()
    }
}

module.exports = {
    authAdmin,
}

