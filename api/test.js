import clientPromise from "./db.js";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("reconciliacionDB");

    const collections = await db.listCollections().toArray();

    res.status(200).json({
      ok: true,
      collections,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error.message,
    });
  }
}
