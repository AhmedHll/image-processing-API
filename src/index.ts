import express, { Application, Request, Response } from "express";
import cors from "cors";
import sharpResizer from "./sharpResizer";

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", async (req: Request, res: Response): Promise<any> => {
  const { name, width, height } = req.query as {
    name: string;
    width: string;
    height: string;
  };
  if (!name || !width || !height || +width <= 0 || +height <= 0)
    return res.status(400).json({ msg: "wrong input" });
  const { data, error } = await sharpResizer(name, width, height);
  if (error.message) return res.status(400).json({ msg: error.message });
  res.sendFile(data);
});

app.listen(port, () =>
  console.log(`SERVER IS UP AND RUNNING ON PORT: ${port}`)
);

export default app;
