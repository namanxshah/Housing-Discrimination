# Not rent, but your identity could be the dealbreaker while house-hunting in India

## Project 3 - Lede 2025

### Story URL
[https://namanxshah.github.io/Housing-Discrimination/](https://namanxshah.github.io/Housing-Discrimination/)

### Objective and inspiration
I was unsatisfied with my first two projects, so I wanted my final project to be at least a little fulfilling. I wanted to utilise as many learnings from Lede as I could. So I looked for a story idea that would help me achieve this. [One of the projects](https://carlython26.github.io/dutch_only_housing_discrimination_against_internationals_netherlands/) from Lede 2024 helped me arrive at this idea.

### New skills applied
This story gave me the opportunity to apply multiple skills and tools that I learnt at Lede. I scraped the housing website using undocumented API, BeautifulSoup, and Pandas. I also used mapbox storytelling, as well as, video scrollytelling.

### How I approached the story
Through my own experience, as well as through the accounts of people around me, I knew that house-hunting in Indian cities is filled with discriminatory practices. So I decided to showcase this through my neighbourhood and used the data from one of the popular housing websites.

### Data collection
I scraped the data of all the houses listed for renting in Noida's Sector-19. The listings were made on [nobrokers.in](nobrokers.in). The whole process of scraping is explained in the [Pandas Scraping](https://github.com/namanxshah/Housing-Discrimination/blob/main/Data%20collection/Pandas%20scraping.ipynb) file in the Data collection folder.

### Explanation for anomaly
The listing page for Sector-19 had 27 houses available for rent on the day of scraping (26 July, 2025 – the webpage can be found in the Data collection folder). However, upon putting the coordinates of those houses on geojson.io, it was found that four houses were located outside the periphery of Sector-19. So the final analysis was done on the 23 houses located inside Sector-19.

### Findings
I found that 10 of the 23 homeowners preferred families. While seven preferred bachelors (two of these seven listings specified female bachelors, one mentioned males, and four didn’t mention any gender). Just six were open to tenants with any marital status. And of these six, two didn't want non-vegetarian tenants.

### Shortcomings
I think some data visualization could have added value to this piece. Also, the selected color palette could have been better.