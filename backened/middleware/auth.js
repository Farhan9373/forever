import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    try {
        // Fetch token from cookies
        const token = req.cookies?.token;
        console.log("Token from cookies:", token);

        // Check if token exists
        if (!token) {
            return res.status(401).json({
                message: "Please Login...!",
                error: true,
                success: false
            });
        }

        // Verify the token
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (err) {
                console.log("JWT verification error:", err);
                return res.status(403).json({
                    message: "Invalid or expired token",
                    error: true,
                    success: false
                });
            }

            console.log("Decoded token:", decoded);

            // Check if `tokendata` and `_id` exist in the decoded token
            if (decoded?.tokendata?._id) {
                req.userId = decoded.tokendata._id;
                console.log("User ID set in req.userId:", req.userId);
            } else {
                console.log("No valid _id found in token");
                return res.status(403).json({
                    message: "Token does not contain valid user data",
                    error: true,
                    success: false
                });
            }

            // Proceed to the next middleware or route handler
            next();
        });

    } catch (err) {
        // Handle unexpected errors
        return res.status(400).json({
            message: err.message || "Something went wrong",
            error: true,
            success: false
        });
    }
};

