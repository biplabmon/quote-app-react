import React, { useEffect, useState } from "react";
import axios from "axios";
import './Card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Loading from "../Loading/Loading";

const Card = () => {
    const [newQuot, setNewQuot] = useState({
        quote: '',
        author: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = () => {
        setLoading(true);
        axios.get('https://api.quotable.io/random')
            .then(response => {
                const { content } = response.data;
                const { author } = response.data;
                setNewQuot({ quote: content, author: author });
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })
    };

    const newQuoteHandaler = () => {
        fetchQuote();
    };

    const twitterHandaler = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${newQuot.quote}  ${'~' + newQuot.author}`;
        window.open(twitterUrl, '_blank');
    };

    const whatsappHandaler = () => {
        const whatsappUrl = `whatsapp://send?text=${newQuot.quote}  ${'~' + '*' + newQuot.author + '*'}`;
        window.open(whatsappUrl, '_blank');
    }


    return (
        <>
            {/* {loading && (<div className="loading_spainer">
                <Loading />
                <p>Loading...</p>
            </div>)} */}
            <Loading isLoading={loading} />

            <div className="card_main">
                <div className="quote_text">
                    <p> {newQuot.quote} </p>
                </div>
                <div className="quote_author">
                    <p>~ {newQuot.author} </p>
                </div>
                <div className="new_quote">
                    <div className="socisl_button">
                        <button onClick={twitterHandaler}> <FontAwesomeIcon icon={faTwitter} /> </button>
                        <button onClick={whatsappHandaler}> <FontAwesomeIcon icon={faWhatsapp} /> </button>
                    </div>
                    <div className="quote_button">
                        <button onClick={newQuoteHandaler}>New Quote!</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;