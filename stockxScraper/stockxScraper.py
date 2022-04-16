import requests
from bs4 import BeautifulSoup

LINK = input("Podaj link: ")
LAST_ID = int(input("Last ID: "))
cookies = {"U": "63e0c6edb234663123ae5747992f0c47", "s": "ae7f73c74e02a9fa40142f8ff55f0965"}
HEADERS = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36 OPR/85.0.4341.68"}

final = ''

def getDataFromLink(link, lastId):
    r = requests.get(link, headers=HEADERS)
    r = BeautifulSoup(r.content)

    endText = '{\n'

    endText += '\t"ID": ' + '"' + str(lastId+1) + '"' + ',\n' #ID

    endText += '\t"Item name": ' + '"' + r.find_all("p")[0].get_text() + '"' + ',\n' # ITEM NAME

    endText += '\t"SKU": ' + '"' + r.find('p', {'class': 'css-ziwxw9'}).get_text() + '"' + ',\n' # SKU

    endText += '\t"ImgLink": ' + '"' + r.find('img', {'class': 'chakra-image'})['src'] + '"' + ',\n' # Img Link
    
    endText += '\t"stockxLink": ' + '"' + link + '"' + '\n' + '},\n' # stockx link

    return endText

with open('D:\\programowaniePython\\priv\\bazaZguiJS\\test\\links.txt', 'r') as f:
    text = f.read()

linksList = text.split('\n')

for i in linksList:
    print(linksList.index(i)+1)
    final += getDataFromLink(i, LAST_ID+linksList.index(i))


with open('test.txt', 'w') as f:
    f.write(final)


