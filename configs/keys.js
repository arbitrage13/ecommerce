if(process.env.NODE_ENV == 'production'){
module.exports = {
    googleClientID:' ',
    googleClientSecret: '',
    mongoURI:process.env.MONGO_URI
}
} else {
    module.exports = {
        mongoURI:'mongodb://admin:admin120@ds261521.mlab.com:61521/shoppinglist' 
    }
}