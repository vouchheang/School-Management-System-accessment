const jwt = require('jsonwebtoken');

const secretKey = "yourSecretKey"; 

const generateToken = (userId) => {
    const payload = {
        userId, 
        role: "user"
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); 
    console.log("Generated Token:", token);
    return token;
};

const token = generateToken("12345");
