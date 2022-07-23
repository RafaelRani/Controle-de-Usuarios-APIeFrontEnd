const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const PasswordToken = require('../models/PasswordToken');

const JWTsecret = 'adsuasgdhjasgdhjdgahjsg12hj3eg12hj3g12hj3g12hj3g123';

class UserController {
  async index(req, res) {
    const users = await User.findAll();
    res.json(users);
  }

  async findUser(req, res) {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user === undefined) {
      res.status(404);
      res.json({});
    } else {
      res.status(200);
      res.json(user);
    }
  }

  async create(req, res) {
    const { email, name, password } = req.body;
    if (email === undefined || email === '' || email === ' ') {
      res.status(400);
      res.json({ err: 'O e-mail é inválido!' });
      return;
    }

    const emailExists = await User.findEmail(email);

    if (emailExists) {
      res.status(406);
      res.json({ err: 'O e-mail já está cadastrado!' });
      return;
    }
    await User.new(email, password, name);

    res.status(200);
    res.send('Tudo OK!');
  }

  async edit(req, res) {
    const {
      id, name, role, email,
    } = req.body;
    const result = await User.update(id, email, name, role);
    if (result !== undefined) {
      if (result.status) {
        res.status(200);
        res.send('Tudo OK!');
      } else {
        res.status(406);
        res.send(result.err);
      }
    } else {
      res.status(406);
      res.send('Ocorreu um erro no servidor!');
    }
  }

  async remove(req, res) {
    const { id } = req.params;

    const result = await User.delete(id);

    if (result.status) {
      res.status(200);
      res.send('Tudo OK!');
    } else {
      res.status(406);
      res.send(result.err);
    }
  }

  async recoverPassword(req, res) {
    const { email } = req.body;
    const result = await PasswordToken.create(email);
    if (result.status) {
      res.status(200);
      res.json(result);
    } else {
      res.status(406);
      res.json(result);
    }
  }

  async changePassword(req, res) {
    const { token } = req.body;
    const { password } = req.body;
    const isTokenValid = await PasswordToken.validate(token);
    if (isTokenValid.status) {
      await User.changePassword(password, isTokenValid.token.user_id, isTokenValid.token.token);
      res.status(200);
      res.json('Senha alterada com sucesso');
    } else {
      res.status(406);
      res.json('Token inválido!');
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    const user = await PasswordToken.findByEmail(email);

    if (user !== undefined) {
      const resultado = await bcrypt.compare(password, user.password);

      if (resultado) {
        const loggedUser = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
        const token = jwt.sign({
          email: user.email,
          role: user.role,
        }, JWTsecret, { expiresIn: '1h' });

        res.status(200);
        res.json({ token, loggedUser });
      } else {
        res.status(406);
        res.json({ err: 'Senha incorreta' });
      }
    } else {
      res.status(406);
      res.json({ status: false, err: 'O usuário não existe' });
    }
  }
}

module.exports = new UserController();
