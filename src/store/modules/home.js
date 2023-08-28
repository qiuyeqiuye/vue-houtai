import mockRequest from '@/utils/mockRequest'
import { codePointAt } from 'core-js/core/string';
import { getMetadata } from 'core-js/fn/reflect';
const state = {
     list:{}
};
const mutations = {
    GETDATA(state,list){
        state.list = list;
    }

 
};
const actions = {
    //发请求获取首页的mock数据
    async getData({ commit }) {
        let result = await mockRequest.get('/home/list');
        if(result.code==20000){
         commit("GETDATA",result.data);
        }
    }

  
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}


