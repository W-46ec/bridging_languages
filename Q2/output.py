import csv

def getParsedString(filename):
    strings = []

    with open(filename, 'r') as csvFile:
        csvReader = csv.reader(csvFile)

        for line in csvReader:
            strings.append(line[0])

    fullString = ''

    iterStrings = []
    for index, string in enumerate(strings):
        if index != 0:
            iterStrings.append(string)

    if strings[0] == 'camelCase':
        for i1, string in enumerate(iterStrings):
            for i2, char in enumerate(string):
                if i2 == 0 and i1 != 0:
                    fullString += char.upper()
                else:
                    fullString += char

    elif strings[0] == 'PascalCase':
        for string in iterStrings:
            for index, char in enumerate(string):
                if index == 0:
                    fullString += char.upper()
                else:
                    fullString += char
            
    elif strings[0] == 'snake_case':
        for string in iterStrings:
            fullString += string
            fullString += '_'

    elif strings[0] == 'kebab-case':
        for string in iterStrings:
            fullString += string
            fullString += '-'

    if strings[0] == 'snake_case' or strings[0] == 'kebab-case':
        fullString = fullString[:-1]

    return fullString

if __name__ == '__main__':
    string = getParsedString('input.txt')
    print(string)
