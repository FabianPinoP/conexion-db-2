import pg from 'pg'

const pool = new pg.Pool({
 host: 'localhost',
 user: 'fabianpino',
 password: 'postgres',
 database: 'plan_de_viajes',
 allowExitOnIdle: true
})

const addEquipamiento = async (nombre) => {
  const consulta = "INSERT INTO equipamiento (nombre) values ($1)"
  const values = [nombre]
  const result = await pool.query(consulta, values)
  console.log("Equipamiento agregado", result)
}

addEquipamiento("Carpas")