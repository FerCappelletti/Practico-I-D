import axios from "axios";
import {API_URL_BASE} from '../config';

export const getUsers = async () => {
    const res = await axios.get(API_URL_BASE + "/users");
    return res
}

export const postUser = async (username) => {
    const res = await axios.post(API_URL_BASE + '/users', { username })
    return res.data
}

export const $deleteUser = async (_id) => {
    const res = await axios.delete(API_URL_BASE + "/users/" + _id);
    return res.data
}