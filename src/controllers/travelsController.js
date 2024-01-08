import {getTravels, createTravel} from '../models/travelModel.js'

const getAllTravels = async(req, res) => {
  try {
    const travels = await getTravels();
    res.status(200).json({ travels: travels });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

const createTravels = async(req, res) => {
    try {
    const {travel} = req.body;
    const newProduct = await createTravel(travel);
    res.status(201).json({ travel: newProduct });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
}
export { getAllTravels, createTravels };