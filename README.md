
Simple starter using Express, Node, Postgresql, React, and Redux

I used a postgresql database and seeded it with included file data. I am unfamiliar with other databases so unfortunatley cannot include accurate instructions for the backend setup if not postgresql.


For my set up, here's what you'll have to do:


* `createdb gci`
* `npm install`
* `npm start`

The start script will run the app with nodemon. If you'd like to make changes to the code, run 'npm start-dev' which runs webpack watch mode, and nodemon, so any changes made the client or server directories should cause webpack to rebuild and the server to restart, respectively. Note that you may need to wait a moment for the webpack build to complete - if you refresh the page too soon, you may not see your changes.


# Main Page
<img width="966" alt="screen shot 2017-09-27 at 10 56 43 am" src="https://user-images.githubusercontent.com/27159818/30926697-36efba06-a373-11e7-8758-c4282fd48737.png">

# Add New User
<img width="518" alt="screen shot 2017-09-27 at 10 56 51 am" src="https://user-images.githubusercontent.com/27159818/30926703-3e407782-a373-11e7-9ba2-9528177b514b.png">

# Update User
<img width="711" alt="screen shot 2017-09-27 at 10 56 59 am" src="https://user-images.githubusercontent.com/27159818/30926705-40a84fea-a373-11e7-8aa1-407a0e583ebb.png">
