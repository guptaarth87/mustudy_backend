const Communitynotification = require("../Modals/CommunityNotification");


exports.getCommunitynotification=(req,res)=>{
    
        Communitynotification.find().then(result=>{
        res.status(200).json({
            message: `Notification Fetched Successfully`,
           notifications:result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
       })
}