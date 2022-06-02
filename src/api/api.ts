import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "api-key": "b586ccec-80f3-4fec-93a0-9cb544188701",
    }
});

export const getUsers = (currentPage: number, pageSize: number) => {
    return instance
        .get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
}

export const choosePageNumber = (pageNumber: number, pageSize: number) => {
    return instance
        .get(`/users?page=${pageNumber}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
}

export const authMe = () => {
    return instance
        .get(`auth/me`)
        .then(response => {
            return response.data;
        })
}

export const reqForFollow = (userId: string) => {
    return instance
        .post(`/follow/${userId}`)
        .then(response => {
            return response.data;
        })
}

export const reqForUnFollow = (userId: string) => {
    return instance
        .delete(`/follow/${userId}`)
        .then(response => {
            return response.data;
        })
}

export const reqForSettingUser = (userId: number) => {
    return instance
        .get(`/profile/${userId}`)
        .then(response => {
            return response.data;
        })
}


