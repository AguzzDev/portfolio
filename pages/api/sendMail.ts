import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const values = req.body;
  const email = "contacto@agustin-ribotta.xyz";

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: email,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: email,
      subject: "Mensaje desde Portafolio",
      html: `<p>Hola Agust&iacute;n,</p>
        <p>El proposito de este correo es:&nbsp;</p>
        <p>${values.message}</p>
        <p>&nbsp;</p>
        <p>Enviado por:</p>
        <p>${values.name}<br>${values.email}</p>`,
    });

    res.send(200)
  } catch (error) {
    res.status(400).json(error);
  }
}
