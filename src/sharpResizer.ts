import fs from "fs";
import path from "path";
import sharp from "sharp";

export default async (
  name: string,
  width: string,
  height: string
): Promise<{
  data: string;
  error: {
    message: string;
  };
}> => {
  try {
    const inputFile = path.join(process.cwd(), `/images/${name}.jpg`);
    const outputFile = path.join(process.cwd(), `/images/thumbnails`);
    if (!fs.existsSync(outputFile)) fs.mkdirSync(outputFile);
    await sharp(inputFile)
      .resize(+width, +height)
      .toFile(`${outputFile}/${name}-${width}-${height}.jpg`);
    return {
      data: `${outputFile}/${name}-${width}-${height}.jpg` as string,
      error: {} as { message: string },
    };
  } catch (error) {
    return {
      data: "" as string,
      error: error as { message: string },
    };
  }
};
