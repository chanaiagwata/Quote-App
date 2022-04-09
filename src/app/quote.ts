export class Quote {
    id: number;
    quote:string;
    upvote:number;
    downvote:number;
    author:string;
    dateAdded: Date;
    contributor:string;
    constructor(id:number, quote:string, upvote:number, downvote:number, contributor:string, author:string, dateAdded:Date){
        this.id = id;
        this.quote = quote;
        this.upvote = upvote;
        this.downvote = downvote;
        this.author = author;
        this.dateAdded = dateAdded;
        this.contributor =contributor;
    }
}
