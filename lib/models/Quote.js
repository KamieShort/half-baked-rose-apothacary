const pool = require('../utils/pool');

class Quote {
  id;
  detail;
  episode_id;
  character_id;
  constructor(row) {
    this.id = row.id;
    this.detail = row.detail;
    this.character_id = row.character_id;
    this.episode_id = row.episode_id;
  }

  static async count() {
    const { rows } = await pool.query('SELECT COUNT(*) FROM quotes');
    return Number(rows[0].count);
  }

  static async insert({ detail, episode_id, character_id }) {
    // implement insert to add new quote
    const { rows } = await pool.query(
      'INSERT INTO quotes (detail, episode_id, character_id) VALUES ($1, $2, $3) RETURNING *',
      [detail, episode_id, character_id]
    );
    return new Quote(rows[0]);
  }
}

module.exports = { Quote };
