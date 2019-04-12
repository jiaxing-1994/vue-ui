var glob = require('glob');
var jsFiles =  glob.sync('packages/**/index.js');
var entryJS = {};
for(var i=0;i<jsFiles.length;i++){
    var name = jsFiles[i].split('/')[1].split('.')[0];
    entryJS[name] = './'+jsFiles[i];
}
module.exports = entryJS;