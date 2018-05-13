# Room Status
A small app which allows to increase or decrease the number of rooms to rent and adults or children who can live in the rooms. The app has been developed using technologies like Reactjs, bootstrap css and font-awesome icons.

## Getting Started

* Download and install node's latest version based on your system from [here](https://nodejs.org/en/download/)
* Install npm package manager
* Clone the project
* Under the root (room-status) directory run `npm install`

### Prerequisites

* All the required packages for this app have been listed under **package.json** file, some of them are needs to be installed menually and some of them come while creating app with create-react-app
* Menually needs to be installed includes-
  1. material-design-icons
* Rest of them come while creating app

### Installing
* Third point under **Getting started** will install all the required packages


## Usage

### To run the server:

* Under the root (room-status) directory run `npm start`
* The app will be accessible at [localhost:3000](http://localhost:3000)

### To run the test cases for the components:

* Test cases for the components have been written under root directory(room-status)/tests directory
* Under the root (room-status) directory run `npm test`

## Deployment
* Under the root (room-status) directory run `npm run build`
* Above command will create build of the app and put it inside **build** directory which can be found inside root directory of the app
* You can keep **build directory** as it is or you can move it anywhere else
* Install serve to run the build by running command `npm install -g serve`
* Go to build directory and run `serve -s .` or go to parent directory of **build** and run `serve -s build`
