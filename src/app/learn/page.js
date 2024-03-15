
 import topics from "../../app/topics/page.js"
import Link from "next/link"
export default function Learn() {

    return (
        <div>
            <h1>Learn subjects

            </h1>
            <Link href="/learn/react"><a>react</a></Link>
            <Link href="/learn/next"><a>next</a></Link>
            <Link key={topics.id} href={`/learn/${topics.id}`}>
                <a>{topics.about}</a></Link>
        </div>
    )
}