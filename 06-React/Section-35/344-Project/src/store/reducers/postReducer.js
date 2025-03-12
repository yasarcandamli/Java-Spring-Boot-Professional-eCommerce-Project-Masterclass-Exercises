const initialState = {
    posts: [],
    loading: false,
    error: null,
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POST_REQUEST':
            return {
                ...state,
                loading: true,
            };

        case 'FETCH_POST_SUCCESS':
            return {
                ...state,
                loading: false,
                posts: action.payload,
            };

        case 'FETCH_POST_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};