const express = require("express");
const bcyrpt = require("bcrypt");
const User = require("../models/user");
const { sequelize } = require("../models");

const router = express.Router();

router.post("/sign", async (req, res, next) => {
    const { nick, password, name, subject, cla } = req.body;
    try {
        const exUser = await User.findOne({ where: { nick: nick }});
        if(exUser) {
            return res.redirect('/?error=exist');
        }
        const hash = await bcyrpt.hash(password, 12);
        await User.create({
            nick: nick,
            password: password,
            name: name,
            subject: subject,
            class: cla,
        });
        res.cookie("name", `${encodeURIComponent(name)}`);
        res.cookie("nick", `${nick}`);
        //res.cookie("class", `${encodeURIComponent(class)}`);
        res.cookie("subject", `${encodeURIComponent(subject)}`);
        res.cookie("class", `${cla}`);
        return res.redirect('/join');
    } catch(error) {
        console.error(error);
        return next(error);
    }
});

router.post("/login", async (req, res, next) => {
    const { nick, password } = req.body;

    User.findOne({
        attributes: ['nick', 'password'],
        where: {
            nick: nick,
            password: password,
        },
    }).then(async (user) => {
        if(user !== null) {
            const name = await User.findOne({
                attributes: ['name'],
                where: {
                    nick: nick,
                },
            });
            const subject = await User.findOne({
                attributes: ['subject'],
                where: {
                    nick: nick,
                },
            });
            const cla = await User.findOne({
                attributes: ['class'],
                where: {
                    nick: nick,
                },
            });
            const userName = name._previousDataValues.name;
            const userSubject = subject._previousDataValues.subject;
            const userClass = cla._previousDataValues.class;
            res.cookie("nick", `${nick}`);
            res.cookie("name", `${encodeURIComponent(userName)}`);
            res.cookie("subject", `${encodeURIComponent(userSubject)}`);
            res.cookie("class", `${encodeURIComponent(userClass)}`);
            res.header(302);
            res.redirect("/join");
        } else {
            res.redirect("/?error=notsignit");
        }
    }).catch(err => {
        console.error("err", err);
        res.redirect(`/?error=${err}`);
    });
    
});

router.get("/logout", (req, res) => {
    res.clearCookie("name");
    res.clearCookie("nick");
    res.clearCookie("class")
    res.clearCookie("subject");
    res.redirect("/");
});

module.exports = router;