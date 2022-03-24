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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const sharpResizer = () => __awaiter(void 0, void 0, void 0, function* () {
    const inputFile = path_1.default.join(process.cwd(), "/image/encenadaport.jpg");
    const outputFile = path_1.default.join(process.cwd(), "/image/newImage/newImage.jpg");
    (0, sharp_1.default)(inputFile)
        .resize(320, 240)
        .toFile(outputFile, (err, info) => {
        console.log(err);
    });
});
exports.default = sharpResizer;
