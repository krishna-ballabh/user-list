import {FC,memo, useEffect, useState} from "react";
import axios from "axios";
import { createModuleResolutionCache } from "typescript";
import UserRow from "./UserRow";

interface Props{
    page:number;
    title : string;
}

const UserList: FC<Props> = ({page, title}) => {
    const[users,setUsers] = useState<any>([]);
    useEffect(() => {
        console.log("Before Request trigger");
        axios.get(
            "https://randomuser.me/api/?inc=id,name,gender,email&page="+page+"&results=20"
            ).then((response) => {
                console.log("after response arrival");
                console.log(response.data.results);
                setUsers(response.data.results);
            });
    
        console.log("After request trigger ");
    }, [page]); 

    
    return(
        <div>
            {users.map((u: { email: string; gender: string; }) => <UserRow email = {u.email} gender = {u.gender}/>)}
        </div>
    );
}

UserList.defaultProps = {};
export default memo(UserList);