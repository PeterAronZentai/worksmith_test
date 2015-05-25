var worksmith = require('worksmith')
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
    resultTo:"newAcc"
}
]});
wf({},console.log)