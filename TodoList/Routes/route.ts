import { Router } from "express";
import {
  deletAllToDoList,
  deletOneToList,
  get_undone_or_done_task,
  getAllData,
  getOneData,
  postToDoList,
  UpdateToDoList,
} from "../Controller/Functions";

const route = Router();

route.route("/getall").get(getAllData);
route.route("/post").post(postToDoList);
route.route("/deleteall").delete(deletAllToDoList);
route.route("/delete/:id").delete(deletOneToList);
route.route("/").get(get_undone_or_done_task);
route.route("/update/:id").patch(UpdateToDoList);
route.route("/getone/:id").get(getOneData);

export default route;
