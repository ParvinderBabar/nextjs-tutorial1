import LearnSubject from "@/components/LearnSubject";
import topics from "../../topics/page.js";

export default function SomePage({ params }) {
    return <LearnSubject params={params} topics={topics} />;
}