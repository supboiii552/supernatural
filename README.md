a simple supernatural streaming site using vidlink api

fully static and hosted on github pages so feel free to fork it and make it run on your github pages site

if you fork pls star!

if you want another show to stream, fork the project and change the ID at line 53 in script.js:

`const url = `https://vidlink.pro/tv/1622/${s}/${e}`;

except take out 1622 and replace it with a show ID from this website: https://www.themoviedb.org/?language=en-US

if you want to add a movie or an anime look at VidLink.pro's docs and change the iframe code.

it is really janky at the moment so youhave to include all the episodes you want in the first part of the script.js file and keep the formatting exactly the same but with different episodes, otherwise the dropdown menu wont work.

i would advise against doing these steps, as it would probably be faster and more effective to make a new website with cleaner code and that is easier to customize
