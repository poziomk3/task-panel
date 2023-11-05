import { TaskState } from "../../../types/taskEnum"

export  const isTheChangeLegal=(previous:TaskState,next:TaskState):boolean=>{
    return previous==TaskState.NOT_ASSIGNED && (next==TaskState.IN_PROGRESS || next==TaskState.DELETED)?true:previous==TaskState.IN_PROGRESS?true:false
}