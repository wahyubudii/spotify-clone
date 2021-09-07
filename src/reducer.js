export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after developing...
    token: 'BQDn9IUYJb8wduR2tFqyREN4ulQqM_FkwaUYMVacQpa-FPy-N-GXcIYIHft0hfPpEGPSZtGkMExcfASNl7_e_94BcAourPAYzyru57xBu7OiNSyrGyVHHJqegcOVGltjyariXR3s1Z2PTKiDlu4JPc4xx2yK9gullOxefSKjJdx8rT19'
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        default:
            return state;
    }

};

export default reducer;