import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

import Post from './Posts'

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,

    },
    password: {
        type: Sequelize.TEXT
    }
},{
    timestamps: false
});

User.hasMany(Post, { foreignKey: 'postId', sourceKey: 'id'})
Post.belongsTo(User, { foreignKey: 'postId', sourceKey: 'id'})

export default User;