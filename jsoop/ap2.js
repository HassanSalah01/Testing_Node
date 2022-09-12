const profiles = [
{
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
},
{
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
},
{
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
},
{
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
},
{
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
},
{
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
},
];

const users = {
1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
},
2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
},
3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
},
4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
},
5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
},
6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
},
};

const movies = {
1: {
    id: 1,
    name: 'Planet Earth',
},
2: {
    id: 2,
    name: 'Selma',
},
3: {
    id: 3,
    name: 'Million Dollar Baby',
},
4: {
    id: 4,
    name: 'Forrest Gump',
},
5: {
    id: 5,
    name: 'Get Out',
},
};


const intoArray=(arr)=>{
    const mo = Object.entries(arr).map((info)=>{
        return {key:info[0],...info[1]}
    })
    return mo;
}
const moviesArr = intoArray(movies);
const usersArr = intoArray(users);

const mapusers = profiles.map((info)=>{
    return {userName:users[info.userID].name,
            userids :info.userID,
            favoriteMovieID:info.favoriteMovieID,
            movieName:movies[info.favoriteMovieID].name,
            }
})
const fin = moviesArr.filter((info)=>{
    return info
})
// console.log(fin)
let superArr = [];
const s2 = (name)=>{
    for(let i = 0 ; i < profiles.length;i++){
        let ite =[];
        if(profiles[i].favoriteMovieID ==name){

            ite.push(profiles[i].id);
        }
        superArr.push({movieId:name,userArr:ite})
    }
} 
s2(2);
console.log(superArr);












// const movie = [...movies];

// const moviesLike = profiles.map((info)=>{
//     return info.favoriteMovieID
// })
// console.log(moviesLike)