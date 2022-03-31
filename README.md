# Pre-work - *Memory Game*

**FRIENDS Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Deland Chen**

Time spent: **8** hours spent in total

Link to project: https://spiky-colossal-isthmus.glitch.me

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
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://s3.amazonaws.com/img0.recordit.co/de7I8GKwGJ.mp4?AWSAccessKeyId=AKIAUQ5RURZ7ND2T2B6I&Expires=1648735489&Signature=C7yXPMoNM3Lh42e0cle17X9UstE%3D)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

- I visited various HTML, CSS, and JavaScript learning/documentation websites such as W3School and developer.mozilla.org whenever I got stuck on a feature, needed to understand how a certain method worked, or needed a quick refresher on some elements. I used SITE program pre-work guide and YouTube videoes for the more difficult sections such as implementing audio.


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

- A challenge I faced was adding the 3 strikes feature, which gave a user 3 wrong guesses before they lost. I knew where to put the pieces of code, but the program kept breaking. For example: the CSS wouldn't place the strike buttons where I wanted, the "YOU LOST" alert would appear before the 3rd strike lit up, and finally whenever the user started a new game, the 1st and 2nd strikes would reset but the 3rd one would stay lit. On top of all that, this was when I realized my code wasn't as organized as I thought, which made debugging harder. To solve this, I started by refactoring and commenting on my code which made it much easier to locate the bugs. For the CSS issue, I searched online for a flexbox guide and figured out how to use a combination of flex-direction, justify-content, and margins to fix my buttons. For the 2nd problem, I used google and learned that the DOM takes time to update, and my JavaScript function did not wait for that. I looked up a method that could delay a function from executing until after my HTML element updated. The fix was a setTimeout method that was additionally used in the clue sequence playing functions. Overcoming that helped me understand the setTimeout method better, which subsequently gave me a stronger understanding of how the clue playing sequence worked. And finally, fixing this bug also fixed my last bug, which made sense as they were clearly connected. The delayed DOM update for my 3rd strike button led to it not updating with the other strike buttons.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

- How do I create a more unique project? I enjoy working in teams because my teammates always bring a new perspective and we can bounce ideas off each other. But whenever I work alone, I feel like my creative side just turns off until a lightbulb turns on. Coming up with a innovative idea that also doesn't have a lot of holes is extremely hard. So to sum up my question: what do you personally do to gain inspiration?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

- If I had a few more hours, I would like to implement a more interesting tone for the button audio. My project was FRIENDS themed and I wanted to find audio that matched, but I couldn't. If I had more time, I would have taken an MP3 file of the theme song and edited it down to sound bites I could've added to my game. Additionally, I felt my JavaScript code was organized, but my CSS file was a little messy. With extra time, I would have commented my CSS code better.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright DELAND CHEN

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
