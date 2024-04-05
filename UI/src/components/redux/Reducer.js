import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {API_KEY} from './Apikeys'


export const mov = createAsyncThunk("netflixmovie", async () => {
const page = 1
// var mvd = []
// while(page<=3){
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=26370c622e0f21257dbc25703f55be5e&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);
    const data = await res.json();
    // console.log(data)
    // mvd = [...mvd,...data.results]
    // page++
    return data
    
// }
// return mvd
// console.log(mvd)
});

export const discovertv= createAsyncThunk("netflixtv-discovertv", async () => {
// const page = 1
// while(page<=4){

    const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=26370c622e0f21257dbc25703f55be5e&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`);
    const data = await res.json();
    console.log(data)
    return data;
    
// }
    
    });



    export const trendingmoive = createAsyncThunk("netflix/trendingmovie", async () => {
        const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=26370c622e0f21257dbc25703f55be5e&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
        const data = await res.json();
        console.log(data)
        return data;
        });
        export const trendingtv = createAsyncThunk("netflix/trendingtv", async () => {
            const res = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=26370c622e0f21257dbc25703f55be5e&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
            const data = await res.json();
            console.log(data)
            return data;
            });


            export const moviegenre = createAsyncThunk("netflix/moviegenre", async () => {
                const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=26370c622e0f21257dbc25703f55be5e&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
                const data = await res.json();
                console.log(data)
                return data.genres;
                });



                export const tvgenre = createAsyncThunk("netflix/tvgenre", async () => {
                    const res = await fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=26370c622e0f21257dbc25703f55be5e&language=en');
                    const data = await res.json();
                    console.log(data)
                    return data.genres;
                    });



               
            



const list = createSlice({
        name: "list",
        initialState: {
            isLoading: false,
            movies: [],
            discovertv:[],
            moive:[],
            tv:[],
            moviegenre:[],
            tvgenre:[],
            searchQuery: "",

        },
       extraReducers:(builder)=>{
        builder.addCase(mov.fulfilled,(state,{payload})=>{
            state.movies=payload.results
            // console.log(state.movies)
        }) 
        builder.addCase(discovertv.fulfilled,(state,{payload})=>{
            state.discovertv=payload.results
            // console.log(state.movies)
        })
         builder.addCase(trendingmoive.fulfilled,(state,{payload})=>{
            state.moive=payload.results
            // console.log(state.movies)
        }) 
        builder.addCase(trendingtv.fulfilled,(state,{payload})=>{
            state.tv=payload.results
            // console.log(state.movies)
        })
        builder.addCase(moviegenre.fulfilled,(state,{payload})=>{
            state.moviegenre=payload
            console.log(state.moviegenre)
        })
        builder.addCase(tvgenre.fulfilled,(state,{payload})=>{
            state.tvgenre=payload
            console.log(state.tvgenre)
        })
       },
        reducers: {
            setSearchQuery: (state, action) => {
                state.searchQuery = action.payload;}
        },
        });
        export const { setSearchQuery } = list.actions;
export default list.reducer;

