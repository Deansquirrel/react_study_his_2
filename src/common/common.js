import store from "../data/store";
import user from "./user";
import menu from "./menu";

export const GetUserInfo = () => {
    let rList = [];
    rList.push(...user);
    return rList;
};

export const GetMenuData = () => {
    let rList = [];
    rList.push(...menu);
    return rList;
};

export const checkLogin = () => {
    if(store.getState().hasOwnProperty("user")){
        if(store.getState().user.hasOwnProperty("isAuthenticated")){
            return store.getState().user.isAuthenticated
        }
    }
    return false;
};

export const RandInt = (min=0,max=100) => {
    if(min===max){
        return min
    }
    if(min>max){
        let t = min;
        min=max;
        max = t;
    }
    return min + Math.floor(Math.random()*(max-min));
};

export function jsonSort(array=[], field="", reverse=false) {
    //数组长度小于2 或 没有指定排序字段 或 不是json格式数据
    if(array.length < 2 || !field ||typeof array[0] !=="object") return array;
    //数字类型排序
    if(typeof array[0][field] === "number") {
        array.sort(function(x, y) {return x[field] - y[field]});
    }
    //字符串类型排序
    if(typeof array[0][field] === "string") {
        array.sort(function(x, y) {return x[field].localeCompare(y[field])});
    }
    //倒序
    if(reverse) {
        array.reverse();
    }
    return array;
}
