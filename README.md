# Hian Gee's Data Science Portfolio

## [Project 1: Web Scraping for Game Hero Skin Wallpapers](https://github.com/ooihiangee/Data-Science-Projects/tree/main/1.%20Web%20Scraping%20for%20Game%20Hero%20Skin%20Wallpapers)
* Used the requests library to send HTTP GET requests to a URL and retrieve JSON data containing information about heroes and their skins.
* Used the .json() method to parse the JSON response into a Python dictionary for easy manipulation.
* Implemented exception handling (try-except) to handle cases where the hero['skin_name'] key is missing in the JSON data.
* Used the open() function to create and write content to image files ('wb' mode for binary write).
* Utilised the time.sleep() function to introduce a delay between requests, preventing overwhelming the server.

I was able to scrape the hero wallpapers from the official website using Python.
