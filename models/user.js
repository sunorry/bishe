var mongodb = require('./db');

function User(user) {
  this.name = user.name;
  this.password = user.password;
  this.email = user.email;
}

module.exports = User;

// save user info

User.prototype.save = function(callback) {
  // the info want to save
  var user = {
    name: this.name,
    password: this.password,
    email: this.email
  };

  // open db
  mongodb.open(function(err, db) {
    if(err) {
      return callback(err); // return err info
    }
    // read users collection
    db.collection('users', function(err, collection) {
      if(err) {
        mongodb.close();
        return callback(err);
      }
      //insert date to users collection
      collection.insert(user, {
        safe: true
      }, function(err, user) {
        mongodb.close();
        if(err) {
          return callback(err);
        }
        callback(null, user[0]); // success! and return save date
      });
    });
  });
}

//read user info

User.get = function(name, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);//错误，返回 err 信息
    }
    //读取 users 集合
    db.collection('users', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);//错误，返回 err 信息
      }
      //查找用户名（name键）值为 name 一个文档
      collection.findOne({
        name: name
      }, function (err, user) {
        mongodb.close();
        if (err) {
          return callback(err);//失败！返回 err 信息
        }
        callback(null, user);//成功！返回查询的用户信息
      });
    });
  });
};