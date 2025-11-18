import { redirect } from "next/navigation";
import getUrlbyAlias from "@/lib/getUrlbyAlias";
export default async function AliasLink({params}:{params: Promise<{ alias: string }>}) {
    const{alias} = await params;
    let link= null;
    try{
        link=await getUrlbyAlias(alias);
    } catch(err){
        console.error("Error occured:(  :", err);
        redirect("/"); //if error, go back to main page
    }
    if (!link){
        redirect("/");
    }
    redirect(link.url); //main success scenario
}