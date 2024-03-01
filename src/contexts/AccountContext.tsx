import { ReactNode, createContext, useCallback, useEffect, useState } from "react"
import { api } from "../lib/axios";

interface AccountUser {
    name: string;
    avatarUrl: string;
    bio: string;
    login: string;
    followers: number;
}

interface IssueType {
    body: string;
    comments: number;
    number: number;
    title: string;
    updated_at: string;
    user: string;
}

interface AccountType {
    userData?: AccountUser;
    issues: IssueType[];
    getAccountUserData: (name: string) => Promise<void>;
    getIssues: (query: string) => Promise<void>;
}

export const AccountContext = createContext({} as AccountType)

interface AccountProviderProps {
    children: ReactNode
}


export function AccountProvider({ children }: AccountProviderProps) {
    const [userData, setUserData] = useState<AccountUser>();
    const [issues, setIssues] = useState<IssueType[]>([]);

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

    const getIssues = useCallback(async (query?: string) => {
        const response = await api.get(`/search/issues?q=${query ? query : ''}%20repo:aline-doleron/ignite-github-blog`);

        setIssues(response.data.items);
    }, [])

    useEffect(() => {
        getAccountUserData('aline-doleron')
    }, [getAccountUserData])


    useEffect(() => {
        getIssues()
    }, [getAccountUserData])


    return (
        <AccountContext.Provider
            value={{
                userData,
                issues,
                getAccountUserData,
                getIssues
            }}>
            {children}
        </AccountContext.Provider>
    )
}