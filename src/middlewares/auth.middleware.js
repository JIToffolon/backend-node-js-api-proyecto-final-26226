import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Para realizar esta acción el Token es requerido",
    });
  }

  const token = authorization.split(" ")[1];

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(403).json({
      error: "El Token es inválido o está vencido, porfavor intente nuevamente",
    });
  }
};