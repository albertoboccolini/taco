<p align="center">
  <img width="400" height="400" src="logo-white.png" style="text-align: center">
</p>

# Taco | Tools All Cloud One
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Your versatile and self-hosted digital companion that provides you with a selection of the best online
tools right at your fingertips. With Taco, you can create a customized environment to manage a wide
range of digital tasks without the need to rely on external services.
## Getting Started

1. Clone this repository.
   ````bash
   $ git clone https://www.github.com/albertoboccolini/taco
    ````
2. Go to the repo folder.
   ````bash
   $ cd taco
   ````

3. Start taco with npm in detached mode on port 4000:

   ````bash
   $ npm run taco
   ````

4. Open [http://localhost:4000](http://localhost:4000) with your browser to use taco.
## Self-host taco using Docker

````bash
   $ docker run -d -p 4000:4000 albertoboccolini/taco:latest
````
## Build taco Docker image (for develop purposes)

1. Clone this repository.
   ````bash
   $ git clone https://www.github.com/albertoboccolini/taco
    ````
2. Go to the repo folder.
   ````bash
   $ cd taco
   ````
3. Make some changes.
4. Run the following command (where x.y.z should match the taco version in the package.json).
   ````bash
   $ docker build -t albertoboccolini/taco:x.y.z .
   ````
5. Spin a container using the new build and verify that taco works properly.
6. Push the docker image just built to docker hub with `docker push albertoboccolini/taco:x.y.z`
## Work with us
- See [Contributing Guidelines](CONTRIBUTING.md) and start contribute to taco.

**created by [albertoboccolini](https://github.com/albertoboccolini).**