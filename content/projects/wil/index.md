---
title: TubeHabit
technologies:
    - react
    - django
    - Docker
status: active
project: true
project_index: 2
thumbnail: ./thumbnail2.png
---

![TubeHabit thumbnail](./thumbnail2.png)
## Problem
- Looking for a place to live in big cities is hard
- One wants to live near friends, near work, near hobbies, and in certain areas
- No real state portal offered a way to search for properties within a commute time from a point

## Solution
- A system that calculates isochronic areas around a point
- Precalculating and caching distances for every 5min time, and rounding latitude and longitude to a certain floating point
- A search engine where areas can be combined. (e.g. 30min from work, 15min from friends)

