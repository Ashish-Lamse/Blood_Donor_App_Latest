import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {reducer as formReducer} from 'redux-form'

const addDonor = (action) =>{
    return action.payload
};

const donars_data =handleActions({
    NEW_DONAR_REGISTERED_DATA: (state = [], action) => {
        let donars_data = null;
        donars_data = [...state, addDonor(action)];
        return donars_data;
    },
    UPDATE_DONAR_REGISTERED_DATA: (state = [], action) => {
        let donars_data = null;
        donars_data = action.payload;
        return donars_data;
    },

    DEFAULT_DONAR_DATA: (state = [], action) => {
        let donars_data = null;
        donars_data = action.payload;
        return donars_data;
    }
},[]);

const request_poster_data =handleActions({
    NEW_REQUEST: (state = [], action) => {
        let request_poster_data = null;
        request_poster_data = [...state, addDonor(action)];
        return request_poster_data;
    }
},[]);

const all_comments =handleActions({
    ADD_COMMENT: (state = [], action) => {
        let all_comments = null;
        all_comments = [...state, addDonor(action)];
        return all_comments;
    }
},[]);


const login_user=handleActions({
    CURRENT_LOGGEDIN_USER:(state = {}, action)=>{
        let login_user = null;
        login_user = action.payload;
        return login_user;
    }
},{});

const  search_data=handleActions({
    SEARCH_DATA: (state = [], action) => {
        let search_data = null;
        search_data  = [...state, addDonor(action)]
        return search_data ;
    },
    SEARCH_DATAA: (state = [], action) => {
        let search_data = null;
        search_data =action.payload;
        return search_data ;
    },
    DEFAULT_SEARCH_DATA: (state = [], action) => {
        let search_data = null;
        search_data = action.payload;
        return search_data;
    }
},[]);

const boolean_popups =handleActions({
    BOOLEAN_POPUPS: (state = [], action) => {
        let boolean_popups = null;
        boolean_popups = action.payload;
        return boolean_popups;
    }
},[]);

const user_request_data =handleActions({
    USER_REQUEST_DATA: (state = [], action) => {
        let user_request_data= null;
        user_request_data = [...state, addDonor(action)];
        return user_request_data;
    },
    ADD_COMMENT:(state = [], action)=>{
        let user_request_data= null;
        user_request_data =  action.payload;
        return user_request_data;
    }
},[]);

const popup_check_booleanValue =handleActions({
    POPUP_CHECK_BOOLEANVALUE: (state = [], action) => {
        let popup_check_booleanValue= null;
        popup_check_booleanValue = action.payload;
        return popup_check_booleanValue;
    }
},[]);


const recent_donar_status =handleActions({
    RECENT_DONAR: (state = [], action) => {
        let recent_donar_status = null;
        recent_donar_status = action.payload;
        return recent_donar_status;
    }
},[]);

const allReducers=combineReducers({
    donars_data:donars_data,
    search_data:search_data,
    boolean_popups:boolean_popups,
    user_request_data:user_request_data,
    popup_check_booleanValue:popup_check_booleanValue,
    recent_donar_status:recent_donar_status,
    request_poster_data:request_poster_data,
    all_comments,
    login_user,
    form : formReducer
});

export default allReducers
