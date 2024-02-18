# Maze White Label

Maze is a versatile white-label application designed for car and motorcycle selling brands. With Maze, users can seamlessly explore and select vehicles that align with their preferences and needs.

## What you'll see in this readme:

- [Introduction](#introduction)
- [How to Run Maze](#how-to-run-maze)
- [How the White Label Works](#how-the-white-label-works)
- [Project Structure](#project-structure)
- [Coding Patterns](#coding-patterns)

## Introduction

Developing feature-rich websites for multiple brands often involves significant time, resources, and technical expertise. With a white label application developers can create two or more websites with a single codebase. This approach not only saves time but also enhances scalability for businesses that may need to expand their online presence in the future.

A white label application is a pre-built software solution that can be rebranded and customized by businesses to suit their specific needs. If a company is owner of multiple brands it can create multiple websites with less money and way faster because the developers just need to code once because the code structure is basically the same for all websites. The downside of it is that if you have multiple websites they will have the same structure and the only difference between them are the texts, images and colors so the customization of those websites is more limited. The advantage of this kind of solution is that you need less developers, the codebase is easier to maintain compared to maintaining multiple websites with different codebases and this solution allow better scalability because if the company create or buy another brand you just need to add the texts, images and colors specific to that new brand to the code.

The idea behind this white-label application is to solve the problem of a company called Maze which wants a car selling and a motorcycle selling website. The company want a solution that doesn't involve many resources and a scalable solution because they may expand the Maze ecosystem in the future.

## How to Run Maze

Don't let the white-label thing scare you, running maze is as simple as running a regular application, in this section I'll guide you through this process.

**Project Dependencies:**

- ReactJS
- Typescript
- SASS
- NodeJS **(use V16.16.0 or higher)**

**Project Libraries:**

- React Router
- Axios
- Material UI
- Json Server

Before starting the installation process make sure that your NodeJS version is 16.16.0 or higher. If you don't know how to manage the node versions I strongly recommend you to download [NVM (Node Version Manager)](https://github.com/coreybutler/nvm-windows). If you don't know which NodeJS version you are using right now you should write `node -v` in the command prompt.

First things first, you need to clone the project. (I'm considering you use VSCode as your code editor)

1. At the top of the page you should click the green "<> code" button.
2. Select "https" and click in the button located to the right of the link in order to copy the project's url.

![Image describing the project clone process](readme-images/clone.jpg)

3. Open VSCode, select "terminal" and then "new terminal".

![Image describing how to open a terminal in VSCode](readme-images/vscode-terminal.jpg)

4. When the terminal is opened, you should type the following and press enter in order to download all the project dependencies and libraries: `yarn install` or the short one `yarn`. This process of downloading all the dependencies will not take long depending on your computer.
5. Now you'll need two terminals: one to run the project and other one to run the json server so the website lists can be fullfiled with data from a "fake api".
6. Starting with the json server, you'll need to type in one of the terminals you have opened: `npx json-server --watch db.json --d 3000`.

You use "--watch {file}" to specify the file where json server should get the "api" data and "--d {milliseconds}" to specify how long the json server should take (a.k.a the delay) to give you the response data. I recommend you to use this delay so the website look like a real world application where the API often take some seconds to answer your request.

7. In the second terminal, which is not beeing used yet, you can type two different commands to start the application:

`yarn start-mazecar`
or
`yarn start-mazemotorcycle`

The first command line will start the car selling brand "Maze Car" website, the second one will start the motorcycle selling brand "Maze Motorcycle" website. You will understand better how json server and the white label scripts work in the next sections of this readme.

**Important:** you can't run `yarn start-mazecar` and `yarn start-mazemotorcycle` at the same time, if you are running one of them and want to run the other you need to stop the current and start the one you want to execute.

If you execute `yarn start-mazecar` you will see this initial page:

![Maze Car initial page](readme-images/mazecar-initial.jpg)

If you execute `yarn start-mazemotorcycle` you will see this initial page:

![Maze Motorcycle initial page](readme-images/mazemotorcycle-initial.jpg)

## How The White Label Works

Customizing the white label for this project is a straightforward process, and this section explains the technical details of this process.

### Environment Variables and Brand Configuration

The white label functionality relies on two main components:

1. **Changing Environment Variables:**

   - Update environment variables to correspond to the desired brand.
   - Use scripts in the `package.json` file to set the environment folder the application will use.

   ![Maze Initialization Scripts](readme-images/package-scripts.jpg)

   - The scripts inside the red square determine which env folder the application will look at. For example, `yarn start-mazecar` uses the `env/mazecar` folder.

   - The scripts in the yellow square initiate the application. (`yarn start-mazecar` and `yarn start-mazemotorcycle` as you saw before in this readme)

### Brand-specific Images and Style Colors

To customize brand-specific images and style colors, the application is using two scripts located in the `src/scripts` folder:

1. **`set-colors.cjs` Script:**

   - Changes the import keyword of the color variable file inside `src/styles/index.scss`. For example, running `yarn start-mazecar` will import "@import 'variables/mazecar-colors';".

   ![Maze Set Colors Script](readme-images/set-colors.jpg)
   ![Maze Color Variables Import](readme-images/style-index.jpg)

2. **`set-images.cjs` Script:**
   - Change which images are exported by the `src/assets/index.js` file. In this case I'm changing the exports to get the logo, banner image and the images of the "brands that we work with" section of each brand.

   ![Maze Set Images Script](readme-images/set-images.jpg)
   ![Maze Images Import](readme-images/images-index.jpg)

## Project Structure

The project follows a well-organized folder structure to enhance readability and maintainability. Here's an overview of the main directories and their purposes:

```text
├── /env # Project enviroment variables
│   	├─ /mazecar 
│       └── /mazemotorcycle
│ 		
├── /public # Public assets (HTML, Favicon, etc..)
├── /src # Application source code
│    ├── /assets # Images and Icons
│    │        ├─ /images 
│    │        │   ├─ /mazecar
│    │	      │	  └── /mazemotorcycle
│    │	      └── index.js
│    ├── /components # Components used throughout the project
│    │        ├─ /component1
│    │        │	    ├─ index.tsx
│    │	      │	    └── index.scss
│    │ 	      └── index.ts
│    ├── /constants # Global constant variables
│    │        ├─ constant1.ts
│    │ 	      └── index.ts
│    ├── /hooks # Custom hooks
│    │    	 ├─  use-request.ts
│    │ 	         └── index.ts
│    ├── /interfaces # Global interfaces and types
│    │        ├─ interface1.ts
│    │ 	      └── index.ts
│    ├── /pages # Main application pages
│    │  	   ├─ /main 
│    │         │   │ 	├─ /components # Components specific to the page
│    │         │   │ 	│	   ├─ /component1
│    │         │   │ 	│	   └── index.ts
│    │	       │   │ 	├─ /interfaces # Interfaces and types specific to the page
│    │         │   │ 	│	   ├─ interface1.ts
│    │         │   │ 	│	   └── index.ts
│    │	       │   │ 	└── /utils # Util functions specific to the page
│    │         │   │  		   ├─ util1.ts
│    │         │   │ 		   └── index.ts
│    │         │   ├─ index.tsx
│    │         │   └── styles.scss
│    │         │     
│    │         └── index.ts
│    ├─ /scripts # White label scripts
│    │ 	   └── index.ts
│    ├─ /styles # Color variables and sass mixins
│    │  	│   ├─ /mixins 
│    │          │   │	   ├─ breakpoints.scss
│    │	        │   │	   └── container.scss
│    │	        │   └── /variables	
│    │          │   	   ├─ mazecar-colors.scss
│    │	        │	   └── mazemotorcycle-colors.scss
│    │          └── index.scss
│    │
│    │
│    ├── index.scss # Global styles
│    └── index.tsx # ReactJS index page
│
├── db.json # Fake database where json-server will look at when you start it
├── json-server.json # Json-server configuration file
├── package.json # Node.js package file
├── tsconfig.json # Typescript configuration file
├── README.md # Project documentation
└── LICENSE # Project license file
```

Feel free to explore each directory to understand its specific role and contribution to the overall project structure.
