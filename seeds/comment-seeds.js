const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        favorite_id: 1,
        comment_text: "Is anyone surprised China is trying to cover this all up.!"
    },
 
    {
        user_id: 2,
        favorite_id: 1,
        comment_text: "If, like most ppl, you already have a coton tote bag at home, use that!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;