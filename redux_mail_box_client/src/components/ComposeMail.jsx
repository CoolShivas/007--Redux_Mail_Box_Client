

const ComposeMail = () => {
    return (
        <div>
            <div className="m-5 p-4 w-5/6 float-right bg-[#8b5cf6] rounded-2xl">
                <form>

                    <div className="p-4 w-full">
                        <input
                            type="email"
                            id="emailsender"
                            placeholder="To:"
                            className="w-full border-b-2 p-3 border-purple-400 rounded-xl"
                            required
                        />
                    </div>

                    <div className="p-4">
                        <input
                            id="subject"
                            type="text"
                            placeholder="Subject Matter"
                            className="w-full border-b-2  border-purple-400 p-3 rounded-xl"
                        />
                    </div>

                    <div className=" p-4">
                        <textarea className="w-full h-full" />
                    </div>

                    <div className=" p-4 text-center  ">
                        <button className="rounded-2xl p-4 bg-[#86efac] font-bold  hover:bg-sky-700 hover:text-white w-[10%] float-left">
                            Send
                        </button>

                        <button className="rounded-2xl font-bold p-4 bg-[#fecaca] font-bold hover:text-white hover:bg-[#dc2626] w-[10%] float-right">
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ComposeMail;