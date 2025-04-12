export const loginUser = (state,action)=>{
    state.data = action.payload;
    state.name=action.payload.email.split('@')[0]
    state.isAuthenticated = true; 
}

export const logoutUser = (state)=>{
    state.data = {};
    state.isAuthenticated = false;
}