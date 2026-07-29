const express = require("express");
const users = require("./MOCK_DATA.json")
const fs = require('fs')
const app = express();
const PORT = 8000;
const body = {}
app.use(express.urlencoded({ extended: false }))


//ROUTES

app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

//RESTFULL

app.get("/api/users", (req, res) => {
    return res.json(users)
});

app
    .route("/api/users/:id")

    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);

        return res.json(user);
    })

    .patch((req, res) => {
        // edit user with id
        return res.json({ status: "pending" })
    })

    .delete((req, res) => {
        // delete user with id
        const target = Number(req.params.id);
        const index = users.findIndex(user => user.id === target);
        if (index === -1) {
            return res.status(404).json({ message: "user not found" })
        }
        users.splice(index, 1);
        return res.json({ status: "deleted" })

        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            return res.json({ status: "deleted" })
        })

    })

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "pending" });
    })

})






app.listen(PORT, () => console.log("server started at PORT:", PORT))