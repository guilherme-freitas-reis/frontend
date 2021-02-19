import axios, { AxiosInstance } from 'axios';
import cookie from 'react-cookies';

export const ApiCalls = {
  listCategory: '/Veiculo/Categorias',
  selectCars: 'Veiculo/Categoria/',
  carDetails: 'Veiculo/GetById/',
  sendSimulation: 'Locacao/Simular',
};

export const api: AxiosInstance = axios.create({
  baseURL: 'https://api-localiza.azurewebsites.net/api',
  headers: {
    Authorization: cookie.load('localiza-auth') || '',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Content-Type': 'application/json',
  },
});

// ApiTypes

export interface CategoryDetails {
  id: number
  value: string
}

export interface CarDetails {
  id: number,
  placa: string;
  ano: string;
  valorHora: number;
  limitePortaMalas: number;
  tipoDeCombustivel: number;
  combustivelDescricao: string;
  tipoDeVeiculo: number;
  tipoVeiculoDescricao: string;
  kilometragem: number;
  marcaId: number;
  marca: string;
  modeloId: number;
  modelo: string;
  motor: string;
  imagem: string;
}
export interface SimulationRequestBody{
  veiculoId : number,
  entrada: string,
  saida : string,
}
export interface SimulationResponse{
    veiculoId: number,
    entrada: string,
    saida: string,
    valorSimulado: number,
    totalHoras: number,
    error?: string,
}
