import getCollection, { LINKS_COLLECTION } from "@/db";
import { LinkProps } from "@/types/types"

export default async function getUrlbyAlias(
    alias: string,
): Promise<LinkProps | null> {
    let linkCollection;
    try {  //collection
        linkCollection = await getCollection(LINKS_COLLECTION);
    } catch (err) {
        return null;
    }
    //db
    const data= await linkCollection.findOne({alias: alias});
    if (!data) return null; // not found

    return { // we were using to hexstring, but to string works??
        id: data._id.toString(),
        alias: data.alias,
        url: data.url,
    };
}