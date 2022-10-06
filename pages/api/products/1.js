import { details1 } from "../../../data/details-1";

export default function handler(req, res) {
  res.status(200).json(details1);
}
