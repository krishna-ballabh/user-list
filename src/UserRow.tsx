import {FC} from 'react';
interface Props{
    email : string;
    gender: string;
}

const UserRow: FC<Props> = ({email,gender}) => {
    let emails : string[] = email.split(" ");
    let n : number = 1;
    return(
            <div className = "h-32 text-center  font-semibold block w-full pl-5 bg-green-400 flex flex-col pb-5 ">
                email is : {email};<br/>
                gender is : {gender}
                
            </div>
    );
}
export default UserRow;