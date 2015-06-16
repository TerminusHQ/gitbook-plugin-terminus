var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');

module.exports = {
  fromPathSync: function(relativePath) {
    var templateString = fs.readFileSync(path.resolve(__dirname, relativePath), {encoding: 'utf-8'});
    return handlebars.compile(templateString);
  }
};
