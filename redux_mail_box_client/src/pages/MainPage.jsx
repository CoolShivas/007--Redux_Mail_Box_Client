import ReadSentbox from "../components/ReadSentbox";
import ReadInbox from "../components/ReadInbox";
import Sentbox from "../components/Sentbox";
import Inbox from "../components/Inbox";
import { GrSend } from "react-icons/gr";
import { FaEnvelopeOpenText } from "react-icons/fa";
import ComposeMail from "../components/ComposeMail";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FaPencilAlt } from "react-icons/fa";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setLogOut } from "../store/reduxStore";

const MainPage = () => {

    const unReadInbox = useSelector((store) => store.electronicMails.unReadInbox);

    const userEmail = localStorage.getItem("MBox-Email");
    console.log(userEmail);

    const navigate = useHistory();

    const dispatch = useDispatch();

    const handlerOnLogOut = () => {
        localStorage.removeItem("MBox-Token");
        localStorage.removeItem("MBox-Email");
        dispatch(setLogOut({
            isUserLogIn: false,
            userToken: "",
            userIdentity: null,
        }));
        navigate.replace("/");
    };

    return (<>
        <div className="flex flex-col h-screen">
            <div className="fixed top-0 left-0 right-0 bg-green-100 shadow-lg border-b-8 border-blue-900 p-4 z-50">
                <div className="flex justify-between items-center h-20">
                    <header className="font-bold text-red-950 text-3xl uppercase">
                        Welcome to MailBOX
                        <span className="text-base flex justify-center bg-orange-300 p-2 rounded"
                        > {userEmail} </span>
                    </header>
                    <button
                        className="bg-yellow-300 hover:bg-[#fb7185] hover:text-white rounded-3xl p-4 font-semibold shadow-lg"
                        onClick={handlerOnLogOut}
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="flex flex-1 pt-28">
                <div className="fixed top-28 left-0 overflow-auto float-left bg-slate-50 p-4 w-1/6 h-screen">
                    <NavLink to="/mainpage/compose">
                        <button
                            className="bg-[#c026d3] text-white hover:bg-[#4ade80] rounded-3xl pl-7 pr-10 pt-5 pb-5 font-semibold shadow-lg hover:border-b-3 flex gap-3"
                        >
                            <center><FaPencilAlt size={20} /></center>
                            Compose
                        </button>
                    </NavLink>
                    <ul className="space-y-4 mt-5">

                        <li className="font-semibold hover:border-b-2 space-x-2 cursor-pointer flex ml-2 gap-2">
                            <NavLink to="/mainpage/inbox">
                                <FaEnvelopeOpenText className="mt-1" /> Inbox <span className="text-sm mt-1"> unread 45 </span>
                            </NavLink>
                        </li>
                        <li className="font-semibold hover:border-b-2 space-x-2 cursor-pointer flex ml-2 gap-2">
                            <NavLink to="/mainpage/sentbox">
                                <GrSend className="mt-1" /> Sentbox
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className=" p-6 float-right flex-1 pt-4 h-screen w-5/6 bg-stone-400">

                    <Switch>
                        <Route path="/mainpage/compose">
                            <ComposeMail></ComposeMail>
                        </Route>
                        <Route path="/mainpage/inbox" exact>
                            <Inbox></Inbox>
                        </Route>
                        <Route path="/mainpage/sentbox" exact>
                            <Sentbox></Sentbox>
                        </Route>
                        <Route path="/mainpage/inbox/:emailId">
                            <ReadInbox></ReadInbox>
                        </Route>
                        <Route path="/mainpage/sentbox/:emailId">
                            <ReadSentbox></ReadSentbox>
                        </Route>
                    </Switch>

                </div>
            </div>
        </div>
    </>)
}

export default MainPage;