const fir = require("../models/dbSchema");

exports.newFir = async (req, res) =>{
    try{
        //extract title and description fron req body
        const {
            district,
            Police_Station,
            year,
            Day,
            DateFrom,
            DateTo,
            Period,
            TimeFrom,
            TimeTo,
            EntryNo,
            BeatNo,
            Address,
            Name,
            FName,
            BirthYear,
            Nationality,
            aadhar,
            Passport,
            Mobile,
            Fir,
            Sections

        } = req.body;
        // create a new user object and insert it in DB
        const response = await fir.create({
            district,
            Police_Station,
            year,
            Day,
            DateFrom,
            DateTo,
            Period,
            TimeFrom,
            TimeTo,
            EntryNo,
            BeatNo,
            Address,
            Name,
            FName,
            BirthYear,
            Nationality,
            aadhar,
            Passport,
            Mobile,
            Fir,
            Sections,

        });
        // send a json response with a success flag
        res.status(200).json({
            success:true, 
            data:response,
            message:'entry created succesfully'
        });
    }
    catch(err){
        console.error(err);
        console.log('error occured');
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message,
        })
    }
}