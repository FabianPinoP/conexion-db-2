import pg from 'pg'

const pool = new pg.Pool({
 host: 'localhost',
 user: 'fabianpino',
 password: 'postgres',
 database: 'plan_de_viajes',
 allowExitOnIdle: true
})
const getTravels = async () => {
  const sqlQuery = "SELECT * FROM equipamiento"
 const {rows} = await pool.query(sqlQuery)
 console.log(rows)
}
getTravels()

// const agregarViaje = async (destino, presupuesto) => {
//   const consulta = "INSERT INTO viajes (destino, presupuesto) values ($1, $2)"
//   const values = [destino, presupuesto]
//   const result = await pool.query(consulta, values)
//   console.log("Viaje agregado", result)
//  }

//  agregarViaje("lima", 1000)