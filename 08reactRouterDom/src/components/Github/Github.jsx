import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setdata] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/souvikmaity100')
    //         .then(resp => resp.json())
    //         .then(data => {
    //             setdata(data)
    //         })

    // }, [])

    return (
        <div className="flex items-center my-20 w-full justify-center">

            <div className="max-w-xs">
                <div className="bg-white shadow-xl rounded-lg py-3 px-4">
                    <div className="photo-wrapper p-2">
                        <img className="w-32 h-32 rounded-full mx-auto" src={data.avatar_url} alt={data.name}/>
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{data.name}</h3>
                        <div className="text-center text-gray-400 text-xs font-semibold">
                            <p>Web Developer</p>
                        </div>
                        <table className="text-xs my-3">
                            <tbody><tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Username:</td>
                                <td className="px-2 py-2">{data.login}</td>
                            </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Followers:</td>
                                    <td className="px-2 py-2">{data.followers}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Total Repo:</td>
                                    <td className="px-2 py-2">{data.public_repos}</td>
                                </tr>
                            </tbody></table>

                        <div className="text-center my-3">
                            <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href={data.html_url} target='_blank'>View Profile</a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Github

export const gitHubLoder = async ()=>{
    const resp = await fetch('https://api.github.com/users/souvikmaity100')
    return resp.json()
}