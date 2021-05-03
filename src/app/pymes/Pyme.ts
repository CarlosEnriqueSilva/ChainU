export class Pyme {
  nit: number;
  nombre: string;
  departamento: string;
  ciudad: string;
  macrosector: string;
  ciiu: string;
  ingresosOperacionales: number;
  fechaPubl: string;
  rutaImagen: string;

  public constructor(
    pNit: number,
    pNombre: string,
    pDepartamento: string,
    pCiudad: string,
    pMacro: string,
    pCiuuu: string,
    pIngresos: number,
    Pfecha: string,
    pRutaImagen: string
  ) {
    this.nit = pNit;
    this.nombre = pNombre;
    this.departamento = pDepartamento;
    this.ciudad = pCiudad;
    this.macrosector = pMacro;
    this.ciiu = pCiuuu;
    this.ingresosOperacionales = pIngresos;
    this.fechaPubl = Pfecha;
    this.rutaImagen = pRutaImagen;
  }
}
