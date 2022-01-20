import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useUsersFetcher, useUsersSetError, useUsersSetLoading} from "../redux/customHooks";

const UsersList = () => {
    const {users, isLoading, error} = useSelector(({users, isLoading, error}) => ({
        users,
        isLoading,
        error
    }));
    const usersFetcher = useUsersFetcher();
    const usersSetLoading = useUsersSetLoading();
    const usersSetError = useUsersSetError();
    const fetchUsers = async () => {
        try {
            usersSetLoading();
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const payload = await response.json();
            setTimeout(() => {
                usersFetcher(payload);
            }, 2000)

        } catch (e) {
            usersSetError('Failed')
        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if (error) {
        return (
            {error}
        )
    }

    return (
        <div>
            {users.map(user => (
                <h4 key={user.id}>
                    Name: {user.name} <br/>
                    Address: {user.address.city} <br/>
                    Email: {user.email}
                    <hr/>
                </h4>))}
        </div>
    )
}

export function Users() {
    return (
        <div>
            <UsersList/>
        </div>
    )
};