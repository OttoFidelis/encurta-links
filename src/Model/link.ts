import { ObjectId } from "mongodb";
import Url from "./url";

export default class Link{
    private _id?: ObjectId;
    private url: Url;

    constructor(url:string, id?:ObjectId){
        this.url=new Url(url)
        this._id = id
    }

    public getUrl():string {
        return this.url.getUrl()
    }

}
