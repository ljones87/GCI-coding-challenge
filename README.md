
Simple starter using Express, Node, Postgresql, React, and Redux

I used a postgresql database and seeded it with included file data. I am unfamiliar with other databases so unfortunatley cannot include accurate instructions for the backend setup if not postgresql.


For my set up, here's what you'll have to do:


* `createdb gci`
* `npm install`
* `npm start`

The start script will run the app with nodemon. If you'd like to make changes to the code, run 'npm start-dev' which runs webpack watch mode, and nodemon, so any changes made the client or server directories should cause webpack to rebuild and the server to restart, respectively. Note that you may need to wait a moment for the webpack build to complete - if you refresh the page too soon, you may not see your changes.
