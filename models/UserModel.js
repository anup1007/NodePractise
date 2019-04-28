var mysequelize = require('../config/dbconfig');

const user  = mysequelize.sequelize.define('user',{
	id: {
		type:mysequelize.Sequelize.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
username: {
	type: mysequelize.Sequelize.STRING,
	allowNull: false
},
password: {
	type:mysequelize.Sequelize.STRING,
	allowNull:false
},
userphoto: {
	type:mysequelize.Sequelize.STRING,
	allowNull:false
},
testval:{
	type:mysequelize.Sequelize.STRING(50),
	allowNull:false
}
},{
	freezeTableName:true,
	tableName:"user_profile"
}
)

user.sync({force:false})
.then(function(){
console.log('table created')
})
.catch(function(err){
console.log('error')
})

module.exports = 
user;	
