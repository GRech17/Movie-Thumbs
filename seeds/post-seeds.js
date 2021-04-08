let { Post } = require('../models');

let postData = [
    {
        post_content: "Here's how plastic bags impact the environment!",
        user_id: 1,
        movie_id: 700995
    },
  
]

let seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;