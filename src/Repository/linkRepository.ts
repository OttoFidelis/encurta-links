import db from "../Config/data/db";
import Link from "../Model/link";
import { ObjectId } from "mongodb";
import Url from "../Model/url";

export const linkRepository = {
    async getLink(id: string) {
        const database = await db();
        return await database.collection<Link>("links").findOne({ _id: new ObjectId(id) });
    },

    async createLink(url: string) {
        try{
        const link = new Link(url)
        const database = await db();
        const result = await database.collection("links").insertOne({ url:link.getUrl() });
        return new Link(url, result.insertedId);
        }
        catch(error){
            if(error instanceof Error) throw new Error(error.message)
            else throw new Error("Erro desconhecido")
        }
    },

    async updateLink(id: string, url: string) {
        const database = await db();
        await database.collection("links").updateOne({ _id: new ObjectId(id) }, { $set: { url } });
        return new Link(url, new ObjectId(id));
    },

    async deleteLink(id: string) {
        const database = await db();
        const result = await database.collection("links").deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount > 0;
    },

    async getAllLinks() {
        const database = await db();
        return await database.collection<Link>("links").find().toArray();
    }
};
