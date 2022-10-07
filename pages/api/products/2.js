import { details2 } from "../../../data/details-2";

export default function handler(req, res) {
  res.status(200).json(details2);
}
