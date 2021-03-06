const express = require("express")
const router = express.Router()
const owner_controller = require("../controllers/owner.controller")
router.post("/Table", owner_controller.addTable)
router.post("/:id", owner_controller.updateTable)
router.get("/Tables", owner_controller.viewTables)
router.post("/Dish", owner_controller.addDish)
router.post("/:id", owner_controller.updateMenu)
router.get("/Menu", owner_controller.viewMenu)
router.post("/Employee", owner_controller.addEmployee)
router.post("/:id", owner_controller.updateEmployee)
router.get("/Employees", owner_controller.viewEmployees)
router.get("/Orders", owner_controller.viewOrders)
router.get("/Bills", owner_controller.viewBills)
module.exports = router;
