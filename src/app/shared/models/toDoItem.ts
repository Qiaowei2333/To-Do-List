export class ToDoItem {
    name: String;
    creationDate: Date;
    complete: boolean;

	constructor(name: String){
        this.name = name;
		this.creationDate = new Date();
        this.complete = false;
	}
}