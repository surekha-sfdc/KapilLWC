import { LightningElement } from 'lwc';
import saveToDo from '@salesforce/apex/ToDoController.saveToDo';
import {showToastEvent} from 'lightning/platformShowToastEvent';
export default class CreateTask extends LightningElement {
    targetParent;
    taskTitle;
    dueDate;
    showDueDate=false;
    showSave=false;


    handleChange(event){
        const fieldName=event.target.name;
        if(fieldName === "taskTitle"){
            this.taskTitle=event.target.value;
            alert("I am in task Title");
            console.log("I am in task Title");
            console.log("  this.taskTitle: ", this.taskTitle)
            if(this.taskTitle != ""){
                this.showDueDate = true;
            }
            else{
                this.showDueDate = false;
            }
         //   console.log("this.taskTitle: "+this.taskTitle);
        }
        else if(fieldName === "dueDate"){
            this.dueDate=event.target.value;
            this.dueDate != "" ? (this.showSave=true) : (this.showSave=false);
            console.log("this.dueDate= "+this.dueDate);
        }
    }
    handleClick(){
        console.log("###Buttons Click on Child");
        saveToDo({title:this.taskTitle,  dueDate:this.dueDate})
        .then((result) => {
            if(result === "Success"){
                this.title="";
                this.dueDate="";
            }
            const evt=new showToastEvent({
                title:'Success',
                message:'A new item has been added to your todo list',
                variant:'success'
            });
            this.dispatchEvent(evt);
        })
        .catch((error)=>{
            const evt=new showToastEvent({
                title:'Error',
                message:error.body.message,
                variant:'error'
            });
            this.dispatchEvent(evt);
        })
    }

   // @api
    handleParentClick(){
        this.handleClick();
    }
}