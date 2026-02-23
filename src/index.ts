import type { User } from "./types";
import { createIoCContainer } from "./ioc";

const ioc = createIoCContainer();

const renderUsers = async () => {
  const usersService = ioc.resolve("users");
  const users = await usersService.getUsers();

  const listNode = document.getElementById("users-list");
  if (!listNode) return;

  users.forEach((user: User) => {
    const li = document.createElement("li");
    li.innerHTML = user.name;
    listNode.appendChild(li);
  });
};
const app = () => {
  renderUsers();
};

window.onload = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  ioc.register("config", config?.api);

  const logger = ioc.resolve("logger");
  logger.info("Page is loaded.");

  app();
};
