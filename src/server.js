import app from './app';

// This will catch any route not picked up by the above .get's, will also send users to react app.
// Will only work after running react build
app.get("*", (req, res) => {
    try {
        // The main react build file
        res.sendFile("build/index.html", {root: "./"});
    }
    catch(err) {
        if (err) {
            console.log("Error!", err);
        }
    }
});

const port = process.env.PORT || '3000'; app.listen(port); 

console.log(`Listening on port ${port}`);