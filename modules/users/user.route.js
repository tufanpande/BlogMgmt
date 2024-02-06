const router = require("express").Router();

const userController = require("./user.controller");
const {validate} =require("./user.validator");

router.get("/", async(req, res, next) => {
    try {
        const result= await userController.get();
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });
  router.post("/",validate, async( req, res, next) => {
    try {
        const result= await userController.create(req.body);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });

  router.get("/:id", async(req, res, next) => {
    try {
        const result= await userController.getById(req.params.id);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });

  router.put("/:id", async(req, res, next) => {
    try {
        const result= await userController.updateById(req.params.id, req.body);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });
  router.patch("/", async(req, res, next) => {
    try {
        const result= await userController.updateById(req.params.id, req.body);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });
  router.delete("/:id", async(req, res, next) => {
    try {
        const result= await userController.removeById(req.params.id);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });


module.exports =router;