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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
exports.default = (name, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inputFile = path_1.default.join(process.cwd(), `/images/${name}.jpg`);
        const outputFile = path_1.default.join(process.cwd(), `/images/thumbnails`);
        if (!fs_1.default.existsSync(outputFile))
            fs_1.default.mkdirSync(outputFile);
        yield (0, sharp_1.default)(inputFile)
            .resize(+width, +height)
            .toFile(`${outputFile}/${name}-${width}-${height}.jpg`);
        return {
            data: `${outputFile}/${name}-${width}-${height}.jpg`,
            error: {},
        };
    }
    catch (error) {
        return {
            data: "",
            error: error,
        };
    }
});
