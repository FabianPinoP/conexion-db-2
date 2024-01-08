import pool from "../../db/conectionDb.js";

const getTravels = async () => {
  const SQLquery = { text: "SELECT * FROM viajes" };
    const response = await pool.query(SQLquery);
    return response.rows;
};

const createTravel = async ({ destino, presupuesto }) => {
  const SQLquery = {
    text: "INSERT INTO viajes (destino, presupuesto) VALUES ($1, $2) RETURNING *",
    values: [destino, presupuesto],
  };
    const response = await pool.query(SQLquery);
    return response.rows[0];
};

const updateTravel = async (id, { presupuesto }) => {
  const SQLquery = {
    text: "UPDATE viajes SET presupuesto = $1 WHERE id = $2 RETURNING *",
    values: [presupuesto, id],
  };
    const response = await pool.query(SQLquery);
    return response.rows[0];
}

const destroyTravel = async (id) => {
  const SQLquery = {
    text: "DELETE FROM viajes WHERE id = $1",
    values: [id],
  };
    const response = await pool.query(SQLquery);
    return response.rowCount;
};

export { getTravels, createTravel, updateTravel, destroyTravel };
