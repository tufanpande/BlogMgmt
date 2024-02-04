const router = require("express").Router();

 const blogRouter=  require("../modules/blogs/blog.route");







 router.use("/blogs",blogRouter);
 module.exports = router;