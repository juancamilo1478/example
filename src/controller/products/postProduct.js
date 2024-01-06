const{Products}=require('../../db')

module.exports=async(req,res)=>{
    const { name,  price,store } = req.body;
    try{
        const product = await Products.create({  name,price,store});
        res.status(201).json(product);
    }
    catch(error){   
    res.status(500).json({ error: error.message });
    }
}