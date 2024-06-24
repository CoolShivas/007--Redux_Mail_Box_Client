import { FaPencilAlt } from "react-icons/fa";
import React from 'react'

const MainPage = () => {
    return (<>
        <div className="flex flex-col h-screen">
            <div className="fixed top-0 left-0 right-0 bg-green-100 shadow-lg border-b-8 border-blue-900 p-4 z-50">
                <div className="flex justify-between items-center h-20">
                    <header className="font-bold text-red-950 text-3xl uppercase">
                        Welcome to MailBOX
                    </header>
                    <button
                        className="bg-yellow-300 hover:bg-[#fb7185] hover:text-white rounded-3xl p-4 font-semibold shadow-lg"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="flex flex-1 pt-28">
                <div className="fixed top-28 left-0 overflow-auto float-left bg-slate-50 p-4 w-1.8/6 h-screen">
                    <button
                        className="bg-[#c026d3] text-white hover:bg-[#4ade80] rounded-3xl pl-7 pr-7 pt-5 pb-5 font-semibold shadow-lg hover:border-b-3 "
                    >
                        <center><FaPencilAlt size={20} /></center>
                        Compose
                    </button>
                    <ul className="space-y-4 mt-5">

                        <li className="font-semibold hover:border-b-2 space-x-2 cursor-pointer">
                            Inbox <span className="text-sm"> unread 45 </span>
                        </li>
                        <li className="font-semibold hover:border-b-2 cursor-pointer">
                            Sentbox
                        </li>
                    </ul>
                </div>
                <div className=" p-6 float-right flex-1 pt-8 h-screen  bg-stone-300">
                    <div className="w-[50%]">
                        <h1> Rest of the content should  here. </h1>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default MainPage;