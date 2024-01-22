const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// http://localhost:3001/authenticate
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  console.log(username)
  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "a5503e53-48d4-49fb-bafa-d51fa33116a9"}}
    )
    return res.status(r.status).json(r.data)
  }catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001, function(){
  console.log('Server running on PORT 3001')
});