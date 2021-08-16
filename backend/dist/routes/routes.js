"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var animals_controller_1 = __importDefault(require("../Controllers/animals.controller"));
var users_controller_1 = __importDefault(require("../Controllers/users.controller"));
var router = express_1.Router();
router.get('/', function (req, res) {
    res.json({
        status: 200,
        response: 'ok',
    });
});
router.get('/users', users_controller_1.default.users);
router.post('/register', users_controller_1.default.register);
router.post('/subscribe-pet', animals_controller_1.default.register);
exports.default = router;
