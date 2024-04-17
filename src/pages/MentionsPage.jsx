import HeadPages from "../components/HeadPages";
import { IoDocumentTextOutline } from "react-icons/io5";

const MentionsPage = () => {
    return (
        <main>
           <HeadPages 
           headText="Mentions légales"
           icon={<IoDocumentTextOutline />}
           /> 
        </main>
    );
};

export default MentionsPage;