import { Estimation } from "./estimationEnum";
import { Specialization } from "./specializationEnum";

export  interface TaskFormType{
    estimation:Estimation,
    taskName:string,
    specialization:Specialization,
    assigned:string,
    _id?:string,
    created:string,

}