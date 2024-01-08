CREATE TABLE viajes (
  id SERIAL, 
  destino VARCHAR(50) NOT NULL, 
  presupuesto INT NOT NULL
);

CREATE TABLE equipamiento (
  id SERIAL, 
  nombre VARCHAR(50)
  );