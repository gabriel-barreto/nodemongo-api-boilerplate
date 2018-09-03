const run = (req, res) => {
    res.status(200).send({
        message: "Hello World!"
    });
};

module.exports = {
    run
};
