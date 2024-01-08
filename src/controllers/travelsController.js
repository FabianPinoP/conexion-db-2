import {
  getTravels,
  createTravel,
  updateTravel,
  destroyTravel,
} from "../models/travelModel.js";

import { findError } from "../utils/utils.js";

const getAllTravels = async (req, res) => {
  try {
    const travels = await getTravels();
    res.status(200).json({ travels: travels });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

const createTravels = async (req, res) => {
  try {
    const { travel } = req.body;
    const newProduct = await createTravel(travel);
    res.status(201).json({ travel: newProduct });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

const updateTravels = async (req, res) => {
  try {
    const { id } = req.params;
    const { travel } = req.body;
    const travel_update = await updateTravel(id, travel);
    res.status(200).json({ travel: travel_update });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

const deleteTravels = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTravel = await destroyTravel(id);
    if (deleteTravel === 0) {
      return res.status(404).json({ message: "No existe el registro" });
    }
    res.status(200).json({ message: "registro eliminado con exito" });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

export { getAllTravels, createTravels, updateTravels, deleteTravels };
