import { ObjectId } from "mongodb";

export default class Link{
    _id?: ObjectId;
    url: string;

    constructor(url:string, id?:ObjectId){
        this.url=url
        this._id = id
    }
}