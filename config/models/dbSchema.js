const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema(
    {
        district:{
            type: String,
            required:true,
        },
        Police_Station:{
            type: String,
            required:true,
        },
        year:{
            type: String,
            required:true,
        },
        Day:{
            type: String,
            required:true,
        },
        DateFrom:{
            type: String,
            required:true,
        },
        DateTo:{
            type: String,
            required:true,
        },
        Period:{
            type: String,
            required:true,
            default:"1",
        },
        TimeFrom:{
            type: String,
            required:true,
        },
        TimeTo:{
            type: String,
            required:true,
        },
        EntryNo:{
            type: String,
            required:true,
        },
        BeatNo:{
            type: String,
            required:true,
        },
        Address:{
            type: String,
            required:true,
        },
        Name:{
            type: String,
            required:true,
        },
        FName:{
            type: String,
            required:true,
        },
        BirthYear:{
            type: String,
            required:true,
        },
        Nationality:{
            type: String,
            required:true,
        },
        aadhar:{
            type: String,
            required:true,
        },
        Passport:{
            type: String,
            required:true,
        },
        Mobile:{
            type: String,
            required:true,
        },
        Fir:{
            type:String
        },
        Sections:[{
            type:String
        }]
        
    }
);

module.exports = mongoose.model("fir", dbSchema);

