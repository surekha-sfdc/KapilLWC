import { LightningElement } from 'lwc';
import { closeActionScreenEvent } from 'lightning/actions';

export default class CreateTaskActionnew extends LightningElement {
    isAction=true;

    handleClick(){
        this.refs.createToDo.handleParentClick();
     }
    closeAction(){ 
    this.dispatchEvent(new closeActionScreenEvent());
    }
}