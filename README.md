
# trwer（hello-world 项目的第二版)

 增加MongoDB ,react-router-dom。实现MERN全栈Web应用


## Usage
### Install MongoDB 
Depending on your environment, the steps to install MongoDB are different.Please baidu

### Install  Mongoose
npm install --save mongoose

### Install react-router-dom
npm install --save react-router-dom

## Config
Create a directory config in the project root directory, and create a file credentials. Config.js, which contains the following code:

<code>
module.exports = {
    mongo: {        
        development: {
        // connectionString: 'mongodb://root:12345abc@localhost:27017/admin',
            connectionString: 'mongodb://192.168.3.10:27017/issuetracker',
        },

        production: {
            //connectionString: 'mongodb://root:12345abc@localhost:27017/admin',
            connectionString: 'mongodb://192.168.3.10:27017/issuetracker',
        },
    },
};
</code>


## CRUD


## The routing configuration



## REST APIs



