var Sequelize = require("sequelize");
var sequelize = new Sequelize('pharmacy','root','yourpassword',{
host:"localhost",
dialect:'mysql'
});

sequelize.authenticate()
.then(function(){
//res.status(400).send('connextion has been established')
console.log('db connection has been done.');
})
.catch(function(err){
console.log(err)
})
console.log("i am here")

module.exports = {
sequelize,Sequelize

};