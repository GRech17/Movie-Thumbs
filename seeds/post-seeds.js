const { Post } = require('../models');

const postData = [
   
    {
        title: "World Health Organization Investigators Tied to China?!",
        post_content: "World Health Organization investigators who looked at the origin of the coronavirus in Wuhan, China may have a conflict of interest. Joe Biden China relations are under scrutiny as the US economy and China economy are on the line. And China and Taiwan battle over pineapples. That and more on this week's China news headlines.",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;