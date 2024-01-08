import {getSessions} from '../models/sessionModel.js';

const getAllSessions = async(req, res) => {
  try {
    const sessions = await getSessions();
    res.status(200).json({ sessions: sessions });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
}

export { getAllSessions };