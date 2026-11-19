import jwt from "jsonwebtoken";

export const login = (req, res) => {
    const { email, password } = req.body ?? {};
    if (!email || !password) {
        return res.status(404).json({
            error: "Email y contraseñas son obligatorios",
        })
    }
    if (email !== process.env.DEMO_EMAIL || password !== process.env.DEMO_PASSWORD) {
        return res.status(401).json({
            error: "Las credenciales ingresadas son incorrectas",
        })
    }

    const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn:"1h",});

    res.json({token});

}


