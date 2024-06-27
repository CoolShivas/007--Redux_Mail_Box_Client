import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const ReadSentbox = () => {

    const { emailId } = useParams();

    const outgoing = useSelector((store) => store.electronicMails.sents.find((mail) => mail.id === emailId));

    return (
        <div>
            <div className="flex justify-center h-96 p-2">
                <div className=" bg-emerald-200 shadow-lg rounded-lg p-6 m-4 w-full max-w-2xl">
                    <NavLink to="/mainpage/sentbox">
                        <button className="font-bold bg-red-400 h-6 w-6 text-white text-center float-right hover:h-8 hover:w-8 hover:bg-red-600 hover:rounded"> X </button>
                    </NavLink>
                    <h1 className="text-2xl font-bold mb-4">
                        To: {outgoing.to}
                    </h1>
                    <h2 className="text-xl font-semibold mb-2">
                        Subject: {outgoing.subject}
                    </h2>
                    <h3 className="text-gray-700 mb-4 text-sm">Message:</h3>
                    <p className="bg-gray-200 p-4 rounded-lg h-auto"> {outgoing.contentBox} </p>
                </div>
            </div>
        </div>
    )
}

export default ReadSentbox;