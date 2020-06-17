var mail = require('../gmail');
const fs = require("fs");
const readline = require("readline");
const {
    google
} = require("googleapis");
// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "token.json";

const getEmail = (req, res) => {
    fs.readFile("credentials.json", (err, content) => {
        mail.authorize(JSON.parse(content), (auth) => {

            mail.getRecentEmail(auth, (mailResp) => res.send(mailResp));

        });
    });

}
module.exports.getEmail = getEmail;