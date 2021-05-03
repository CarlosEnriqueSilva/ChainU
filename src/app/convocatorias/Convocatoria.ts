export class Convocatoria {
  titulo: string;
  empresa: string;
  valor: string;
  requisitos: string;
  descripcion: string;
  sector: string;
  rutaImagen: string;
  fechaPubl: string;

  public constructor(
    pTitulo: string,
    pEmpresa: string,
    pRango: string,
    pRequisitos: string,
    pDescripcion: string,
    pSector: string,
    pRutaImagen: string,
    pFecha: string
  ) {
    this.titulo = pTitulo;
    this.empresa = pEmpresa;
    this.valor = pRango;
    this.requisitos = pRequisitos;
    this.descripcion = pDescripcion;
    this.sector = pSector;
    this.rutaImagen = pRutaImagen;
    this.fechaPubl = pFecha;
  }
}
