import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

app.get('/hello', (req, res, next)=>{
 res.status('200').send('Hello World');
});

 connectToDatabase().then(()=>{
    app.listen('3000',()=>{
        console.log('app connected successfullly');
    });
}).catch((err) => {
    console.log(err.name);
})