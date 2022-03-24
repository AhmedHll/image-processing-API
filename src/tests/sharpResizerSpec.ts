import path from "path";
import sharpResizer from "../sharpResizer";

it("should return Error If no file name!", async () => {
  const respond = await sharpResizer("fjordfjord", "500", "300");
  expect(respond.error.message).toEqual("Input file is missing");
});

it("should return new image path if it success!", async () => {
  const name = "fjord";
  const width = "500";
  const height = "400";
  const respond = await sharpResizer(name, width, height);
  const outputFile = path.join(process.cwd(), `/images/thumbnails`);
  expect(respond.data).toEqual(`${outputFile}/${name}-${width}-${height}.jpg`);
});
