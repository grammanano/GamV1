const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ProductSchema = require("../../models/Product");
/////////
const Product = mongoose.model("product", ProductSchema);

///////

//////

router.get("/test", (req, res) => res.json({ msg: "Product Works" }));

//GetProduct
router.get("/", async (req, res) => {
  Product.find().then(data => {
    res.status(200).json(data);
  });
});


router.post("/search", async (req, res) => {
  if(req.body.keyword){
  Product.find({ "tag": { "$regex": req.body.keyword, "$options": "i" } }).then(data => {
    console.log(req.body.keyword )
    res.status(200).json(data);
  });
}else{
  Product.find().then(data => {
    res.status(200).json(data);
  });
}
});

router.post("/item", async (req, res) => {
  if(req.body.keyword){
  Product.find({ "productName": req.body.keyword }).then(data => {
    console.log(req.body.keyword)
    res.status(200).json(data);
    console.log("Find Product Name"+req.body.keyword+" Success")
  });
}else{
  Product.find().then(data => {
    res.status(200).json(data);
    console.log("Find Product Name"+req.body.keyword+" Fail")
  });
}
});

router.post("/pdType", async (req, res) => {
  const type = req.body.protype;
  if(type){
  Product.find({ "productType": type }).then(data => {
    console.log(type)
    res.status(200).json(data);
    console.log("Find Product Type"+type+" Success")
  });
}else{
  Product.find().then(data => {
    res.status(200).json(data);
    console.log("Find Product Type"+type+" Fail")
  });
}
});

router.post("/pdBrand", async (req, res) => {
  if(req.body.probrand){
  Product.find({ "productBrand": req.body.probrand }).then(data => {
    console.log(req.body.probrand)
    res.status(200).json(data);
    console.log("Find ProductBrand"+req.body.probrand+" Success")
  });
}else{
  Product.find().then(data => {
    res.status(200).json(data);
    console.log("Find ProductBrand"+req.body.probrand+" Fail")
  });
}
});

//count
/*router.post("/count", async (req, res) => {
  if(req.body.protype){
    Product.count({ type: 'jungle' }, function (err, count).then(data => {
    console.log(req.body.pro)
    res.status(200).json(data);
    console.log("Find ProductBrand"+req.body.probrand+" Success")
  });
}else{
  Product.find().then(data => {
    res.status(200).json(data);
    console.log("Find ProductBrand"+req.body.probrand+" Fail")
  });
}
});*/


//add
router.post("/", async (req, res) => {
  const newProduct = new Product({
    productUPC: req.body.productUPC,
    productImage: req.body.productImage,
    productName: req.body.productName,
    productBrand: req.body.productBrand,
    productType: req.body.productType,
    fullPrice: req.body.productPrice,
    tax: req.body.tax,
    notax: req.body.notax,
    availability: req.body.availability,
    weight: req.body.weight,
    tag: req.body.productName+req.body.productBrand+req.body.productType

  });
    newProduct.save().then(data => {
      res.status(200).json(data);
    });
});

router.post("/SEdit", async (req, res) => {
  if(req.body.keyword){
  Product.find({ "_id": req.body.keyword }).then(data => {
    console.log(req.body.keyword )
    res.status(200).json(data);
  });
}else{
  Product.find().then(data => {
    res.status(200).json(data);
  });
}
});

//edit
router.post("/edit",async (req, res) => {

  const id = req.body._id;
  Product.find({ "_id": req.body._id }).then(data => {
   data.productName = req.body.productName
   data.fullPrice = req.body.fullPrice
   data.save()
  });
});

//delete
router.post("/del", (req, res, next) => {
  const id = req.body._id;
  console.log(id);
  Product.findByIdAndDelete({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;