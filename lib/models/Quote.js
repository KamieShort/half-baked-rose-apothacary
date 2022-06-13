const pool = require('../utils/pool');

class Quote {
  id;
  detail;
  character_id;
  constructor(row) {
    this.id = row.id;
    this.detail = row.detail;
    this.character_id = row.character_id;
  }

  static async count() {
    const { rows } = await pool.query('SELECT COUNT(*) FROM quotes');
    return Number(rows[0].count);
  }

  static async insert() {
    // implement insert to add new quote
    const { rows } = await pool.query(
      'INSERT INSERT qoutes VALUES ($1) RETURNING *'
    );
    return new Quote(rows[0]);
  }
}

module.exports = { Quote };
