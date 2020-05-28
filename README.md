# NodeJS Course

The Complete [Node.js Developer Course](https://www.udemy.com/share/101WGiAEMecllbQHwB/) (3rd Edition) taught by Andrew Mead and Rob Percival @Udemy.

Learn Node.js by building real-world applications with Node, Express, MongoDB, Jest, and more!

## What you'll learn

:heavy_check_mark: Build, test, and launch Node apps

:heavy_check_mark: Create Express web servers and APIs

:heavy_check_mark: Create Express web servers and APIs

:heavy_check_mark: Store data with Mongoose and MongoDB

:heavy_check_mark: Use cutting-edge ES6/ES7 JavaScript

:heavy_check_mark: Deploy your Node apps to production

:heavy_check_mark: Create real-time web apps with SocketIO

## The Projects (and notes taken thoughout the course).

### A Note-Taking App

#### Scripts you can run in your terminal within this app...

- node app.js add --title="Title for the note" --body="The note itself."
- node app.js remove --title="Title for the note"
- node app.js list
- node app.js read --title="Title for the note"

#### For debugging...

- Add the word `debugger` to the code.
- Run the script `node inspect app.js` or `node --inspect-brk app.js` if you are getting an error.
- Go to Chrome and insert the following url `chrome://inspect/#devices`.
- If necessary, go to `Discover network targets`'s `Configure...` button and add `localhost:9229` and/or `127.0.0.1:9229`.
- Click one of the `Remote Target`'s `inspect` button.
- On the `Source` tap you can add your project under the `FileSystem`.
- Inspect the information given to find your bug.

### A Weather Application that Interacts with the MapBox and WeatherStack APIs

#### Scripts you can run in your terminal within this app...

- npm run start

Note: This will fire up the local server so you can view the application locally in your browser (on localhost:3000). This is possible because the script `"start": "node src/app.js"` was added to package.json.

- npm run dev

Note: This starts up the local developement server easily. This is possible because the script `"dev": "nodemon src/app.js -e js,hbs"` was added to package.json.

#### Heroku...

- Sign up an account on [Heroku](www.heroku.com).
- Download the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
- Restart the terminal.
- Check if the tool has installed correctly by entering `heroku -v` on the terminal. If the output looks something like this `heroku/7.40.0 win32-x64 node-v12.16.2` it means everything went ok.
- Run the command `heroku login`. This will allow you to link the commands you run in your terminal to your heroku account so you manage your projects from Visual Studio Code.
- After running the previous command, press any key (except for `q`) which will open a new tap in the browser asking you to log in to your Heroku account.
- After logging in you can close the tap.
- For more information on this you can take a look at the [documentation](https://devcenter.heroku.com/articles/deploying-nodejs) on deploying NodeJS apps on Heroku.

- To set up your SSH public key file run the command `heroku keys:add` which will output the keys found and will ask you if you would like to upload it to Heroku? Type in `yes` and hit enter. Now that SSH key is associated with your Heroku account so that code can be sent back and forth safely.
- To create your Heroku application run the command `heroku create` or `heroku create name-of-the-project`(which you should run from the root of your project). The name of the project has to be unique not only on your account, but all around the web.
- From this you will get two URLs: the first will be your live URL where you can see your deployed website and the second will be the URL for the GIT repository where you should be pushing the code you want to deploy.
- Go to `package.json` under `scripts`. From there you can add the script `"start":"node src/app.js"`. We can use this command to start the application locally by running `npm run start` on the terminal. That is the command Heroku is going to run to start the application on their servers.
- On `src/app.js` we need to change the last line `app.listen(3000, () => {console.log("Server is up on port 3000.");});` to `app.listen(port, () => {console.log("Server is up on port " + port);});`. You should also add `const port = process.env.PORT || 3000` at the beggining of the file, right below the `app` variable.
- On `public/js/app.js` you are going to have to remove the domain inside `fetch` completely by changing the URL provided from `http://localhost:3000/weather?address=${location}` to `/weather?address=${location}`.
- Start the process of commiting your changes with `git status`, `git add .`, `git commit -m 'Setup app for Heroku'` and finally `git push`.
- To push to the Heroku remote, run `git push heroku master` on your terminal.

Note: If you have your API keys hidden in .env you may have to configure the variables into your Heroku account via the dashboard. For more information on this, click [here](https://devcenter.heroku.com/articles/config-vars).

#### My Weather App

[![Weather-App video](https://i.postimg.cc/Z5JZ3pSv/weather-app-pic.png)](https://www.dropbox.com/s/by17ivtn9okk6be/weatherNode.mp4?dl=0 "Weather-App")

- [Live Demo](https://santiagocodes-weather-app.herokuapp.com/): This live demo is for the project I completed for the class.

- [Github Repository](https://github.com/santiagocodes/weather-app-node): This is the github repository I created to contain my finished weather-app only. On this one I added different features that differ from the original project for this course (and on the repository you are currently on), like dark-mode and exploring with tailwindCSS.

### A task manager REST API complete with user accounts and authentication

### A real-time chat app with a client-side companion
