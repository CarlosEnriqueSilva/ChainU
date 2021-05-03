import pandas as pd
import numpy
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
kmeans.fit(datosG_dumm)

with open('InfoEmpresasIN.json', encoding='utf-8') as fh:
    datosEmp = json.load(fh)

print(datosEmp)

index = 0
for i in range(len(listaEmpP)):
    e = listaEmpP[i]
    if datosEmp["nit"] == e.nit:
        index = i
        break

punto = datosP_dumm.iloc[index:index+1]
predG = kmeans.predict(datosG_dumm)
predEsp = kmeans.predict(punto)


listaCoin = []
listaIndex = []
for i in range(len(predG)):
    if predG[i] == predEsp:
        listaIndex.append(i)
        listaCoin.append(listaEmpG[i])

listaF = []
for i in range(5):
    index = listaIndex[i]
    c = listaCont[index*6]
    listaF.append(c)
    
data = []
for j in range(5):
    dic = {}
    c = listaF[j]
    dic["titulo"] = c.titulo
    dic["empresa"] = c.empresa
    dic["valor"] = str(c.precio)
    dic["requisitos"] = c.requisitos
    dic["descripcion"] = c.descripcion
    dic["sector"] = c.sector
    dic["rutaImagen"] = c.ruta
    dic["fechaPubl"] = "2/05/2021"
    data.append(dic)

with open("InfoConvocatorias.json", "w", encoding='utf8') as outfile:
    json.dump(data, outfile, ensure_ascii=False)

