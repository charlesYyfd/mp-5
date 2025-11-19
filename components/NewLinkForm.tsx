"use client";
import {Textarea } from "@mui/joy";
import { Button, FormHelperText, TextField } from "@mui/material"
import { useState } from "react";
import { LinkProps } from "@/types/types"
import createNewLink from "@/lib/createNewLink";

export default function NewLinkForm({
    append,
                                    }:{
    append: (post: LinkProps) => void;
}){
    const [alias, setAlias] = useState("");
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    //since the homeurl is diff base on deployment
    const homeUrl="https://mp-5-self-seven.vercel.app/";
    return (
        <form className="bg-amber-50 rounded-2xl shadow-lg p-6 flex flex-col gap-6 w-[70%]"
            onSubmit={(async (event) => {
                event.preventDefault();
                setError("");

                try {
                    const newLink = await createNewLink(alias, url);
                    append(newLink);
                } catch (err: any) {
                    console.error("Server returned an error:", err.message);
                    setError(err.message);
                }
                /*createNewLink(alias, url)
                    .then((newLink)=>append(newLink))
                    .catch((error)=>console.log(error))*/
            })}>
            <div>
                <h2 className="text-2xl font-semibold text-black">Shorten a URL</h2>
                <FormHelperText>Enter a long URL to create a shorter, sharable link</FormHelperText>
            </div>
            <TextField
                variant="outlined"
                sx={{ backgroundColor: "white", width: "100%" }}
                label="URL"
                placeholder="https://example.com/very_long_url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <FormHelperText>What Website is on your mind? ;)</FormHelperText>
            <div className="flex justify-end">
                <span className="text-gray-600 w-[60%]">{homeUrl}</span>
                <TextField
                    sx={{ backgroundColor: "white", width: "100%"}}
                    variant="outlined"
                    placeholder="your_custom_alias"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                />
            </div>
            <div className="w-full flex justify-end ">
                <Button
                    sx={{ width: "80px" }}
                    variant="contained"
                    type="submit"
                    disabled={alias === "" || url === ""}
                >
                    Shorten
                </Button>
            </div>
            <FormHelperText><div className="text-red-500 font-semibold text-xl" >{error}</div> </FormHelperText>
        </form>
    )
}
