const initStateLogin = {
    username: '',
    password: '',
} 

const initStateUserData= {
    data:''
}

const initStateProductData= {
    branch_code         : '',
    transaction_number  : '',
    principal_code      : '',
    warehouse_code      : '',
    status              : '',
}

const initStateInputProductData= {
    data:''
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

export const UserDataReducer = (state = initStateUserData, action) => {
if(action.type === 'SET_USER_DATA'){
    // console.log('action data' , action.value)
    return {
        ...state,
        data: action.value,
    }
}
return state;
}

export const StockDataReducer = (state = initStateProductData, action) => {
if(action.type === 'SET_STOCK_DATA'){
    console.log('action data' , action.value)
    
    return {
        ...state,
        branch_code         : action.value.branch,
        transaction_number  : action.value.number.transaction_number,
        principal_code      : action.value.code,
        warehouse_code      : action.value.warehouse_code,
        status              : action.value.status ,
    }
}
return state;
}

export const InputDataReducer = (state = initStateInputProductData, action) => {
if(action.type === 'INPUT_STOCK_DATA'){
    // console.log('action data' , action.value)
    return {
        ...state,
        data: action.value,
    }
}
return state;
}