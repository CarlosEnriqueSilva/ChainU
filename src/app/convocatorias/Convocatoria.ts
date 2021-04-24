export class Convocatoria {
  titulo: string;
  empresa: string;
  rangoValor: string;
  requisitos: string;
  descripcion: string;
  sector: string;
  rutaImagen: string;

  public constructor(
    pTitulo: string,
    pEmpresa: string,
    pRango: string,
    pRequisitos: string,
    pDescripcion: string,
    pSector: string,
    pRutaImagen: string
  ) {
    this.titulo = pTitulo;
    this.empresa = pEmpresa;
    this.rangoValor = pRango;
    this.requisitos = pRequisitos;
    this.descripcion = pDescripcion;
    this.sector = pSector;
    this.rutaImagen = pRutaImagen;
  }
}
