

//This is sample route for testing
const sampleRoute = async (req,res) => {
    res.status(200).json({ message: "YAY! I am working" })
}

module.exports = {
    sampleRoute,
}