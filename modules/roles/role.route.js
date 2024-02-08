const router = require("express").Router();

const roleController = require("./role.controller");
const {validate} =require("./role.validator");

router.get("/", async(req, res, next) => {
    try {
        const result= await roleController.get();
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });
  router.post("/",validate, async( req, res, next) => {
    try {
        const result= await roleController.create(req.body);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });

  router.get("/:id", async(req, res, next) => {
    try {
        const result= await roleController.getById(req.params.id);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });

  router.put("/:id", async(req, res, next) => {
    try {
        const result= await roleController.updateById(req.params.id, req.body);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });
  router.patch("/", async(req, res, next) => {
    try {
        const result= await roleController.updateById(req.params.id, req.body);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });
  router.delete("/:id", async(req, res, next) => {
    try {
        const result= await roleController.removeById(req.params.id);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });


module.exports =router;