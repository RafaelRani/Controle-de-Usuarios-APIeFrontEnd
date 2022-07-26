const bcrypt = require('bcrypt');
const knex = require('../database/connection');
const PasswordToken = require('./PasswordToken');

class User {
  async findAll() {
    try {
      const result = await knex.select(['id', 'email', 'role', 'name']).table('users');
      return result;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async findById(id) {
    try {
      const result = await knex.select(['id', 'email', 'role', 'name']).where({ id }).table('users');

      if (result.length > 0) {
        return result[0];
      }
      return undefined;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  async new(email, password, name) {
    try {
      const hash = await bcrypt.hash(password, 10);
      await knex.insert({
        email, password: hash, name, role: 0,
      }).table('users');
    } catch (err) {
      console.log(err);
    }
  }

  async findEmail(email) {
    try {
      const result = await knex.select('*').from('users').where({ email });

      if (result.length > 0) {
        return true;
      }
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async update(id, email, name, role) {
    const user = await this.findById(id);

    if (user !== undefined) {
      const editUser = {};

      if (email !== undefined) {
        if (email !== user.email) {
          const result = await this.findEmail(email);
          if (result === false) {
            editUser.email = email;
          } else {
            return { status: false, err: 'O e-mail já está cadastrado' };
          }
        }
      }

      if (name !== undefined) {
        editUser.name = name;
      }

      if (role !== undefined) {
        editUser.role = role;
      }

      try {
        await knex.update(editUser).where({ id }).table('users');
        return { status: true };
      } catch (err) {
        return { status: false, err };
      }
    } else {
      return { status: false, err: 'O usuário não existe!' };
    }
  }

  async delete(id) {
    const user = await this.findById(id);
    if (user !== undefined) {
      try {
        await knex.delete().where({ id }).table('users');
        return { status: true };
      } catch (err) {
        return { status: false, err };
      }
    } else {
      return { status: false, err: 'O usuário não existe, portanto não pode ser deletado.' };
    }
  }

  async changePassword(newPassword, id, token) {
    const hash = await bcrypt.hash(newPassword, 10);
    await knex.update({ password: hash }).where({ id }).table('users');
    await PasswordToken.setUsed(token);
  }
}

module.exports = new User();
