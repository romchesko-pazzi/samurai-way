import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "api-key": "e7564b1a-c25f-42c6-a7dd-fcafd47ef79f",
    }
});

export const profileAPI = {
    getStatus(userId: number) {
        return instance
            .get(`/profile/status/${userId}`)
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(err);
            });
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status});
    },
    follow(userId: string) {
        return instance
            .post(`/follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    unFollow(userId: string) {
        return instance
            .delete(`/follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    setUserProfile(userId: number) {
        return instance
            .get(`/profile/${userId}`)
            .then(response => {
                return response.data;
            });
    }
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    choosePageNumber(pageNumber: number, pageSize: number) {
        return instance
            .get(`/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}

export const authAPI = {
    authMe() {
        return instance
            .get(`/auth/me`)
            .then(response => {
                return response.data;
            });
    },
    logIn(email: string, password: string, rememberMe: boolean) {
        return instance.post('/auth/login', {email, password, rememberMe});
    },
    logOut() {
        return instance.delete('/auth/login');
    }
}