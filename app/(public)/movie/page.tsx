import {IMovie} from "@/app/models/IMovie";
import {movieService} from "@/app/(private)/services/api.service";


const page = async () => {
   const movie: IMovie = await movieService.getMovieById(1)

    return (
        <div>
            {movie.id}
        </div>
    );
};

export default page;
