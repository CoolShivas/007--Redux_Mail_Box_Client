import { AiTwotoneDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendingMails, setDeleteMails, setMakeAsUnReadInbox } from "../store/reduxStore";


const Inbox = () => {



    const [isLoading, setIsLoading] = useState(false);

    // // Getting the email address from the localStroage to confirm who is sending mail to whom;
    const getGotEmail = localStorage.getItem("MBox-Email");
    console.log(getGotEmail);

    // const [inboxMail, setInboxMail] = useState([]);
    // Going to store the get mails from inbox server by api get call to this inboxMail Array;

    const inboxMail = useSelector((store) => store.electronicMails.mails);
    // Going to store the get mails from inbox server by api get call to this mails Array present in the reduxStore;

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchInboxEmailFromServer = async () => {
            setIsLoading(true);
            try {

                const response = await fetch(
                    `https://reduxmailbox-45445-default-rtdb.firebaseio.com/boxMail/${getGotEmail}/inbox.json`
                );

                if (!response.ok) {
                    throw new Error("Unable to fetch inbox email from server");
                }

                const data = await response.json();
                console.log(data); // Getting the data;

                const loadServerEmail = [];

                for (const key in data) {
                    loadServerEmail.push({
                        id: key,
                        ...data[key],
                    })
                }
                setIsLoading(false);
                console.log(loadServerEmail);
                // setInboxMail(loadServerEmail); // // loadServerEmail is setted on the inboxMail state to be render using map;
                dispatch(sendingMails({
                    mails: loadServerEmail
                }));// // loadServerEmail is setted on the mails state to be render using map from the reduxStore;



            } catch (error) {
                console.log("Something went wrong inbox emails", error);
            }

        };
        return () => fetchInboxEmailFromServer();
    }, [getGotEmail]);


    const handlerOnDeleteBtn = async (arr) => {
        try {
            const res = await fetch(`https://reduxmailbox-45445-default-rtdb.firebaseio.com/boxMail/${getGotEmail}/inbox/${arr}.json`, {
                method: "DELETE"
            });
            dispatch(setDeleteMails(arr));

        } catch (error) {
            console.log("Error occur in inbox delete", error.message);
        }
    };

    const handlerOnMakeAsRead = async (arr) => {
        try {
            const res = await fetch(`https://reduxmailbox-45445-default-rtdb.firebaseio.com/boxMail/${getGotEmail}/inbox/${arr.id}.json`, {
                method: "PATCH",
                body: JSON.stringify({
                    read: true
                })
            });
            dispatch(setMakeAsUnReadInbox(arr.id));

        } catch (error) {
            console.log("Error occur in inbox delete", error.message);
        }
    };

    // console.log(inboxMail);

    return (
        <div className="bg-[#fef08a] flex justify-center items-center m-5 rounded-[8%]">
            <div className="m-4">

                <h2 className="text-center font-bold text-4xl border-b-8 border-green-500 mb-5 p-2">Inbox</h2>

                {/* {inboxMail.length === 0 && (<p className=" text-2xl"> Empty inbox. </p>)} */}

                {isLoading ? (<center><p className="font-bold bg-zinc-800 text-white rounded-full py-2"> Loading... </p></center>) : inboxMail.length === 0 ? (<p className=" text-2xl"> Empty inbox. </p>) : (inboxMail.map((arr) => {
                    return <li key={arr.id}
                        className="flex justify-between bg-cyan-200 rounded-lg mb-4 hover:shadow-2xl p-4 space-x-4 cursor-pointer"
                    >
                        <NavLink to={`/mainpage/inbox/${arr.id}`}>
                            <div
                                className="flex items-center gap-2"
                                onClick={() => handlerOnMakeAsRead(arr)}
                            >
                                {!arr.read && <span className="flex h-3 w-3 bg-red-500 rounded-full m-3"></span>}

                                <div>
                                    <p>From: {arr.senderEmail}</p>
                                    <h3>Subject: {arr.subject}</h3>
                                    <p>Message: {arr.contentBox}</p>
                                </div>
                            </div>
                        </NavLink>
                        <button onClick={() => handlerOnDeleteBtn(arr.id)}>
                            <AiTwotoneDelete size={"25px"} className="h-8 w-8 rounded-full hover:h-10 w-10 hover:bg-red-500" />
                        </button>
                    </li>
                }))}

            </div>
        </div>
    );
}

export default Inbox;