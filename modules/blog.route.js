const router = require("express").Router();

const blogController = require("./blog.controller");

router.get("/", async(req, res, next) => {
    try {
        const result= await blogController.get();
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });
  router.post("/", async(req, res, next) => {
    try {
        const result= await blogController.create(req.body);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });

  router.get("/:id", async(req, res, next) => {
    try {
        const result= await blogController.getById(req.params.id);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });

  router.put("/:id", async(req, res, next) => {
    try {
        const result= await blogController.updateById(req.params.id, req.body);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });
  router.patch("/:id", async(req, res, next) => {
    try {
        const result= await blogController.updateById(req.params.id, req.body);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });
  router.delete("/:id", async(req, res, next) => {
    try {
        const result= await blogController.removeById(req.params.id);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });

module.exports=router;