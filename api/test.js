import { connectDB } from "./db.js";

export default async function handler(req, res) {

  try {

    await connectDB();

    res.status(200).json({
      ok: true,
      message: "MongoDB conectado 🚀"
    });

  } catch (error) {

    res.status(500).json({
      ok: false,
      error: error.message
    });

  }

}
