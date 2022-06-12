## 目录

- [目录](#目录)
- [创建 Node.js 应用](#创建-nodejs-应用)
- [初始化应用](#初始化应用)
- [安装项目所需依赖](#安装项目所需依赖)
- [快速创建 Express web server 应用](#快速创建-express-web-server-应用)
- [创建 SQL 表](#创建-sql-表)
- [新建 ./src/config/dbconfig.js](#新建-srcconfigdbconfigjs)
- [新建 ./src/models/db.js 创建数据库连接](#新建-srcmodelsdbjs-创建数据库连接)
- [定义模型](#定义模型)
- [新建 ./src/models/tutorial.model.js](#新建-srcmodelstutorialmodeljs)
- [新建 ./src/controllers/tutorial.controller.js](#新建-srccontrollerstutorialcontrollerjs)
- [新建 ./src/routes/tutorial.route.js](#新建-srcroutestutorialroutejs)
- [新增以下路由](#新增以下路由)
  - [**create**,](#create)
    - [接口 URL](#接口-url)
    - [请求方式](#请求方式)
    - [Content-Type](#content-type)
    - [请求 Body 参数](#请求-body-参数)
  - [**findAll**,](#findall)
    - [接口 URL](#接口-url-1)
    - [请求方式](#请求方式-1)
  - [**findAllPublished**,](#findallpublished)
    - [接口 URL](#接口-url-2)
    - [请求方式](#请求方式-2)
  - [**findById**,](#findbyid)
    - [接口 URL](#接口-url-3)
    - [请求方式](#请求方式-3)
  - [**updateOne**,](#updateone)
    - [接口 URL](#接口-url-4)
    - [请求方式](#请求方式-4)
    - [Content-Type](#content-type-1)
    - [请求 Body 参数](#请求-body-参数-1)
  - [**deleteOne**,](#deleteone)
    - [接口 URL](#接口-url-5)
    - [请求方式](#请求方式-5)
  - [**deleteAll**,](#deleteall)
    - [接口 URL](#接口-url-6)
    - [请求方式](#请求方式-6)

## 创建 Node.js 应用

```sh
mkdir nodejs-express-mysql
cd nodejs-express-mysql
```

## 初始化应用

```sh
npm init
```

## 安装项目所需依赖

```sh
npm install express mysql cors
```

## 快速创建 Express web server 应用

```js
// ./app.js
const express = require("express");
const app = express();

const cors = require("cors");
var corsOptions = {
  origin: ["http://localhost:8080"],
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to you",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running at the port", PORT);
});
```

## 创建 SQL 表

```SQL
CREATE TABLE IF NOT EXISTS `tutorials` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  published BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

## 新建 ./src/config/dbconfig.js

```js
module.exports = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "icoding",
};
```

## 新建 ./src/models/db.js 创建数据库连接

```js
const mysql = require("mysql");
const dbConfig = require("../config/db.config");
// 创建数据库连接
const connection = mysql.createConnection(dbConfig);
connection.connect((error) => {
  if (error) throw error;
  console.log("数据库连接成功");
});

module.exports = connection;
```

## 定义模型

在 `./src/models` 目录下新建 `tutorial.js` 文件，在该文件中定义 `Tutorial` 构造器，实现以下功能

- 构建 Tutorial 对象
- 通过 id 查找指定记录
- 获取所有 tutorial 列表
- 获取所有已发布的 tutorial 列表
- 通过 id 修改 tutorial 记录
- 删除某条 tutorial 记录
- 删除所有 tutorial 记录

## 新建 ./src/models/tutorial.model.js

该文件中定义了 MySQL 数据库操作相关的方法

## 新建 ./src/controllers/tutorial.controller.js

该文件中定义了处理前端请求、返回服务端响应等方法

## 新建 ./src/routes/tutorial.route.js

该文件中定义了 Express 服务端的路由接口

## 新增以下路由

### **create**,

#### 接口 URL

> http://localhost:3000/tutorial/create

#### 请求方式

> POST

#### Content-Type

> urlencoded

#### 请求 Body 参数

| 参数名      | 示例值              | 参数类型 | 是否必填 | 参数描述 |
| ----------- | ------------------- | -------- | -------- | -------- |
| title       | Vue.js              | Text     | 是       | 文章标题 |
| description | Vue.js 从入门到放弃 | Text     | 是       | 文章描述 |

### **findAll**,

#### 接口 URL

> http://localhost:3000/tutorial/:id

#### 请求方式

> GET

### **findAllPublished**,

#### 接口 URL

> http://localhost:3000/tutorial/published

#### 请求方式

> GET

### **findById**,

#### 接口 URL

> http://localhost:3000/tutorial/:id

#### 请求方式

> GET

### **updateOne**,

#### 接口 URL

> http://localhost:3000/tutorial/create

#### 请求方式

> POST

#### Content-Type

> urlencoded

#### 请求 Body 参数

| 参数名      | 示例值              | 参数类型 | 是否必填 | 参数描述 |
| ----------- | ------------------- | -------- | -------- | -------- |
| title       | Vue.js              | Text     | 是       | 文章标题 |
| description | Vue.js 从入门到放弃 | Text     | 是       | 文章描述 |
| published   | 1                   | Text     | 是       |          |

### **deleteOne**,

#### 接口 URL

> http://localhost:3000/tutorial/:id

#### 请求方式

> DELETE

### **deleteAll**,

#### 接口 URL

> http://localhost:3000/tutorial

#### 请求方式

> DELETE
