import { details3 } from "../../../data/details-3";

export default function handler(req, res) {
  res.status(200).json(details3);
}
