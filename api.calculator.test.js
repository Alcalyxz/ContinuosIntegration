const request = require("supertest");

const app = require("./app");

describe("testing /add path", ()=>{
    test ("it should return status code 200", done =>{
        request(app)
        .get("/add?a=1&b=5")
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        }
            )
    });


    test ("it should application /json content-type", done =>{
        request(app)
        .get("/add?a=1&b=5")
        .then(response => {
            expect(response.statusCode).toBe("application/json");
            done();
        }
            )
    });
    test ("it should application valid jspon object", done =>{
        request(app)
        .get("/add?a=1&b=5")
        .then(response => {
            expect(response.body).toBenull();
            done();
        }
            )
    });

    test ("it should return correct answer", done =>{
        request(app)
        .get("/add?a=1&b=5")
        .then(response => {
            expect(response.body.result).toBe(5);
            done();
        }
            )
    });
})