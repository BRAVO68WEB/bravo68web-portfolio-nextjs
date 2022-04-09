import axios from "axios";

export default function handler(req, res) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    url: "https://api.github.com/users/joshuacarr",
  };
  res.status(200).json({ name: "John Doe" });
}
