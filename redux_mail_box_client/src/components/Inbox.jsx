import { useEffect, useState } from "react";


const Inbox = () => {

    // // Getting the email address from the localStroage to confirm who is sending mail to whom;
    const senderEmail = localStorage.getItem("MBox-Email");
    console.log(senderEmail);

    const [inboxMail, setInboxMail] = useState([]);
    // Going to store the get mails from inbox server by api get call to this inboxMail Array;

    useEffect(() => {
        const fetchInboxEmailFromServer = async () => {
            // setIsLoading(true);
            try {

                const response = await fetch(
                    `https://reduxmailbox-45445-default-rtdb.firebaseio.com/boxMail/${senderEmail}/inbox.json`
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
                console.log(loadServerEmail);
                setInboxMail(loadServerEmail); // // loadServerEmail is setted on the inboxMail state to be render using map;



            } catch (error) {
                console.log("Something went wrong inbox emails", error);
            }

        };
        fetchInboxEmailFromServer();
    }, [senderEmail]);

    console.log(inboxMail);
    return (
        <div className="bg-[#fef08a] flex justify-center items-center m-5 rounded-[8%]">
            <div className="m-4">

                <h2 className="text-center font-bold">Inbox</h2>
                {inboxMail.map((arr) => {
                    return <li key={arr.id}>
                        <p>From: {arr.to}</p>
                        <h3>Subject: {arr.subject}</h3>
                        <p>Message: {arr.contentBox}</p>
                    </li>
                })}
            </div>
        </div>
    );
}

export default Inbox;