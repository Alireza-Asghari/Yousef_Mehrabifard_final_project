export const depositMoney =(amount)=>{
    return (dispatch) =>{
        dispatch({
            type: 'deposit',
            payload:amount
        })
      
    }
}

export const withdrawMoney =(amount)=>{
    return (dispatch) =>{
        dispatch({
            type: 'withdraw',
            payload:amount
        })
    }
}

export const fetchData =(book)=>{
    return (dispatch) =>{
        dispatch({
            type: 'FETCH_BOOKS_DATA',
            payload:book
        })
    }
}

export const logInData =(user)=>{
    return (dispatch) =>{
        dispatch({
            type: 'LOG_IN_DATA',
            payload:user
        })
    }
}