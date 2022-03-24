import express, { Application, Request, Response } from "express";
import cors from "cors";
import sharpResizer from "./sharpResizer";

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    const { name, width, height } = req.query as {
      name: string;
      width: string;
      height: string;
    };
    if (!name || !width || !height || +width <= 0 || +height <= 0)
      throw new Error("Wrong inputs");
    const { data, error } = await sharpResizer(name, width, height);
    if (error.message) throw new Error(error.message);
    res.sendFile(data);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
});

app.listen(port, () =>
  console.log(`SERVER IS UP AND RUNNING ON PORT: ${port}`)
);

export default app;
