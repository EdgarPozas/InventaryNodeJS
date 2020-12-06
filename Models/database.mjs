import mongoose from "mongoose";
mongoose.connect('mongodb://edgar:<dbpassword>@ds033639.mlab.com:33639/inventory', {useNewUrlParser: true, useUnifiedTopology: true});
export default mongoose;
