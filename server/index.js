import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: "Internal Server Error" });
});

app.get("/", (req, res) => {
  res.send("Portfolio API is running...");
});

/* ============ MONGO ============ */
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

/* ============ MONGO ============ */

app.listen(PORT, () => {
  console.log(`🚀 Server flying on port ${PORT}`);
});
