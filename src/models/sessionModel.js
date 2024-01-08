import pool from "../../db/conectionDb.js";

const getSessions = async () => {
  const SQLquery = { text: "SELECT * FROM sessions" };
  try {
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.log(error);
  }
}

export { getSessions}