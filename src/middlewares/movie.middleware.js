const { releaseStatusTypes } = require("../utils/constant");



const verifyCreateTicketBody=(req,res,next)=>{

    const {name,description,releaseDate, releaseStatus} = req.body;

    if(!name){
        return res.status(400).send({message:"Failed! Movie Name is not provided"})
    }

      if(!description){
        return res.status(400).send({message:"Failed! Movie description is not provided"})
    }

      if(!releaseDate){
        return res.status(400).send({message:"Failed! Movie Release Date is not provided"})
    }

    if(! Object.values(releaseStatusTypes).includes(releaseStatus)){
                return res.status(400).send({message:"Failed! Movie Release Status is not correct"})

    }


    next();

}

module.exports={
    verifyCreateTicketBody
}