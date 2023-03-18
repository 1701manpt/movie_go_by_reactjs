import { useState } from 'react'

function Login ()
{
    const [ email, setEmail ] = useState( '' )
    const [ password, setPassword ] = useState( '' )

    const handleSubmit = ( e ) =>
    {
        e.preventDefault()
        // Handle login submission
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Log in</h1>
                <form onSubmit={ handleSubmit }>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border-2 border-gray-200 p-2 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            type="email"
                            id="email"
                            value={ email }
                            onChange={ ( e ) => setEmail( e.target.value ) }
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border-2 border-gray-200 p-2 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            type="password"
                            id="password"
                            value={ password }
                            onChange={ ( e ) => setPassword( e.target.value ) }
                        />
                    </div>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
                        type="submit"
                    >
                        Log in
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Login
