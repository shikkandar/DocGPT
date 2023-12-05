class chat {
    static getUserMessage = (req,res) => {
        console.log(req.body.usermessage);
         return req.body.usermessage;
    };
}
export default chat;