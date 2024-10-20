export const logout = (req, res) => {
    try {
        const tokenOption = {
            httpOnly: true,
            secure: true,
            sameSite:'None'
          };
          res.clearCookie("token",tokenOption)
        
        res.json({
            message: "Logged out successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};
