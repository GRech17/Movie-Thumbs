const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        favorite_id: 1,
        movie_id: 476292,
        comment_text: "Is anyone surprised China is trying to cover this all up.!",
        created_at: "2010-01-01 10:10:10"
    },
 
    {
        user_id: 2,
        favorite_id: 1,
        movie_id: 476292,
        comment_text: "If, like most ppl, you already have a coton tote bag at home, use that!",
        created_at: "2010-01-01 10:10:10"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;