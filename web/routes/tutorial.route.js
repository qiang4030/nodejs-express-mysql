var express = require("express");
var router = express.Router();

const {
  create,
  findAll,
  findAllPublished,
  findById,
  updateOne,
  deleteOne,
  deleteAll,
} = require("../controllers/tutorial.controller");

router.post("/create", create);
router.get("/", findAll);
router.get("/published", findAllPublished);
// "/:id" 形式的路由会与子路由冲突，只能放到最后
router.get("/:id", findById);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);
router.delete("/", deleteAll);

module.exports = router;
