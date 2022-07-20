const knex = require('../database/connection');

class PasswordToken {
  async findByEmail(email) {
    try {
      const result = await knex
        .select(['id', 'email', 'password', 'role', 'name'])
        .where({ email })
        .table('users');

      if (result.length > 0) {
        return result[0];
      }
      return undefined;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  async create(email) {
    const user = await this.findByEmail(email);
    if (user !== undefined) {
      try {
        const token = Date.now();
        await knex
          .insert({
            user_id: user.id,
            used: 0,
            token,
          })
          .table('passwordtokens');

        return { status: true, token };
      } catch (err) {
        console.log(err);
        return { status: false, err };
      }
    } else {
      return {
        status: false,
        err: 'O e-mail passado não existe no banco de dados!',
      };
    }
  }

  async validate(token) {
    try {
      const result = await knex
        .select()
        .where({ token })
        .table('passwordtokens');

      if (result.length > 0) {
        const tk = result[0];

        if (tk.used) {
          return { status: false };
        }
        return { status: true, token: tk };
      }
      return { status: false };
    } catch (err) {
      console.log(err);
      return { status: false };
    }
  }

  async setUsed(token) {
    await knex.update({ used: 1 }).where({ token }).table('passwordtokens');
  }
}

module.exports = new PasswordToken();
