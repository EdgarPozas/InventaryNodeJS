function isLogged(req,res,next)
{
    if(req.session.user)
    {
        next();
        return;
    }
    res.redirect("/");
}
export default {isLogged}
