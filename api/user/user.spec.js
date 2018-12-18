const request = require("supertest");
const should = require("should");
// 루트의 index파일을 씀
const app = require("../../");

describe("GET /users는", () => {
  describe("성공시", () => {
    it("유저 객체를 담은 배열로 응답한다 ", done => {
      request(app)
        .get("/users")
        .end((err, res) => {
          res.body.should.be.instanceOf(Array);
          done();
        });
    });

    it("최대 limit 갯수만큼 응답한다 ", done => {
      request(app)
        .get("/users?limit=2")
        .end((err, res) => {
          res.body.should.have.lengthOf(2);
          done();
        });
    });
  });

  describe("실패시", () => {
    it("limit이 숫자형이 아니면 400을 응답한다", done => {
      request(app)
        .get("/users?limit=two")
        // 꼭 should를 안써도 됨
        .expect(400)
        // done만 사용할 것이라면 아래처럼 간단하게도 사용가능
        .end(done);
    });
  });
});
