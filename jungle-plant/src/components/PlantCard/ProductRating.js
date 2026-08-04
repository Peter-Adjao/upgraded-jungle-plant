import { useMemo } from "react";
import { Star, StarHalf } from "lucide-react";
import PropTypes from "prop-types";
import "./ProductRating.css";


function ProductRating({
    rating = 0,
    reviewCount= 0,
    maxStars = 5,
}) {
     console.log("Rating:", rating);
     console.log("reviewCount:", reviewCount);
     
    //Clamp rating to valid range, then round to the nearest 0.5
    const clampedRating = Math.min(maxStars, Math.max(0, rating));
    const  roundedRating = Math.round(clampedRating * 2) /2;

    const stars = useMemo(() => {
        return Array.from({ length: maxStars}, (_, i) => {
            const starValue = i + 1;

            if (starValue <= roundedRating) {
                return (
                    <Star
                    key={i}
                    className="rating-star rating-star--filled"
                    />
                );
            }

            if (starValue - 0.5 === roundedRating) {
                return (
                    <StarHalf
                        key={i}
                        className="rating-star rating-star--filled"
                    />
                );
            }

            return (
                <Star
                    key={i}
                    className="rating-star rating-star--empty"
                />
            );
        });
    }, [roundedRating, maxStars]);

    return (
        <div
        className="product-rating"
        aria-label={`${rating} out of ${maxStars} stars from ${reviewCount} reviews`}
        >
            <div className="product-rating__stars">
                {stars}
            </div>
 
            <span className="product-rating__score">
                {/* {clampedRating.toFixed(1)} */}
            </span>
            <span className="product-rating__reviews">
                ({reviewCount.toLocaleString()})
            </span>
        </div>
    );
}


ProductRating.propTypes = {
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
    maxStars: PropTypes.number,
};

export default ProductRating;