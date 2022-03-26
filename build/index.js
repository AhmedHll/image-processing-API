"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sharpResizer_1 = __importDefault(require("./sharpResizer"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, width, height } = req.query;
    if (!name || !width || !height || +width <= 0 || +height <= 0)
        return res.status(400).json({ msg: "wrong input" });
    const { data, error } = yield (0, sharpResizer_1.default)(name, width, height);
    if (error.message)
        return res.status(400).json({ msg: error.message });
    res.sendFile(data);
}));
app.listen(port, () => console.log(`SERVER IS UP AND RUNNING ON PORT: ${port}`));
exports.default = app;
