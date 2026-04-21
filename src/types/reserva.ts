// src/types/reserva.ts

export interface ReservaTicket {
  nombre: string;
  email: string;
  telefono: string;
  pais: string;
  departamento: string;
  comentarios: string;
  terminos: boolean;
  tipoTicket: "General" | "VIP" | "Platinum";
}

export const DATA_LOCALIDADES: Record<string, string[]> = {
  Colombia: ["Antioquia", "Bogotá", "Valle del Cauca", "Atlántico"],
  Argentina: ["Buenos Aires", "Córdoba", "Santa Fe", "Mendoza"],
  México: ["CDMX", "Jalisco", "Nuevo León", "Puebla"],
};