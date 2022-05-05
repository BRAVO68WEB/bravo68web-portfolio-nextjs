import axios from "axios";

const handler = async (req, res) => {
  res.status(200).json({ name: "John Doe" });
}

export default handler;