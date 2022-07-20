class HomeController {
  async index(req, res) {
    res.send('APP EXPRESS! - API de Controle de usuários.');
  }

  async validate(req, res) {
    res.send('okay');
  }
}

module.exports = new HomeController();
