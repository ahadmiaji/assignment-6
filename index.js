const app = require("./app.js");

const port = 3300;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
});