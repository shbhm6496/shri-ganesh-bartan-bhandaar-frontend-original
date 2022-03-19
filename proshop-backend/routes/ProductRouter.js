import express from "express";
import asyncHandler from "express-async-handler";
import products from "../data/products.js";

import Product from "../models/ProductModel.js";

const router = express.Router();

// @desc fetch a;;orduct
///route GET /api/priducts
//access
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc fetch single porduct
///route GET /api/priduct/ids
//access

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

export default router;
