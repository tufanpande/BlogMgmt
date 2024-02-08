const router = require("express").Router();

 const blogRouter=  require("../modules/blogs/blog.route");
const userRouter=require("../modules/users/user.route");
const roleRouter=require("../modules/roles/role.route");



router.use("/api/v1/roles",roleRouter);
 router.use("/api/v1/blogs",blogRouter);
 router.use("/api/v1/users",userRouter);
 router.use("api/v1/users/register",userRouter);
 module.exports = router;