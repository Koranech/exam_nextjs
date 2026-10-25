import {IResponse} from "@/app/models/IResponse";
import {axiosInstance} from "@/app/(private)/constants/constants";
import {IMovie} from "@/app/models/IMovie";
import {IGenre} from "@/app/models/IGenre";


export const movieService = {
    getMovies: async (page: number): Promise<IResponse> => {
        const {data} = await axiosInstance.get<IResponse>(`/discover/movie?page=${page}`)
        return data
    },
    getMovieById: async (id: number): Promise<IMovie> => {
        "use cache"
        const {data: movie} = await axiosInstance.get<IMovie>(`/movie/${id}`)
        return movie
    },
    searchMovies: async (query: string, page: number): Promise<IResponse> => {
        const {data} = await axiosInstance.get<IResponse>('/search/movie', {params: {query, page}});
        return data
    },
    getGenres: async (): Promise<IGenre[]> => {
        const {data} = await axiosInstance.get<{genres: IGenre[]}>('/genre/movie/list')
        return data.genres
    },
    getMoviesByGenres: async (genreIds: number[], page: number): Promise<IResponse> => {
        const {data} = await axiosInstance.get(`/discover/movie?with_genres=${genreIds.join(',')}&page=${page}`)
        return data
    }
}
