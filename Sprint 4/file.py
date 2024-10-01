file = open("hola.bla", "w")
print(type(file))
file.close()

file = open("hola.bla", "r")
print(type(file))
file.close()

file = open("hola.bla", "wb")
print(type(file))
file.close()

file = open("hola.bla", "rb")
print(type(file))
file.close()

with open("hola.bla", "w") as f:
    print(f)
    x = f.write("Hola mundo\n")
    print(x)
    x = f.write("Chau mundo\n")

with open("hola.bla", "r") as f:
    text = f.read()
    print(text, len(text))

def copiar1(file1, file2):
    with open(file1, "r") as f1:
        with open(file2, "w") as f2:
            data = f1.read()
            f2.write(data)

def copiar2(file1, file2):
    with open(file1, "r") as f1:
        with open(file2, "w") as f2:
            while True:
                data = f1.read(3)
                print(data)
                if data == "":
                    break
                f2.write(data)

copiar1("hola.bla", "copia.txt")
copiar2("hola.bla", "copia2.txt")

print('------------------------------------------')

with open("copia2.txt", "r") as f:
    data = f.readlines()
    print(data, len(data), [x for x in data])

with open("copia.txt", "w") as f:
    f.writelines(["Chau mundo\n", "Hola mundo"])

def filtrarArchivo(file1, file2):
    with open(file1, "r") as f1:
        with open(file2, "w") as f2:
            while True:
                data = f1.readline()
                if data == '':
                    break
                if data.startswith("#"):
                    continue
                f2.write(data)

filtrarArchivo("virus.py", "virus_saneado.py")

# Ejemplo de menú
while True:
    data = input("A que menu queres ingresar: 1) filtrado por dni \n2)filtrado por estado")
    if data == "1":
        # filtrar_por_dni(file)
        print("Llamo a funcion filtrar_por_dni")
    elif data == "2":
        # filtrar_por_estado(file)
        print("Llamo a funcion filtrar_por_estado")
    break

print('--------------------------------------------------------')

data = []
with open("phonebook.csv", "r") as f:
    full_data = f.read()
    for i, line in enumerate(full_data.split('\n')):
        if i == 0:
            continue
        celdas = line.split(',')
        if len(celdas) > 1:
            data.append(celdas)

print(data)
oldest = ""
for x in data:
    if x[3] > oldest:
        oldest = x[3]
print(oldest)

with open("salida.csv", "w") as out:
    for x in data:
        if x[3].split('-')[-1] <= "1980":
            out.write(",".join(x))
            out.write('\n')

import csv

gente = []
with open("phonebook.csv", "r") as f:
    fileCSV = csv.reader(f)
    for row in fileCSV:
        gente.append(row)
print(gente)

print('----------------------------------')
import json

data = {
    "gente": [
        {
            "nombre": "Juan", "apellido": "Perez"
        }
    ]
}
data_serializada = json.dumps(data)
print(data_serializada, type(data_serializada))

serializado = '{"gente":{"nombre":"Maria", "apellido": "Garcia"}}'
data_deserializada = json.loads(serializado)
print(data_deserializada, type(data_deserializada), data_deserializada['gente']['nombre'])

with open("gente.json", "w") as f:
    json.dump(data_deserializada, f, indent=4)

with open("gente.json", "r") as f:
    x = json.load(f)
    print(x, type(x))


print('-------------------------------------')