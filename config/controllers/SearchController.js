const fir = require("../models/dbSchema");

exports.searchByFir = async(req, res) => {
    try{
        // changed EntryNo -> att in variable
        const att = req.params.EntryNo;
        const search = await fir.find({EntryNo: att});

        if(!search) {
            return res.status(404).json({
                success:false,
                message:"No Data found with given fir",
            })
        }
        res.status(202).json({
            success:true,
            data:search,
            message:"user data successfully fetched",
        })
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