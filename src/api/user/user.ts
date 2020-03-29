import { Router, RequestHandler, Request } from "express";
import { UserResponse } from "./types";

export const router = Router();

export const handler = () => ({
  hello: 'world'
} as const)

router.get<any, UserResponse>("/", (req, res) => {
  res.send(handler());
});
