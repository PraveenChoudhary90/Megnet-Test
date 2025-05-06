const ProModel = require("../Model/ProModel");



const InsertProduct = async(req,res)=>{
      const  {name,brand,price} = req.body;
      const ImageUrl = req.files.map(file=>file.path);
      try {
        const Data = await ProModel.create({
            name:name,
            brand:brand,
            price:price,
            defaultImage:ImageUrl[0],
            images:ImageUrl
        })
        res.status(200).send({msg:"Product Data is Inserted Successfully"});
      } catch (error) {
        console.log(error);
      }
}

const ProductDisplay = async (req,res)=>{
    const Product = await ProModel.find();
    res.status(200).send(Product);
}

module.exports = {
    InsertProduct,
    ProductDisplay
}