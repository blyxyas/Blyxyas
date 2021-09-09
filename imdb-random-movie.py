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
    
r = random.randint(0, len(movies) + 1)
print(f"###### MOVIE CHOSEN ###### \n {movies[round(r / 2)]} \n ###### LINK ###### \n {links[r]}")
