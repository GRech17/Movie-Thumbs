const { Comment } = require('../models');

const commentData = [
    {
        post_content: "Here's how plastic bags impact the environment!",
        user_id: 1,
        movie_id: 784447,
        title: "The Wrong Fiancé",
        created_at: '2021-01-01 10:10:10'
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;