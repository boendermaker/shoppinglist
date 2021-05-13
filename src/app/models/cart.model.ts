export class TodoModel {

	datum: Number;
	deadline: String;
	headline: String;
	description: String;
	done: Number;	

    constructor(res: any) {
        this.datum = Date.now();
        this.deadline = res.deadline;
        this.headline = res.headline;
        this.description = res.description;
        this.done = 0;
    }

}