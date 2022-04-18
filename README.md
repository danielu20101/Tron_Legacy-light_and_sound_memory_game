# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Daniel Unhuryan

Time spent: 8 hours

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
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

[background coloring](https://user-images.githubusercontent.com/62815005/161357068-46a7288d-eef3-48df-bd6f-aa7b1c940ede.gif)
![button resizing css](https://user-images.githubusercontent.com/62815005/161357078-8be59b65-7368-4bd5-8921-574379a39e37.gif)
![class_tags](https://user-images.githubusercontent.com/62815005/161357085-12dbf959-f3e2-4b3b-94de-98ff5c8ca247.gif)
![cssStylesButtonColors](https://user-images.githubusercontent.com/62815005/161357100-932c4c2d-e1d6-4e04-a701-e7e9421c6a90.gif)
![frequencies](https://user-images.githubusercontent.com/62815005/161357104-cc28ee6c-e6dd-4d48-ac74-5f29e797ebab.gif)
![Game Logic](https://user-images.githubusercontent.com/62815005/161357107-7aa0d01c-c5a6-4511-95fe-3c1dfba46e4a.gif)
![htmlstyle](https://user-images.githubusercontent.com/62815005/161357112-9b56f2b8-0cbf-493d-83f2-0346f68c1e92.gif)
![start stop](https://user-images.githubusercontent.com/62815005/161357113-9dcc629c-53a5-48ba-abb7-c6a397dc545f.gif)
![variables](https://user-images.githubusercontent.com/62815005/161357116-73d05332-89b3-48f9-8459-09fcad26fed7.gif)


## Reflection Questions!

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

        I used stackoverflow, mdndocumentation, and youtube vidoes to complete the project. This youtuber below
provided the resources and idea of the clock function: https://www.youtube.com/watch?v=_a4XCarxwr8, which I leveraged in my javascript code. Here is the stack overflow link which I used to figure out how to configure the background images for each of the buttons.               https://stackoverflow.com/questions/23001031/how-do-i-make-an-image-fit-inside-a-button-in-css
https://stackoverflow.com/questions/67133137/error-xindex-is-undefined-in-slides-html-css-js
https://stackoverflow.com/questions/71662554/cant-stop-the-audio-with-js
        

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    
      The hardest challenge was to complete the additional features associated with the project, particularly the stopwatch. The clock would go under 00:00 to negative numbers, and also not call the endgame() method which was created in the files. The purpose was to see how many levels the user can finish in the allotted time. One way I overcame this was by realizing I was not calling the clearInterval() function which resets the clock to 00:00. Another issue was that one of my logical operators timeSecond <= 0 was not included in my if statement which set gameplaying to false. After implementing these fixes, the issue in the game was resolved, and I achieved a working clock. 
       In addition, I spent slightly longer than expected on a feature when I realized the background images that I set for each of the buttons were not scaled. Only a portion of each of the buttons would fit. to fix this, I searched online for a short and simple way to do this, which was simply just using background-cover: in the CSS document for each button.active class. All in all, the basic requirements of the project were not a problem, and I had a great experience working on it while sipping a cup of coffee in the morning before school!    
        
3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    As a student who has previously switched from pre-medicine to computer science before enrolling into college, I am constantly intrigued how to use technology to help those who are in need. After completing this project, I wonder how can I leverage javascript, css, and html to develop a web based course for people who have neurological disorders, and how will I store all this data related to each component of the course in one web application? I am a firm believer in technology use to support the mentally ill, and think there is yet much to add in this field. 
    Another question I have is more technical related to this project, but it is under which circumstances does a website crash occur? Is it the VRAM that gets used up to its entirity, or is it the number of asynchronous requests being made which overload a server? I hope to answer these questions soon from my professors, and through research during my own time.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    
    As a long term project, I would like to create a mini database containing several short games like this, such as connect 4, battleship, tic-tac-toe, and then configure a network which would allow players to compete against each other. It would be awesome to implement a leaderboard board for people to see how they place against each other. I think this game could be a little more intriguing if the body background colors start changing once some certain level threshold is passed. This could indicate that a person has reached a "master" ranking or a "memory king" award for being in the top 10% of all player performances.   



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
