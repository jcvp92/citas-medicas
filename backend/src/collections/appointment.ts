import { Schema } from  "mongoose";
// importamos mongoose  en nuestro esquemas  de citas
export const appointmentSchema:Schema = new Schema({

    dayAppointment: {type:Date, required:true,maxlength:10},
    //appointmentTime: {type:TimeRanges, required:true},
    placeAppointment: {type:String,required:true},
    timestamp: {
        createdAt:true,
        updateAt:true,
        type:Date
    },
    users:{
        type:Schema.Types.ObjectId,
        ref:"Users"
    }

})

