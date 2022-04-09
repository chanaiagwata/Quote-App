export class Quote {
    id: number;
    quote:string;
    upvote:number;
    downvote:number;
    constructor(id:number, quote:string, upvote:number, downvote:number){
        this.id = id;
        this.quote = quote;
        this.upvote = upvote;
        this.downvote = downvote;
    }
}
