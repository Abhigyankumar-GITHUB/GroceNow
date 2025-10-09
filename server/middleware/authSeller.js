import jwt  from "jsonwebtoken";

const authSeller =async (req , res , next)=>{
    const {sellerToken} = req.cookies;

    if(!sellerToken){
        return res.json({success :false, message :'Not Authorized'});
    }

     try {
            const verified = jwt.verify(sellerToken, process.env.JWT_SECRET);
            req.seller = verified;
            next();
        } catch (error) {
            res.status(400).json({ success: false, message: 'Invalid Token' });
        }
}

export default authSeller;


