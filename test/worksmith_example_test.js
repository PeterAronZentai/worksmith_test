var worksmith = require('worksmith')
var assert = require('assert')

describe("worksmith_example_module", function() {
    it("should provide with a 'random' activity", function(done) {
        worksmith.use("more", require('worksmith_example_module'))
        var wf = worksmith({
            "task":"more/random",
            resultTo: "rnd"
        });
        wf({},function(err, res, ctx) {
            assert.ok(ctx.rnd, "Random value should be returned");
            done();
        })        
    })
})