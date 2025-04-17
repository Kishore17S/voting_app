const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'database',
    database: 'voting_app',
    password: 'password',
    port: 5432,
});

class Vote {
    static async incrementVote(cricketer) {
        await pool.query('UPDATE votes SET count = count + 1 WHERE name = $1', [cricketer]);
    }

    static async getResults() {
        const result = await pool.query('SELECT * FROM votes');
        return result.rows;
    }
}

module.exports = Vote;