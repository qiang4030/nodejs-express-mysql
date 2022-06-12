const execSQL = require("./db.model");

class Tutorial {
  constructor(obj, obj2) {
    this.obj = obj;
    this.obj2 = obj2;
  }

  // 添加记录
  async create() {
    const sql =
      "insert into tutorials (title,description,published) values (?,?,?)";
    // Object.value() 方法将对象的值转为数组
    const key = Object.keys(this.obj);
    const values = Object.values(this.obj);
    key.indexOf("published") !== -1 ? "" : values.push("0");
    try {
      return await execSQL(sql, values);
    } catch (err) {
      return err;
    }
  }

  // 查询所有记录
  async findAll() {
    const sql = "select * from tutorials";
    try {
      return await execSQL(sql);
    } catch (err) {
      return err;
    }
  }

  //  根据 id 查询记录
  async findById() {
    const sql = "select * from tutorials where id = ?";
    const values = Object.values(this.obj);
    try {
      return await execSQL(sql, values);
    } catch (err) {
      return err;
    }
  }

  // 查找已发布的所有记录
  async findAllPublished() {
    const sql = "select * from tutorials where published = 1";
    try {
      const result = await execSQL(sql);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // 根据 id 修改记录
  async updateOne() {
    const sql =
      "update tutorials set title = ?, description = ?, published = ? where id = ?";
    const values = Object.values(this.obj);
    values.push(Object.values(this.obj2)[0]);
    console.log(values);
    try {
      const result = await execSQL(sql, values);
      return result;
    } catch (err) {
      return err;
    }
  }

  // 根据 id 删除记录
  async deleteOne() {
    const sql = "delete from tutorials where id = ?";
    const values = Object.values(this.obj2);
    try {
      const result = await execSQL(sql, values);
      return result;
    } catch (err) {
      return err;
    }
  }

  // 删除所有记录
  async deleteAll() {
    const sql = "delete from tutorials where id";
    try {
      return await execSQL(sql);
    } catch (err) {
      return err;
    }
  }
}

module.exports = Tutorial;
