import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Users = db.define('userdata',{
    fullName:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    passw:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Users;