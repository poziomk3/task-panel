import { Estimation } from "./estimationEnum";
import { Specialization } from "./specializationEnum";
import { TaskState } from "./taskEnum";

export interface Task{
    _id:string,
    createdAt:number
    createdBy:{userId:string}
    credentials:
    {
        
        name:string,
        estimation:Estimation,
        specialization:Specialization,
        assignedTo?:{userId:string},
        
    },
    state:TaskState
}