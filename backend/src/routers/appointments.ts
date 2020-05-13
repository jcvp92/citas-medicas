import { Router } from "express"
import { createAppointment, getAppointments, uptadeAppointmentById, deleteAppointmentById } from '../controllers/appointment';

// exportamos una constante  de citas la estamos igualando a router express 
export const appointments_router=Router();
appointments_router.post("/appointment",createAppointment);
appointments_router.get("/appointments", getAppointments);
appointments_router.put("/appointment/:id", uptadeAppointmentById);
appointments_router.delete("/appointment/:id", deleteAppointmentById);