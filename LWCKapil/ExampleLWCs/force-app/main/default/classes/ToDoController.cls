public with sharing class ToDoController {
    @AuraEnabled
    public static string saveToDo(String title,Date dueDate){
        try {
            ToDo__c todo=new ToDo__c();
            todo.Title__c=title;
            todo.Due_Date__c=dueDate;
            insert todo;
            return 'Success';

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}