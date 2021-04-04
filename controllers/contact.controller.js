//const model = require('./../models/contact.model');
const mailer = require("./../utils/mailer");

const sendComment = async (req, res, next) => {
  try {
    const { fullName, email, comment } = req.body;
    const emailToSend = { fullName, email, comment };

    const info = await mailer.comments(emailToSend);

    if (info) {
      // Insertar en base de datos.
      res.render("contact", { message: "Gracias por enviar su consulta!" });
    } else {
      res.render("contact", { message: "Error en las credenciales." });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const getContact = async (req, res, next) => {
  try {
    res.render("contact");
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  getContact,
  sendComment,
};
