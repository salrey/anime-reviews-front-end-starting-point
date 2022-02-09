import axios from "axios";
import { useEffect, useState } from "react";
// We want the Front END ROUTE PARAMS. This way they can go to animes/2 and get all the reviews that belong to that anime
import  { useParams } from "react-router-dom";
import Review from "./Review";

const API = process.env.REACT_APP_API_URL;

const Reviews = () => {
    const [ reviews, setReviews ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        //REST API Grammar
        axios.get((`${API}/anime/${id}/reviews`))
        .then((response) => {console.log(response.data); return setReviews(response.data)})
        .catch((err) => console.warn(err))
    }, [id]);

    return (
        <section className="Reviews">
            {reviews.map((review) => <Review key={review.id} review={review} />)}
        </section>
    )
}

export default Reviews;