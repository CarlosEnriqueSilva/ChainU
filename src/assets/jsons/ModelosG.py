import pandas as pd
from sklearn.cluster import KMeans
import json


class Empresa:
    def __init__(self, nit, nombre, region, ciudad, sector, ciu, ingresos):
        self.nit = nit
        self.nombre = nombre
        self.region = region
        self.ciudad = ciudad
        self.sector = sector
        self.ciu = ciu
        self.ingresos = ingresos
        
class Contrato:
    def __init__(self, titulo, empresa, descripcion, requisitos, sector, precio, ruta):
        self.ruta = ruta
        self.titulo = titulo
        self.empresa = empresa
        self.descripcion = descripcion
        self.requisitos = requisitos
        self.sector = sector
        self.precio = precio

# Leer datos
datosP = pd.read_excel("Datos.xlsm", sheet_name="PYMES")
datosG = pd.read_excel("Datos.xlsm", sheet_name="GrandesEmpresas")
datosC = pd.read_excel("Datos.xlsm", sheet_name="Contratos")

# Crear la lista de empresas
listaEmpG = []
listaEmpP = []
listaCont = []
for i in range(len(datosG)):
    e = Empresa(datosG.iloc[i,0], datosG.iloc[i,1], datosG.iloc[i,2], datosG.iloc[i,3], datosG.iloc[i,4], datosG.iloc[i,5], datosG.iloc[i,6])
    listaEmpG.append(e)

for i in range(len(datosP)):
    e = Empresa(datosP.iloc[i,0], datosP.iloc[i,1], datosP.iloc[i,2], datosP.iloc[i,3], datosP.iloc[i,4], datosP.iloc[i,5], datosP.iloc[i,6])
    listaEmpP.append(e)
    
for i in range(len(datosC)):
    e = Contrato(datosC.iloc[i,0], datosC.iloc[i,1], datosC.iloc[i,2], datosC.iloc[i,3], datosC.iloc[i,4], datosC.iloc[i,5], datosC.iloc[i,6])
    listaCont.append(e)
    
# Alistar los datos
listaCol = ["DEPARTAMENTO", "MACROSECTOR", "CIIU"]
datosP_1 = datosP[listaCol]
datosG_1 = datosG[listaCol]
# Crear dummies
datosG_dumm = pd.get_dummies(datosG_1)
datosP_dumm = pd.get_dummies(datosP_1)

kmeans = KMeans(n_clusters = 15)
kmeans.fit(datosP_dumm)

with open('InfoEmpresasGIN.json', encoding='utf-8') as fh:
    datosEmp = json.load(fh)

print(datosEmp)

index = 0
for i in range(len(listaEmpG)):
    e = listaEmpG[i]
    if datosEmp["nit"] == e.nit:
        index = i
        break

punto = datosG_dumm.iloc[index:index+1]
predG = kmeans.predict(datosP_dumm)
predEsp = kmeans.predict(punto)


listaCoin = []
listaIndex = []
for i in range(len(predG)):
    if predG[i] == predEsp:
        listaIndex.append(i)
        listaCoin.append(listaEmpP[i])

data = []
for j in range(5):
    dic = {}
    c = listaCoin[j]
    dic["nit"] = str(c.nit)
    dic["nombre"] = c.nombre
    dic["departamento"] = c.region
    dic["ciudad"] = c.ciudad
    dic["macrosector"] = c.sector
    dic["ciiu"] = c.ciu
    dic["rutaImagen"] = c.nombre[0:4] + ".png"
    dic["fechaPubl"] = "2/05/2021"
    dic["ingresosOperacionales"] = str(c.ingresos)
    data.append(dic)

with open("InfoEmpresas.json", "w", encoding='utf8') as outfile:
    json.dump(data, outfile, ensure_ascii=False)