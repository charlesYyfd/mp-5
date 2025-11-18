"use server";
import { LinkProps } from "@/types/types";
import getCollection, {LINKS_COLLECTION} from "@/db";

export default async function createNewLink(
    alias:string,
    url:string,
) : Promise<LinkProps>{
    console.log("creating new shorten url ...");
    try{ //valid website?
        new URL(url);
    } catch(err){
        throw new Error("Invalid URL, bad website choice...");
    }

    const l={
        alias:alias,
        url:url,
    };

    const linksCollection = await getCollection(LINKS_COLLECTION);
    //check if alias exist in database or not
    const exist = await linksCollection.findOne({alias: alias});
    if (exist) {
        throw new Error("Alias exists already. TRY ANOTHER alias :)");
    }

    if (alias.includes(" ")){
        throw new Error("Alias cannot contain any space for our crappy website!! Try another alias :)");
    }

    //insert in DB
    const res  = await linksCollection.insertOne({ ...l });

    if (!res.acknowledged){
        throw new Error("DB insert failed!!!")
    }
    /*insert in DB*/
    return {...l, id: res.insertedId.toString()};
}