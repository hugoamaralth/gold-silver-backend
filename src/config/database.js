const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
module.exports = mongoose.connect('mongodb://goldadmin:gldslvr2020@geonosis.mongodb.umbler.com:38277/gold-silver');