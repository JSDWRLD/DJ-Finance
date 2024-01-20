import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (error) {
    console.error('Error in /kpis route:', error);

    // Set the Content-Type header to JSON
    res.setHeader('Content-Type', 'application/json');

    // Send a JSON response for errors
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      error: error.message,
    });
  }
});


export default router;