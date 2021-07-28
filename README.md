# frames-swiper-gui
Frames Swiper GUI Built in NextJS

# Setup
Clone this repo and install npm packages with below command

`npm install`

Run the development server

`npm run dev`

Application will open on `localhost:8080` click on `Go To frames`


# Codebase Instructions
The application is build on NextJS a server side rendering ReactJS framework [Using the following steps](https://nextjs.org/docs).

[NextJS](https://medium.com/eincode/what-are-the-benefits-of-the-next-js-framework-7c5b083c8d23#:~:text=of%20your%20competitors.-,Benefits%20for%20Development,by%20using%20the%20image%20component) helps in faster page loads and many other capabilities which can be leveraged in the future.

Used [DraftJS](https://draftjs.org/docs/getting-started) to render the rich text editing. DraftJS is build by facebook and has a large community

Below are the key components, files and data of the Frames Swiper GUI Application
1. Constant data structure `FRAME_SPEAKER_NOTES` which contains the frame image and the speaker notes, which eventually will come from the back end
2. Component `<ImageFrames>` Renders the the frame images and speaker notes in one full container
3. Component `<SpeakerNotesEditor>` renders the speaker note editor which is build on DraftJS
4. Components under the folder `EditorToolBar` is the custom tool bar for Bold Underline and Italics and color tools
5. All CSS styles are under `styles.css`




# Preview

![Frame Swiper Preview](https://raw.githubusercontent.com/JSsquare/frames-swiper-gui/main/public/Frames_Swiper.gif)
