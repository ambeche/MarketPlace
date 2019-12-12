# Project MARKET PLACE

**Media sharing application for people who want to sell or purchase goods over the internet.**

**User stories:**
* As a user, I want to be able to see a variety of products provided by different sellers. I can login to the application to be granted more privileges like commenting or buying some products, etc. In the future, if I want to sell something, I can be able to use seller feature.

**Team member:**
* Vy Nguyen - Zakaria Ziouziou – Tamanji Che

**[Link to the running app](https://10.114.32.156/bigHome/html/index.html)** Note - Metropolia's VPN required to open link



## 1. Technical
* Relational database on MariaDB server

* Backend application on Node server (proxy through http server)

* Responsive frontend with HTML/CSS/JavaScript targeting mobile first 

* Https enabled on the application using a self-signed certificate

## 2. Prerequisites

 ### Install tools

* [Webstorm](https://www.jetbrains.com/student/) or
* VSCode (or Atom, Brackets, etc...)
* Some file transfer app like WinSCP, [FileZilla](https://filezilla-project.org/) or Cyberduck
* Node.js LTS version
* Metropolia VPN - Login credentials required
* Install and configure a LAAMP stack - Centos 7 was used to deploy this application
* [Configure https on Apache and generate a self-signed certificate](https://wiki.centos.org/HowTos/Https)
* To change the port number used for the application go to file MarketPlace/market.js and MarketPlace/secure/localhost.js

## 3. How to deploy from sources

**1. Git clone the project (https://github.com/ambeche/MarketPlace.git) to your server.**

**2. Go to your project folder**
```
cd MarketPlace
```

**3. Install require dependencies:**

"dependencies": {
   * "bcryptjs": "^2.4.3",
   * "body-parser": "^1.19.0",
   * "cors": "^2.8.5",
   * "cryptr": "^6.0.1",
   * "dotenv": "^8.2.0",
   * "exif": "^0.6.0",
   * "express": "^4.17.1",
   * "express-validator": "^6.3.0",
   * "fetch": "^1.1.0",
   * "jsonwebtoken": "^8.5.1",
   * "multer": "^1.4.2",
   * "mysql2": "^2.0.2",
   * "passport": "^0.4.1",
   * "passport-jwt": "^4.0.0",
   * "passport-local": "^1.0.0",
   * "path": "^0.12.7",
   * "sharp": "^0.23.4"
  },
  
  "devDependencies": {
   * "express-session": "^1.17.0",
   * "nodemon": "^2.0.1"
  }
  
  **Run _npm install_ will install all modules listed as dependencies in package.json**
  
  **4. Import the database**
  
  * Download the database from [here](https://github.com/ambeche/MarketPlace/blob/master/newMarketPlace.sql)
  
  * First, log in to the database as root or another user with sufficient privileges to create new databases:
  
  ```
  mysql -u root -p
  ```
  
  * This will bring you into the MySQL shell prompt. Next, create a new database with the following command. In this example, the new database is called new_database:
  
  ```
  mysql> CREATE DATABASE new_database;
  ```
  
  * You’ll see this output confirming that it was created.

  ```
  Query OK, 1 row affected (0.00 sec)
  ```
  
  * Then exit the MySQL shell by pressing CTRL+D. From the normal command line, you can import the dump file with the following command:
  
  ```
  mysql -u username -p new_database < data-dump.sql
  ```
  
    * username is the username you can log in to the database with
    
    * newdatabase is the name of the freshly created database

    * data-dump.sql is the data dump file to be imported, located in the current directory
    
   
   * If the command runs successfully, it won’t produce any output. If any errors occur during the process, mysql will print them to the terminal instead.
  
  **5.Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:**
  
  ``` 
  DB_HOST=localhost
  DB_USER=root
  DB_PASS=s1mpl3 
  DB_NAME=yourDB
  ```
  
  **6. Run the app**
  
  ``` 
  node market.js
  ```



  
  
  
  
  
  
