import { Response } from "express";

const version = "1.0.0";

export const success = (
  res: Response,
  data: any,
  message = "Success",
  status = 200
) => {
  return res.status(status).json({
    version,
    message,
    data,
  });
};

export const fail = (
  res: Response,
  message = "Error",
  error: any = null,
  status = 400
) => {
  return res.status(status).json({
    version,
    message,
    error,
  });
};
