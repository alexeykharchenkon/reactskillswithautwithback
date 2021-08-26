import { Item, User } from "@models/types";
import axios from "axios";
import { authUrl, itemsUrl } from "@config/index";

class ApiService {
    public async addItem(item: Item): Promise<Item | null> {
        try {
            const { data } = await axios.post(itemsUrl,  
                {
                    title: item.title,
                    text: item.text,
                    isChecked: item.isChecked
                },
                {
                    headers: {
                    "Accept": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                }
            );
            return data;
        } catch { return null }
    } 
    public async deleteItem(item: Item): Promise<void> {
        try { await axios.delete(itemsUrl + `/${item.id}`) } catch {}
    }

    public async updateItem(item: Item): Promise<void> {
        try { await axios.put(itemsUrl + `/${item.id}`, item) } catch {}
    }

    public async getItems(): Promise<Item[]> {
        try{
            const { data } = await axios.get(itemsUrl);
            return data;
        } catch { return [] }  
    }

    public async userLogin(user: User): Promise<User | null> {
        try {
            const { data } = await axios.post(authUrl + "/login", {
                name: user.name,
                password: user.password
            });

            localStorage.setItem("token", data.encodedJwt)
            return data.user;
        } catch { return null }
    }
    public async userRegister(user: User): Promise<User | null> {
        try {
            const { data } = await axios.post(authUrl + "/register", {
                name: user.name,
                password: user.password
            });

            localStorage.setItem("token", data.encodedJwt)
            return data.user;
        } catch { return null }
    }
}

export const apiService = new ApiService();