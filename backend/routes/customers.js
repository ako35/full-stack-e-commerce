const express = require("express");
const router = express.Router();

router.post("/",  async (req, res) => {

  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const city = req.body.city;
  const country = req.body.country;

  // Bilgileri doğrulayın ve gerekli işlemleri gerçekleştirin.

  // Örnek: Veritabanına kaydetme

  const newCustomer = new Customer({
    name,
    surname,
    email,
    phone,
    address,
    city,
    country
  })

  await newCustomer.save();

  // Kullanıcıya yanıt gönderin.

  res.json({
    success: true,
    message: "Musteri başarıyla oluşturuldu!"
  });
            
})

module.exports = router;