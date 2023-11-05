export enum TaskState {
    NOT_ASSIGNED="NOT_ASSIGNED",
    IN_PROGRESS="IN_PROGRESS",
    CLOSED="CLOSED",
    DELETED="DELETED"
}
export const TaskStateMap=new Map([
    [TaskState.NOT_ASSIGNED,"not assigned"],
    [TaskState.IN_PROGRESS,"in progress"],
    [TaskState.CLOSED,"closed"],
    
   
   ])
