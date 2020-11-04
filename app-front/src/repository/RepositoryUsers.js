import axios from "axios";
import {API_URL_BASE} from '../config';

export const getUsers = async () => {
    const res = await axios.get(API_URL_BASE + "/users");
    return res
}

export const postUser = async (username) => {
    const res = await axios.post(URL + '/users', { username })
    return res.data
}

export const $deleteUser = async (_id) => {
    const res = await axios.delete(URL + "/users/" + _id);
    return res.data
}