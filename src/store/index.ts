import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
    token: window.sessionStorage.getItem('token'),
    username: '',
    uid:'',

    routeInfo: null,
};

const mutations = {
    LOGIN: (state, data) => {
        //更改token的值
        state.token = data;
        window.sessionStorage.setItem('token', data);
    },
    LOGOUT: (state) => {
        //登出的时候要清除token
        state.token = null;
        state.username = '';
        window.sessionStorage.removeItem('token');
    },
    USERNAME: (state, data) => {
        //把用户名存起来
        state.username = data;
        window.sessionStorage.setItem('username', data);
    },
    UID: (state, data) => {
        //把用户名存起来
        state.uid = data;
        window.sessionStorage.setItem('uid', data);
    },
    USERINFO: (state, data) => {
        //把用户名存起来
        state.username = data.username;
        window.sessionStorage.setItem('username', data.username);
        state.token = data.token;
        window.sessionStorage.setItem('token', data.token);
        state.uid = data.uid;
        window.sessionStorage.setItem('uid', data.uid);
    },


    SET_ROUTE_INFO: (state, res) => {
        state.routeInfo = res;
    },
};

const actions = {
    // UserLogin({ commit }, data){
    //     // ...api或其他异步操作
    //     commit('LOGIN', data);
    // },
    // UserLogout({ commit }){
    //     commit('LOGOUT');
    // },
    // UserName({ commit }, data){
    //     commit('USERNAME', data);
    // },
    // Uid({ commit }, data){
    //     commit('UID', data);
    // },
    // UserInfo({ commit }, data){
    //     commit('USERINFO', data);
    // },
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});