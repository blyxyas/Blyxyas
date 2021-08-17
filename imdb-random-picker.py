"""
README
BeautifulSoup library is used.
So...

"""
from bs4 import BeautifulSoup
import requests
import random

url = "https://www.imdb.com/chart/top/"
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

movies = []

# Detect Movie
eq = soup.find_all('td', class_='titleColumn')
movies = []
links = []

for link in soup.find_all('a'):
    href = link.get('href')
    
    if str(href).startswith('/title/'):
        links.append('https://www.imdb.com' + str(href))
    else:
        pass

for i in eq:
    movie = str(i.text.strip())
    movies.append(movie)
    
r = random.randint(0, len(movies))

class color:
    HEADER = '\033[94m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

print(f"{color.HEADER} Movie Chosen:")
print(f"{color.OKGREEN}{color.BOLD}{movies[r]}{color.ENDC}")
print(f"{color.WARNING}Or... A random link!")
print(f"{color.OKGREEN}{links[r]}{color.ENDC}")