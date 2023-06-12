const express = require('express');
const router = express.Router();

const {
    getTestRoute,
    postRegisterRoute,
    getHomeRoute,
    postLoginRoute,
    authRoute,
    uploadRoute,
    getUploadRoute,
    getUsername
    
} = require("../contols/userControlls");

router.get("/test", getTestRoute);
router.post("/register", postRegisterRoute);
router.post("/login", postLoginRoute);
router.get("/", getHomeRoute);
router.get("/auth", authRoute);
router.post("/upload", uploadRoute); 
router.get("/upload",getUploadRoute ); 
router.get("/user",getUsername ); 

module.exports = router;
