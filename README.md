# Floesia API
API for managing [Floesia](https://floesia.netlify.app/). You can find the frontend of this project [here](https://github.com/raymag/floesia).

|  |  |
| --- | --- |
| <img height="250" src="https://user-images.githubusercontent.com/29918030/95920186-53a3fe80-0d85-11eb-96ef-a7e8a5986910.png" style="display:inline;float:left"/> | <img height="250" src="https://user-images.githubusercontent.com/29918030/95921810-59e7aa00-0d88-11eb-8253-2eacfa2d9796.png"  style="display:inline;float:right"/> |

---

## Contributing
If you want to contribute to this project, take a look at the issues section, make a fork of this repository, be respectful with others and go on. All help is welcome. 
Also, before contributing, be sure to read our [Contributing Guidelines](https://github.com/raymag/floesia-api/blob/main/CONTRIBUTING.md) and our [Code of Conduct](https://github.com/raymag/floesia-api/blob/main/CODE_OF_CONDUCT.md) since you need to agree with them before contributing to this repository.

## Setting up a Development Environment

If you are planning on contributing to this project or just wanna play with it. You'll going to need to setup a local development environment. Here are some guidelines you can follow in order to make it done.

### 1. Clone the repository

If you are going to contribute to it, first make a **fork** of it and then clone it in your local machine. 
```bash
git clone https://github.com/yourGithubUsername/floesia-api
```

If you're only going to test it out, you can directly clone this repository with: 
```bash
git clone https://github.com/raymag/floesia-api
```

### 2. Install dependencies

This project is build using [NodeJS](https://nodejs.org/en/download/), so you'll need to have it installed on your local machine.

Now that you have already clonned the repository, open up the terminal on the clonned folder and use [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) to install the node dependencies:

For npm:
```bash
npm install
```

For yarn:
```bash
yarn install
```

### 3. Setup .env file

In order to function properly, this project depends on some environment variables which you can define with a *.env* file. You can take a look at the [.env_example](https://github.com/raymag/floesia-api/blob/main/.env_example) to see how to implement your own .env file.

### 4. Run

Now all you need to do is execute the project and you're set to do whatever you want to.
For npm:
```bash
npm run dev
```
For yarn:
```bash
yarn run dev
```
