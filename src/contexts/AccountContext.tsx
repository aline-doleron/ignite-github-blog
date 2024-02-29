import { ReactNode, createContext, useCallback, useEffect, useState } from "react"
import { api } from "../lib/axios";

interface AccountUser {
    name: string;
    avatarUrl: string;
    bio: string;
    login: string;
    followers: number;
}

interface AccountType {
    userData?: AccountUser;
    getAccountUserData: (name: string) => Promise<void>
}

export const AccountContext = createContext({} as AccountType)

interface AccountProviderProps {
    children: ReactNode
}


export function AccountProvider({ children }: AccountProviderProps) {
    const [userData, setUserData] = useState<AccountUser>();

    const getAccountUserData = useCallback(async (username: string) => {
        const response = await api.get(`users/${username}`);
        const { name, avatar_url, bio, login, followers } = response.data;

        setUserData({
            name,
            avatarUrl: avatar_url,
            bio,
            login,
            followers
        });
    }, [])

    useEffect(() => {
        getAccountUserData('aline-doleron')
    }, [getAccountUserData])


    return (
        <AccountContext.Provider
            value={{
                userData,
                getAccountUserData
            }}>
            {children}
        </AccountContext.Provider>
    )
}