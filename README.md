# Maze White Label

Maze is a versatile white-label application designed for car and motorcycle selling brands. With Maze, users can seamlessly explore and select vehicles that align with their preferences and needs.

## What you'll see in this readme:

- [Introduction](#introduction)
- [How to Run Maze](#how-to-run-maze)
- [How the White Label Works](#how-the-white-label-works)
- [About Json Server](#about-json-server)
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
