const express=require('express');
const router=express.Router()

const testdata=require('../Controllers/getTest.js');
const users = require('../Controllers/Users.js');
const papers = require('../Controllers/Papers.js');
const communitynotification=require('../Controllers/CommunityNotification.js');
const collegenotification=require('../Controllers/CollegeNotification.js');
const articles = require('../Controllers/Articles.js');
const notes = require('../Controllers/Notes.js');

router.get('/',testdata.getData)

router.get('/users',users.getUsers);
router.post('/signup',users.addUser);
router.get('/Login',users.getLogin);
router.get('/papers',papers.getPapers);
router.get('/communitynotification',communitynotification.getCommunitynotification);
router.get('/collegenotification',collegenotification.getCollegenotification);
router.get('/recentarticle',articles.getRecentArticle);
router.get('/articles',articles.getArticles);
router.get('/notes',notes.getNotes)





// export the router
module.exports = router; 