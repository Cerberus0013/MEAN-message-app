const express = require('express')
const bodyParser = require()
const app = express('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use((req,res,next) => {
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.setHeader(
  "Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
);
  next()
})

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post)
  res.status(201).json({
    message: 'Post added success'
  })
});


app.get('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: '1',
      title: "hello kitty",
      content: "rainbow colors from server",
    },
    {
      id: '2',
      title: "hello kitty",
      content: "super 2 colors from server",
    },
  ];
  res.status(200).json({
    message: 'posts fetched',
    posts:posts
  })

});

module.exports = app
