

const ReadInbox = () => {
    return (
        <div>
            <div className="flex justify-center h-96 p-2">
                <div className=" bg-emerald-200 shadow-lg rounded-lg p-6 m-4 w-full max-w-2xl">
                    <button className="font-bold bg-red-400 h-6 w-6 text-white text-center float-right hover:h-8 hover:w-8 hover:bg-red-600 hover:rounded"> X </button>
                    <h1 className="text-2xl font-bold mb-4">
                        From:
                    </h1>
                    <h2 className="text-xl font-semibold mb-2">
                        Subject:
                    </h2>
                    <h4 className="text-gray-700 mb-4 text-sm">Message:</h4>
                    <p className="bg-gray-200 p-4 rounded-lg h-auto"> Hello World </p>
                </div>
            </div>
        </div>
    )
}

export default ReadInbox;