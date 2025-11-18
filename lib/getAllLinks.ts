import {LinkProps} from "@/types/types";
import getCollection, { LINKS_COLLECTION } from "@/db";

export default async function getAllLinks(): Promise<LinkProps[]>{
    const linksCollection = await getCollection(LINKS_COLLECTION);
    const data = await linksCollection.find().toArray();

    const links: LinkProps[] = data.map((l) => ({
        id: l._id.toHexString(),
        alias: l.alias,
        url: l.url,
    }));
    return links;
}