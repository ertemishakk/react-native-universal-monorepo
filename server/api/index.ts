import express from "express";

const router = express.Router();

router.post("/test", (req, res) => {
  (req as any).io.sockets.emit("saleMode", { mode: "sale" });

  return res.json();
});

export default router;
