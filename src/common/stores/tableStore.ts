import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, LOAD_ITEMS, SET_ACTIVE_ITEM_UNDEFINED, UPDATE_ITEM } from "@actions/index";
import { Item } from "@models/types";
import { apiService } from "@services/apiService";
import { makeAutoObservable, runInAction } from "mobx";

export class TableStore {

    data: Item [] = [];
    activeItem: Item | undefined = undefined;

    constructor() {
        makeAutoObservable(this); 
        apiService.getItems().then(data => 
            runInAction(() => {
                this.data = [...data];
            })
        );    
    }

    operationFunc = (action: string, item: Item) => {
        switch(action) {
            case LOAD_ITEMS:
                apiService.getItems().then(data => 
                    runInAction(() => {
                        this.data = [...data]
                    })
                );    
                break;
            case ADD_ITEM:
                apiService.addItem(item).then(data =>
                    runInAction(() => {
                        this.data = data ? [...this.data, data] : this.data;
                    })
                );
                break;
            case DELETE_ITEM:
                apiService.deleteItem(item).then(() => 
                    runInAction(() => {
                        this.data = this.data.filter(i => i.id !== item.id);
                    })
                );
                break;
            case UPDATE_ITEM:
                apiService.updateItem(item).then(() => {
                    runInAction(() => {
                        this.data = this.data.map(i => i.id !== item.id ? i : { ...item });
                        this.activeItem = undefined;
                    });
                });   
                break;
            case EDIT_ITEM:
                this.activeItem = item;
                break;
            case SET_ACTIVE_ITEM_UNDEFINED:
                this.activeItem = undefined;
                break;    
        }
    }
}