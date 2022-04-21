# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Daniel Unhuryan

Time spent: 6 hours (just game)

Link to project: https://glitch.com/edit/#!/circular-plucky-cloudberry?path=README.md%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![success](https://user-images.githubusercontent.com/62815005/164352521-72205148-a582-4b90-a8f7-dc2c118835fd.gif)
![Losing Lives](https://user-images.githubusercontent.com/62815005/164352528-2beaa438-6cd3-422f-9b1e-9608f7b5b3f5.gif)

## Reflection Questions!

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

        I used stackoverflow, mdndocumentation, and youtube vidoes to complete the project. This youtuber below
        provided the resources and idea of the clock function: https://www.youtube.com/watch?v=_a4XCarxwr8, which I leveraged in my javascript code. Below are the stack overflow links which I used to configure the background images for each of the buttons.
        
        https://stackoverflow.com/questions/23001031/how-do-i-make-an-image-fit-inside-a-button-in-css
        https://stackoverflow.com/questions/67133137/error-xindex-is-undefined-in-slides-html-css-js
        https://stackoverflow.com/questions/71662554/cant-stop-the-audio-with-js
        

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    
        The hardest challenge was to complete the 3 lives for each user and the countDown feature. The clock would go under 00:00 to negative numbers, and fail to call endgame() once the time limit has been reached. There was also slight trouble resetting the clock after the user guesses the correct sequence, but this was an easy fix by just creating a reset function which sets the clock back to 20 seconds in each iteration. One way I overcame this was by realizing I was not calling the clearInterval() function which resets the clock to 00:00. To program the game so that it calls teh endgame() function appropriately, I implemented the logical operator timeSecond <= 0 to set gameplaying to false. After implementing these fixes, the issue in the game was resolved. 
        I spent slightly longer than expected on the lives feature. I could not get the feature to work because I was using a querySelectorAll() method instead of querySelector from the html document, where I declared the lives as 3 hearts. I figured it would be wise to use a variable, totalLost, which would be incremented each time the user guessed the right button. Then, when the variable gets incremented, the subtraction occurs in the html and CSS document to display the hearts. Also, I was getting the mistake of calling losegame() each time one heart was subtracted. This was fixed by calling losegame() under the condition of when 3 hearts are subtracted. I did this by doing totalLost === 3 && losegame() as the final condition. This fixed the issue of calling losegame if and only if there are no hearts remaining. All in all, had a fun experience working on it.  
        
3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

        As a student who has previously switched from pre-medicine to computer science & engineering the summer before enrolling into college, I am constantly intrigued how to use technology to help those who have neuroloical disorders. 
        
        After completing this project, I wonder how can I leverage javascript, css, and html technologies to develop a web based course for people who have neurological disorders, and how will I store all this data related to each component of the course in one web application? I am a firm believer in technology use to support the mentally ill, and think there is plenty to add in this field. 
        
        Another question I have is under which circumstances does a website crash occur? Is it the VRAM that gets used up to its entirity, or is it the number of asynchronous requests being made which overload a server? I hope to answer these questions soon from my professors, and through research during my own time.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    
        Since I achieved the functionality goals of the project, I would like to do some research on CSS and JavaScript graphics so that the project could can carry a little more engergy. I would implement a feature where the buttons move up and down, a cool mouse cursor instead of just simply staying in one static position, and also implmenent while the user does not do anything on the screen.  For the long term, I would create a mini collection of games like connect 4, battleship, and tic-tac-toe, but then configure a network which would allow players to compete against each other. It would be pretty cool to implement a leaderboard board for people to see how they place against each other.   



## Interview Recording URL Link

https://drive.google.com/drive/folders/1uj6vO2px3UL_eMLLCOawD3YmB9O3NidC?usp=sharing


## License

    Copyright [Daniel Unhuryan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
