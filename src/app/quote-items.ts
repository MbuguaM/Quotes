export class QuoteItems {
    text:string;
    author:string;
    name:string;
    votes:number;
    
    constructor( text:string,  author:string, name:string, votes:number ){
        this.text=text;
        this.author=author;
        this.name=name;
        this.votes= votes || 0;
    }
    voteUp():void{
		this.votes += 1;
	}
	voteDown():void{
		this.votes -=1;
	}
}
