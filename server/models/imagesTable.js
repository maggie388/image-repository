const bookshelf = require('../bookshelf');

const Image = bookshelf.model('Image', {
    tableName: 'images',
    users: function() {
        return this.belongsTo('User');  
    }
});

module.exports = Image;