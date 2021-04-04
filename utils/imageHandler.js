const fs = require("fs");
const uuid = require("node-uuid");

const saveImage = (file) => {
  try {
    const extensionAllow = ["jpeg", "png", "jpg", "pdf"]; // Declaramos los archivos que vamos a aceptar
    let fileName = "";

    // split('@') "hola@como estas@hola" => ['hola', 'como estas', 'hola'];
    const { mimetype, filename } = file; // mimetype 'image/jpg' || 'image/jpeg'
    const extension = mimetype.split("/")[1];

    if (extensionAllow.includes(extension)) {
      const fileNameTmp = `./public/tmp/${filename}`;

      const uid = uuid(); // 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
      fileName = `${uid}.${extension}`;

      const fileNameOut = `./public/images/${fileName}`;

      fs.createReadStream(fileNameTmp).pipe(fs.createWriteStream(fileNameOut));
      fs.unlink(fileNameTmp, (error) => console.log(error));
    }

    return fileName;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  saveImage,
};
