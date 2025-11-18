"use client";
import {useState} from "react";
import {LinkProps} from "@/types/types";
import LinkPreview from "./LinkPreview";
import NewLinkForm from "./NewLinkForm";

export default function LinkDisplay({inputLinks,}: { inputLinks: LinkProps[]; }) {
    const [links, setLinks] = useState(inputLinks);
    return (
        <div className="flex flex-col items-center bg-amber-400 p-4 ">
            <NewLinkForm
                append={(newLink: LinkProps) => {
                    setLinks([...links, newLink]);
                }}
            />

            <div className="font-black">List of existing shorten Urls</div>
            {
                links.map((l) => <LinkPreview key={l.id} link={l}/>
                )
            }
        </div>
    );
}
