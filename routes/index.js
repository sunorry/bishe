
/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };

var crypto = require('crypto'),
    User = require('../models/user');

module.exports = function(app) {
   app.get('/', function (req, res) {
    res.render('index', {
      title: '主页',
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    });
  });
  app.get('/reg', function (req, res) {
    res.render('reg', {
      title: '注册' ,
      user: req.session.user,
      success: req.flash('succss').toString(),
      error: req.flash('error').toString()
    });
  });
  app.post('/reg', function (req, res) {
    var name = req.body.name,
        password = req.body['reg-password'],
        password_re = req.body['reg-password-repeat'];

    if(password_re != password) {
      req.flash('error', 'password is wrong');
      return res.redirect('/reg');
    }
    var md5 = crypto.createHash('md5'),
        password = md5.update(req.body['reg-password']).digest('hex');
    var newUser = new User({
      name: name,
      password: password,
      email: req.body['reg-email']
    });

    // if the name is exist!!!
    User.get(newUser.name, function(err, user) {
      if(user) {
        req.flash('error', 'ops! the name has been exist!');
        return res.redirect('/reg');
      }
      //add user
      newUser.save(function(err, user) {
        if(err) {
          req.flash('error', err);
          return res.redirect('/reg');
        }
        req.session.user = user;
        req.flash('success', 'success');
        res.redirect('/');
      })
    })
  });
  app.get('/login', function (req, res) {
    res.render('login', {
      title: '登录' ,
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    });
  });
  app.post('/login', function (req, res) {
    var md5 = crypto.createHash('md5'),
        password = md5.update(req.body.password).digest('hex');
    User.get(req.body.name, function(err, user) {
      if(!user) {
        req.flash('error', '用户不存在!');
        return res.redirect('/login');//用户不存在则跳转到登录页
      }
      //检查密码是否一致
      if(user.password != password) {
        console.log(2)
        req.flash('error', '密码错误!');
        return res.redirect('/login');//密码错误则跳转到登录页
      }
       //用户名密码都匹配后，将用户信息存入 session
      req.session.user = user;
      req.flash('success', '登陆成功!');
      res.redirect('/');//登陆成功后跳转到主页
    })
  });
  app.get('/reserve', function (req, res) {
    res.render('reserve', { title: '预订' });
  });
  app.post('/reserve', function (req, res) {
  });
  app.get('/logout', function (req, res) {
    req.session.user = null;
    req.flash('success', '登出成功!');
    res.redirect('/');//登出成功后跳转到主页
  });
}