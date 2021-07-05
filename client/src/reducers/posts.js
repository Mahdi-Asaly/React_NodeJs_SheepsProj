export default (posts =[], action) => {
    switch(action.type){
        case 'DELETE':
            return posts.filter((post)=> post._id !== action.payload) // keep all the posts except the one with the id we've already removed.
        case 'UPDATE':
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post);   //array of map is an array!
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}