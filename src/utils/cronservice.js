import cron from 'node-cron'
import {jobModel} from '../models/job.model.js'
import {userModel} from '../models/user.model.js'
import {sendEmail} from '../utils/sendemail.js'
cron.schedule("* * * * *",async()=>{
    try {
        console.log("Running daily!!");
    
        const today = new Date()
        const tommorow = new Date()
    
        tommorow.setDate(today.getDate()+1)
        const start = new Date(tommorow.setHours(0 ,0 ,0, 0))
        const end = new Date(tommorow.setHours(23 , 59 , 59 ,999))
        
        const jobs = await jobModel.find({
            reminderDate:{
                $gte:start,
                $lte:end
            }
        })
        console.log("Jobs found:",jobs.length);
    
        for (const job of jobs) {
            const user = await userModel.findById(job.userId)
            
            

            if(!user) continue
            
            await sendEmail(
                user.email,
                "Job Reminder",
                `Reminder:Follow up with ${job.company} for ${job.role} tommorow!! `
            )
            console.log(`Email sent to ${user.email}`);
        }
        
        
        
    } catch (error) {
            console.log(`cron error : ${error}`);
            
    }
    
    
    
})