interface IReservaProps {
  id: number;
  totalHoras: number;
  clienteId: number;
  dataLocacao: Date;
  dataDevolucao: Date;
  valorLocacao: number;
  valorFinal: number;
  error: string;
  status: number;
  statusDescricao: string;
  veiculoId: number;
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

export default IReservaProps;
