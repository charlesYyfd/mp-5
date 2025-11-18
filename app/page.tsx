import LinkDisplay from "@/components/LinkDisplay";
import getAllLinks from "@/lib/getAllLinks"

export default async function Home() {
  const links = await getAllLinks();
    return (
        <div className="flex flex-col bg-amber-500 p-4">
            <h1 className="text-3xl font-bold">URL Shortener</h1>
            <div className="text-xl font-bold text-gray-700 items-center" >
                Enter a long URL and a custom alias to create a short link.
            </div>
            <div className="text-xl font-bold text-gray-700  items-center">  \(^-^)/ </div>
            <LinkDisplay inputLinks={links} />
        </div>
    )
}
