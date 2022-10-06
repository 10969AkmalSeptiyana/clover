import { meta } from "../../../data/meta";

export default function handler(req, res) {
  res.status(200).json(meta);
}
