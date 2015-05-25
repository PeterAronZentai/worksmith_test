var worksmith = require('worksmith')
var assert = require('assert')
describe("readJson activity", function() {
    it("should read up the specified file", function(done) {
        var wf = worksmith({task:"readJson", resultTo:"r", path:"./test/json.json" });
        wf({}, function(err, result, ctx) {
            assert.ifError(err, err);
            assert.equal(ctx.r["ever talked to kurtz?"],
                               "you don't talk to kurtz. you listen to him.",
                               "result does not match")
            done(null, result)
        })
    })
})