import { Request, Response, NextFunction } from "express";

const { DOMAINS_ALLOWED } = process.env;

function validateDomainOrigin(req: Request, res: Response, next: NextFunction) {
  const { origin } = req.headers;
  const domains = DOMAINS_ALLOWED?.split(',');

  if (!origin) {
    return res.status(404).json({ message: 'Origin is undefined' });
  }

  if (!domains?.includes(origin)) {
    return res.status(401).json({ message: 'Unauthorized origin' });
  }

  return next();
}

export default validateDomainOrigin;