const initStateLogin = {
    username: '',
    password: ''
} 

export const loginReducer = (state = initStateLogin, action) => {
    if(action.type === 'SET_LOGIN'){
        return {
            ...state,
            username: action.value.username,
            password: action.value.password
        }
    }
    return state;
}