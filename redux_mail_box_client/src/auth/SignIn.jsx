import { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const SignIn = () => {

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handlerOnSubmitSignInForm = async (e) => {
        // // Preventing the screen from refreshing again and again on Submit;
        e.preventDefault();
        console.log(mail);
        console.log(pass);

        setIsLoading(true);

        if (mail && pass) {
            try {
                if (!mail || !pass) {
                    throw new Error("Please fill all the fields for Sign-In");
                }
                const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBE0s_zEOQLHxzklg47lVyJDi-CIN60n1k`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: mail,
                        password: pass,
                        returnSecureToken: true,
                    })
                });

                const data = await response.json();
                // console.log(data);

                if (data.error) {
                    throw new Error("Sign-In failed : If not have account please signup ");
                }
                else {
                    setIsLoading(false);
                    console.log("User have Successfully Sign-In", data);
                    // // Saving of token and cleanEmail to get that specific user from the firebase rest api;
                    localStorage.setItem("MBox-Token", data.idToken);

                    const cleanEmail = data.email.replace(/[@.]/g, "");
                    console.log(cleanEmail);
                    localStorage.setItem("MBox-Email", cleanEmail);

                }

            } catch (error) {
                console.log(error.message);
            }
        }

        // // Clearing the fields;
        setMail("");
        setPass("");
    };


    return (<>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign-In
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handlerOnSubmitSignInForm}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-5"
                                id="email"
                                placeholder="enter your email address"
                                value={mail}
                                onChange={(e) => { setMail(e.target.value) }}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                type="password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-5"
                                minLength={6}
                                id="pass"
                                placeholder="enter your password"
                                value={pass}
                                onChange={(e) => { setPass(e.target.value) }}
                            />
                        </div>
                    </div>

                    <div>

                        {isLoading ? (<center><p className="font-bold bg-blue-200 py-2"> Loading... </p></center>) : (<button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign-In
                        </button>)}
                    </div>
                </form>

                <p className="mt-10 text-center text-md text-gray-500">
                    Don't have an account!{' '}
                    <NavLink to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign-Up
                    </NavLink>
                </p>
            </div>
        </div>

    </>)
}

export default SignIn;