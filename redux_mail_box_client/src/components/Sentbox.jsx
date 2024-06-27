import { useState, useEffect } from "react";

const Sentbox = () => {

    const [isLoading, setIsLoading] = useState(false);

    // // Getting the email address from the localStroage to confirm who is sending mail to whom;
    const senderEmail = localStorage.getItem("MBox-Email");
    console.log(senderEmail);

    const [sentMail, setSentMail] = useState([]);
    // Going to store the get mails from inbox server by api get call to this inboxMail Array;

    useEffect(() => {
        const fetchSentboxEmailFromServer = async () => {
            setIsLoading(true);
            try {

                const response = await fetch(
                    `https://reduxmailbox-45445-default-rtdb.firebaseio.com/boxMail/${senderEmail}/sendbox.json`
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
                setSentMail(loadServerEmail); // // loadServerEmail is setted on the inboxMail state to be render using map;



            } catch (error) {
                console.log("Something went wrong sentbox emails", error);
            }

        };
        fetchSentboxEmailFromServer();
    }, [senderEmail]);

    console.log(sentMail);

    return (
        <div className="bg-amber-300 flex justify-center items-center m-5 rounded-[8%]">
            <div className="m-4">

                <h2 className="text-center font-bold text-4xl border-b-8 border-green-500 mb-5 p-2">Sentbox</h2>

                {isLoading ? (<center><p className="font-bold bg-zinc-800 text-white rounded-full py-2"> Loading... </p></center>) : sentMail.length === 0 ? (<p className=" text-2xl"> Empty sentbox. </p>) : (sentMail.map((arr) => {
                    return <li key={arr.id}
                        className="flex justify-between bg-cyan-200 rounded-lg mb-4 hover:shadow-2xl p-4 space-x-4"
                    >
                        <p> To: {arr.to}</p>
                        <h3> Subject: {arr.subject} </h3>
                        <p> Message: {arr.contentBox} </p>
                    </li>
                }))}

            </div>
        </div>
    );
}

export default Sentbox;