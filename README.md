# `Welcome to the Feelings Forum`

The feelings Forum is a single page application utilizing React, HTMl, and CSS.  How are you feeling today? We would love to hear about it. Share your feelings, thoughts, or words of wisdom on the "Share" page. Or, gain some inspiration by visiting the "Feelings" page. Whatever you are feeling, it is valid and important. 

## Creators

Corey Schadeck
Jonathan Aguilar
William Hwang

### `As a User`
1. The user will land on the About Page where they can enjoy some sunshine, and receive a pleasant welcome message that also directs how to navigate through out the page.
2. The user can select from the Nav Bar buttons to view the Feelings page to read the posted Feelings. The user can also "like" a feeling by clicking a button on a feeling. The like will persist any added "likes".
3. The user can also choose to submit their own feeling(s) but clicking the share button in the Nav Bar. This will take them to a form page to submit their name and feeling. Upon clicking "Share your feelings to the world" they will be taken back to the feelings page to view their feelings being added to the forum. The feeling is automatically time stamped on the post.

### `Local Server run build`

To run the backend API:
1. Open a terminal and navigate to the project directory.
2. Enter the command `json-server --watch db.json`
3. This will start your back end server
4. API `http://localhost:3000/feelings`



To run the page to the browser
1. Open a separate terminal in the same directory 
2. Enter the command `npm start`
3. This will start your page to render to the default browser
4. Server hub `http://localhost:3001/feelings`

####

### Repo file tree
​
```
├── db.json
├── package-lock.json
├── package.json
├── public
│  ├── favicon.ico
│  ├── index.html
│  ├── logo192.png
│  ├── logo512.png
│  ├── manifest.json
│  └── robots.txt
├── README.md
└── src
   ├── App.css
   ├── App.js
   ├── App.test.js
   ├── components
   │  ├── About.js
   │  ├── FeelingCard.js
   │  ├── FeelingsContainer.js
   │  ├── Form.js
   │  └── NavBar.js
   ├── images
   │  ├── clouds.jpg
   │  └── sun.gif
   ├── index.css
   ├── index.js
   ├── logo.svg
   ├── reportWebVitals.js
   └── setupTests.js
```
Collapse
