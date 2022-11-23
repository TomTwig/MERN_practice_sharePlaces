import React from "react"
import UsersList from "../components/UsersList"


export default function Users(){

    const USERS = [
        {id: "u1", name:"Tom", image: "https://avatars.githubusercontent.com/u/89644595?s=400&u=70c31d2cf5fbe59f1606bf3e5b82a78e95775b76&v=4", places: 3}
    ];


    return(
        <UsersList items={USERS}/>
    )
}