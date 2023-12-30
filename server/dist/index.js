import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
connectToDatabase()
    .then(() => {
    app.listen("3001", () => {
        console.log("app connected successfullly");
    });
})
    .catch((err) => {
    console.log(err.message);
});
//# sourceMappingURL=index.js.map