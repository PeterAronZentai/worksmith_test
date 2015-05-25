var assert = require('assert')
var worksmith = require('worksmith')

describe("Salesforce activity", function() {
    it("should connect and create some", function(done) {
        worksmith.use("sf", require('worksmith_salesforce'))
        var wf = worksmith({task:"sequence", items : [{
            "task":"sf/connect",
            "loginUrl":"https://eu5.salesforce.com",
            "username":"peter.zentai@jaystack.com.dev",
            password:"qqriq123a0jqCufRp9bdLxyL2YHMory7O",
            resultTo: "sfcn"
        },{
            task:"sf/createEntity",
            connection:"@sfcn",
            entityType:"Account",
            fields: {
                Name: "PeterZentai"
            },
            resultTo:"newAccount"
        }
        ]});
        wf({},function(err, result, ctx) {
            assert.ok(ctx.newAccount, "new account should be created")
            console.log(ctx.newAccount)
            done();
        })
    })
})
