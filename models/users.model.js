const pool = require("../utils/db");
const { DB_T_USERS, DB_T_ROLES } = process.env;

const getAllUsers = async () => {
  try {
    const query = `
            SELECT 
                id_user,
                email,
                password,
                role
            FROM 
                ${DB_T_USERS}
            WHERE 
                available = 1`;

    const result = await pool.query(query);

    return result;
  } catch (error) {
    throw error;
  }
};

const getRoles = async () => {
  try {
    const query = `
            SELECT
                id_role,
                detail
            FROM
                ${DB_T_ROLES}
            WHERE
                available = 1`;

    return await pool.query(query);
  } catch (error) {
    throw error;
  }
};

const insertUser = async (obj) => {
  try {
    const query = `
            INSERT INTO ${DB_T_USERS} SET ?
        `;

    return await pool.query(query, [obj]);
  } catch (error) {
    throw error;
  }
};

const getSingleUser = async (id) => {
  try {
    const query = `
            SELECT
                U.id_user,
                U.email,
                U.password,
                R.id_role,
                R.detail
            FROM
                ${DB_T_USERS} as U
                INNER JOIN ${DB_T_ROLES} as R
                ON U.role = R.id_role
            WHERE
                U.id_user = ?
                AND
                U.available = 1
        `;

    return await pool.query(query, [id]);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const query = `
            UPDATE
                ${DB_T_USERS}
            SET
                available = 0
            WHERE
                id_user = ?
                AND
                available = 1
        `;

    const result = await pool.query(query, [id]);

    return result.affectedRows;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, obj) => {
  try {
    const query = `
            UPDATE
                ${DB_T_USERS}
            SET email = ?, password = ?, role = ?
            WHERE id_user = ? AND available = 1
        `;

    return await pool.query(query, [obj.email, obj.password, obj.role, id]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getRoles,
  insertUser,
  getSingleUser,
  deleteUser,
  updateUser,
};
