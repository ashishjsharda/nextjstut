import Link  from "next/link";

export default function FirstPost(){
    return<div>
        <h1>First Post</h1>
        <p> Example para</p>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
    </div>
}