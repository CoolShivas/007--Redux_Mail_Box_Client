import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";


const ComposeMail = () => {

    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [contentBox, setContentBox] = useState("");

    const handlerOnSubmitCompose = (e) => {
        e.preventDefault();

        const sendComposeData = {
            Email: to,
            Subject: subject,
            ContentBox: contentBox,
        };
        console.log(sendComposeData);
    };

    return (
        <div>
            <div className="m-5 p-4 w-5/6 float-right bg-[#8b5cf6] rounded-2xl">
                <form onSubmit={handlerOnSubmitCompose}>

                    <div className="p-4 w-full">
                        <input
                            type="email"
                            id="emailsender"
                            placeholder="To:"
                            className="w-full border-b-2 p-3 border-purple-400 rounded-xl"
                            required
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                        />
                    </div>

                    <div className="p-4">
                        <input
                            id="subject"
                            type="text"
                            placeholder="Subject Matter"
                            className="w-full border-b-2  border-purple-400 p-3 rounded-xl"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className=" p-4">
                        {/* <textarea className="w-full h-full" /> */}
                        <ReactQuill
                            id="editor"
                            value={contentBox}
                            onChange={setContentBox}>
                        </ReactQuill>
                    </div>

                    <div className=" p-4 text-center  ">
                        <button className="rounded-2xl p-4 bg-[#86efac] font-bold  hover:bg-sky-700 hover:text-white w-[10%] float-left" type="submit">
                            Send
                        </button>

                        <NavLink to="/mainpage" >
                            <button className="rounded-2xl font-bold p-4 bg-[#fecaca] font-bold hover:text-white hover:bg-[#dc2626] w-[10%] float-right">
                                Cancel
                            </button>
                        </NavLink>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ComposeMail;