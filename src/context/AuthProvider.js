import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../FireBase/config';
import { Spin } from 'antd'; //icon loading

//createContext de truy xuat thong tin user
export const Authcontext = React.createContext();

export default function AuthProvider({ chidren }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [isloading, setIsloading] = useState(true);

    //lắng nghe sự kiện khi mình dang nhap thành coogn hay không
    useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged((user) => {
            console.log({ user });
            if (user) {
                //destructuring es6
                const { displayName, email, photoURL, uid } = user;
                console.log("user 1", user.multiFactor.user.displayName)
                setUser({
                    displayName,
                    email,
                    photoURL,
                    uid
                });

                setIsloading(false); //neu login success thi dung loading lai
                navigate('/');
                return;
            }
            navigate('/'); 
        });
        // clean function
        return () => {
            unsubcribed();
        }
    }, [navigate])
    return (
        <Authcontext.Provider value = {{ user }}>
            { chidren } 
        </Authcontext.Provider>
    )
}