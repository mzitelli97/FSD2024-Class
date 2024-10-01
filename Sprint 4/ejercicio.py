import csv

data = None
with open("grades.csv", "r") as f:
    csv_reader = csv.DictReader(f)
    data = list(csv_reader)

print(data)

for student in data:
    math = int(student['Math'])
    science = int(student['Science'])
    english = int(student['English'])
    average = (math + science + english) / 3
    student['Average'] = f"{average:.2f}"
print(data)
fieldnames = csv_reader.fieldnames
fieldnames.append('Average')

min_average = float(input("Ingrese el promedio mínimo: "))

filter_data = [student for student in data if float(student['Average']) > min_average]
print(filter_data)

with open("output.csv", "w") as f:
    csv_writer = csv.DictWriter(f, fieldnames=fieldnames)
    csv_writer.writeheader()
    csv_writer.writerows(filter_data)
