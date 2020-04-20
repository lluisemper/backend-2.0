import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const Post = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
    },
    postId: {
        type: Sequelize.INTEGER
    }
});

export default Post;