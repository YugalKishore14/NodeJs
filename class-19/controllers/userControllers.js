const getUser = (req, res) => {
    res.send({
        status: true,
        message: "Hello Developer"
    })
}

module.exports = { getUser }