import requests
from bs4 import BeautifulSoup
import cv2
import random

# set up image parser
# then set up databasing

def mulSch(inp):
    spl = inp.split(" ")
    res = inp
    if len(spl) > 1:
        res = ""
        for word in spl:
            res += word + "%20"
    return res

# &ved= is appended to scraped urls
def urlWasher(href):
    washed = href.split("&",1)
    return washed[0]

def image_reader(f):
    return
    

i = input("Search some style: ")

search = mulSch(i)
res = requests.get("https://www.google.com/search?tbm=isch&q=${}".format(search))

parsed = BeautifulSoup(res.text, "html.parser")
txt = parsed.get_text()

all_href = [urlWasher(j.get('href')) for j in parsed.find_all('a')]
cut_href = all_href[random.randint(0,len(all_href))]

print(all_href)