import type {IMovie} from "../../models/IMovie.ts";
import type {FC} from "react";
import styles from './MovieInfo.module.css'
import StarsRating from "../starsRating/StarsRating.tsx";
import GenreBadge from "../genreBadge/GenreBadge.tsx";

type MovieInfoProps = {
    movie: IMovie,
    compact?: boolean
}

const MovieInfo: FC<MovieInfoProps> = ({movie, compact = false}) => {

    const Title = compact ? 'h3' : 'h1'

    return (
        <div className={compact ? `${styles.info} ${styles.compact}` : styles.info}>
            <Title className={styles.title}>{movie.title}</Title>

            <div className={styles.stats}>
                <StarsRating rating={movie.vote_average}/>
                <span className={styles.releaseDate}>Release Date: {movie.release_date}</span>
            </div>

            <div className={styles.genres}>
                {
                    movie.genres?.map(genre => <GenreBadge key={genre.id} name={genre.name}/>)
                }
            </div>

            {!compact && <h2>Overview</h2>}
            <p className={styles.overview}>{movie.overview}</p>
        </div>
    )
}

export default MovieInfo;
