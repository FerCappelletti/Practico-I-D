import axios from "axios";
import { API_URL_BASE } from "../config";

export const getNotes = async () => {
  const res = await axios.get(API_URL_BASE);
  return res.data;
};

export const postNote = async (note) => {
  const res = await axios.post(API_URL_BASE + "/notes", note);
  return res;
};

export const editNote = async (_id) => {
  const res = await axios.patch(API_URL_BASE + "/notes" + _id);
  return res;
};

export const $deleteNote = async (_id) => {
  const res = await axios.delete(API_URL_BASE + "/notes" + _id);
  return res;
};