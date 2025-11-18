"use client";
import { LinkProps } from "@/types/types";
import Link from "next/link";

export default function LinkPreview({ link }: { link: LinkProps }) {
    const homeUrl = "https://mp-5-self-seven.vercel.app/";

    const aliasPath=`/${link.alias}`;
    const Url=`${homeUrl}${aliasPath}`;

    async function Copy() {
        try {
            await navigator.clipboard.writeText(Url);
            console.log("Copied");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="bg-amber-50 flex item-center justify-between rounded-xl py-1 w-[70%] mb-1">
            <Link href={aliasPath} className="text-black underline"
                target="_blank">
                {Url}
            </Link>
            <button
                className="ml-4 rounded bg-amber-700 px-2 py-1 text-sm"
                onClick={Copy}
            >
                Copy
            </button>
        </div>
    )
}
