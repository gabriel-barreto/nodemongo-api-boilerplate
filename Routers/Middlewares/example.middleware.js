// Example Middleware
module.exports = (req, res, next) => {
    // In middlewares you can access all props from request (req) and response (res) express objects and manipulate them in many ways.

    /*
    * WRITE YOUR CODE HERE!
    */

    // Next call requested route and you can use that to push the incomming request next or change the endpoint
    next();
};
