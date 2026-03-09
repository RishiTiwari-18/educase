const jwt = require("jsonwebtoken")

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies?.token

        if(!token){
            return res.status(401).json({
                success: false,
                message: "No token provided",
            });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decode.id

        next()

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        }); 
    }
}

module.exports = isAuthenticated