import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";


const SignUp = () => {

    const navigate = useHistory();

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [cnfPass, setCnfPass] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [passError, setPassError] = useState("");

    const handlerOnSubmitSignUpForm = async (e) => {
        // // Preventing the screen from refreshing again and again on Submit;
        e.preventDefault();
        console.log(mail);
        console.log(pass);
        console.log(cnfPass);

        setIsLoading(true);

        if (pass === cnfPass) {
            try {
                if (!mail || !pass || !cnfPass) {
                    throw new Error("Please fill all the fields for signup");
                }

                const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBE0s_zEOQLHxzklg47lVyJDi-CIN60n1k`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: mail,
                        password: pass,
                        returnSecureToken: true,
                    }),
                }
                );

                const data = await response.json();
                // console.log(data);

                if (data.error) {
                    throw new Error("Sign-Up failed: Email already exists");
                }
                else {
                    setIsLoading(false);
                    console.log("User have Successfully Sign-Up", data);
                    navigate.push("/");
                }

            } catch (error) {
                console.log(error.message);
            }
        }
        else {
            setPassError("Passwords do not match");
        }

        // // Clearing the fields;
        setMail("");
        setPass("");
        setCnfPass("");
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
                    Sign-Up
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handlerOnSubmitSignUpForm}>
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
                        <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <input
                                type="password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-5"
                                minLength={6}
                                id="cnfpass"
                                placeholder="enter and confirm your password"
                                value={cnfPass}
                                onChange={(e) => { setCnfPass(e.target.value) }}
                            />
                        </div>
                    </div>

                    <div>
                        {passError && <center><p className="text-red-500 font-bold mb-3"> {passError} </p></center>}

                        {isLoading ? (<center><p className="font-bold bg-blue-200 py-2"> Loading... </p></center>) : (<button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign-Up
                        </button>)}
                    </div>
                </form>

                <p className="mt-10 text-center text-md text-gray-500">
                    Already have an account!{' '}
                    <NavLink to="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign-In
                    </NavLink>
                </p>
            </div>
        </div>

    </>)
}

export default SignUp;