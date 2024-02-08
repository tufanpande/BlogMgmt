const Joi =require("joi");


const schema =Joi.object({
    author: Joi.string().required(),
    // email:Joi.string().email({
    //     minDomainSegments:1,
    //     tlds:{arrow:["com"]},
    // }),
    

});

const validate =(req, res,next)=>{
    const {error}= schema.validate(req.body);
    if(error){
        return res.status(400).json({error:error.details[0].message});

    }
    next();
};

module.exports={validate};