max31855-node
=============
1. Install [node via homebrew](http://thechangelog.com/install-node-js-with-homebrew-on-os-x/)
2. Clone the project

		$ git clone git@github.com:esetnik/max31855-node.git
		Cloning into 'max31855-node'...
		remote: Counting objects: 4, done.
		remote: Compressing objects: 100% (3/3), done.
		remote: Total 4 (delta 0), reused 0 (delta 0)
		Receiving objects: 100% (4/4), done.
		Checking connectivity... done.

3. Install dependencies

		$ cd max31855-node && npm install
		static-favicon@1.0.2 node_modules/static-favicon
		
		morgan@1.0.1 node_modules/morgan
		└── bytes@0.3.0
		
		cookie-parser@1.0.1 node_modules/cookie-parser
		├── cookie-signature@1.0.3
		└── cookie@0.1.0
		...
4. Install [nodemon](https://github.com/remy/nodemon) (optional)

		$ npm install nodemon -g
		/usr/local/bin/nodemon -> /usr/local/lib/node_modules/nodemon/bin/nodemon.js
		nodemon@1.2.1 /usr/local/lib/node_modules/nodemon
		├── minimatch@0.3.0 (sigmund@1.0.0, lru-cache@2.5.0)
		├── ps-tree@0.0.3 (event-stream@0.5.3)
		└── update-notifier@0.1.10 (semver@2.3.2, chalk@0.4.0, request@2.40.0, configstore@0.3.1)

5. Run the project

		$ node app
		Express server listening on port 3000
		adding array to data 5,18
		adding array to data 7,19
		...
		
		(or with nodemon)
		$ nodemon app
		8 Aug 12:31:17 - [nodemon] v1.2.1
		8 Aug 12:31:17 - [nodemon] to restart at any time, enter `rs`
		8 Aug 12:31:17 - [nodemon] watching: *.*
		8 Aug 12:31:17 - [nodemon] starting `node app ./bin/www`
		Express server listening on port 3000
		adding array to data 2,8
		adding array to data 8,43
6. Browse to [http://localhost:3000](http://localhost:3000)
		
