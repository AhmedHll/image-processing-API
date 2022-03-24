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
const path_1 = __importDefault(require("path"));
const sharpResizer_1 = __importDefault(require("../sharpResizer"));
it("should return Error If no file name!", () => __awaiter(void 0, void 0, void 0, function* () {
    const respond = yield (0, sharpResizer_1.default)("fjordfjord", "500", "300");
    expect(respond.error.message).toEqual("Input file is missing");
}));
it("should return new image path if it success!", () => __awaiter(void 0, void 0, void 0, function* () {
    const name = "fjord";
    const width = "500";
    const height = "400";
    const respond = yield (0, sharpResizer_1.default)(name, width, height);
    const outputFile = path_1.default.join(process.cwd(), `/images/thumbnails`);
    expect(respond.data).toEqual(`${outputFile}/${name}-${width}-${height}.jpg`);
}));
