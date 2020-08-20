const express = require('express');

const router = express.Router();

/* GET users listing. */
router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerIdList = [];
  next();
});

router.get("/", (req, res) => {
  // if(req.query.error){
  //   res.set(302);
  //   res.send("<script>alert('실패');</script>");
  //   res.redirect("/");
  // }
  //res.sendFile(path.join(__dirname, "/../views/mobilemain.html"));
  res.render("mobilemain");
});

router.get("/sign", (req, res) => {
  res.render("mobilesign");
})

router.get("/join", (req, res) => {
  const { name } = req.cookies;
  if(name) {
    res.render("mobileloginafter", {
      name: decodeURIComponent(name),
      
      //class: decodeURIComponent(class),
    });
  }
  else {
    res.clearCookie("name");
    res.clearCookie("nick");
    res.render("mobileloginafter", {name: "error"});
  }
});

router.get("/mypage", (req, res) => {
  const { name, nick, subject } = req.cookies;
  const cla = req.cookies.class;

  res.render("mypage", {
    name: `${decodeURIComponent(name)}`,
    subject: `${decodeURIComponent(subject)}`,
    nick,
    class: `${decodeURIComponent(cla)}`,
  });
});

module.exports = router;
