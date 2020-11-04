import axios from "axios";
import { API_URL_BASE } from "../config";

export const getNote = async (_id) => {
  const res = await axios.get(API_URL_BASE + "/notes/" + _id);
  return res;
}

export const getNotes = async (data) => {
  const res = await axios.get(API_URL_BASE + '/notes/'+ data.group);
  return res;
};

export const postNote = async (note) => {
  const res = await axios.post(API_URL_BASE + "/notes", note);
  return res;
};

export const editNote = async (note) => {
  console.log(note)
  const res = await axios.patch(API_URL_BASE + "/notes/" + note._id, note);
  return res;
};

export const editGroup = async (note) => {
  const res = await axios.patch(API_URL_BASE + "/notes/update/" + note._id, note);
  return res;
};

export const $deleteNote = async (_id) => {
  const res = await axios.delete(API_URL_BASE + "/notes/" + _id);
  return res;
};