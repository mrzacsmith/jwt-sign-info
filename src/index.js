import * as jwt from "jsonwebtoken";

const secretKey = "secret123";

const payload = {
  sub: "123",
  iss: "example.com",
  aud: "api.example.com"
};

const token = jwt.sign(payload, secretKey, {
  expiresIn: "1h"
});

console.log(token);
