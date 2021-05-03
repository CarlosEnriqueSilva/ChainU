export class EmpresaGrande {
  nit: number;
  nombre: string;
  departamento: string;
  ciudad: string;
  macroSector: string;
  ciiu: string;
  ingresosOperacionales: number;

  public constructor(
    pNit: number,
    pNombre: string,
    pDepartamento: string,
    pCiudad: string,
    pMacroSector: string,
    pCiuu: string,
    pIngresos: number
  ) {
    this.nit = pNit;
    this.nombre = pNombre;
    this.departamento = pDepartamento;
    this.ciudad = pCiudad;
    this.macroSector = pMacroSector;
    this.ciiu = pCiuu;
    this.ingresosOperacionales = pIngresos;
  }
}
