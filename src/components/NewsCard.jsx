import React, { useEffect, useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        fetch('/data.json')
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setNewsData(data);
          })
          .catch((error) => {
            console.error('Error fetching news data:', error);
          });
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {newsData.map((news) => {
        const { id, title, details, image_url, author, total_view, rating } = news;
        return (
          <Card className="mb-4" key={id}>
            <Card.Header className="d-flex align-items-center">
            <div className="flex-grow-1">

<Rating
  placeholderRating={rating}
  readonly
  emptySymbol={<FaRegStar />}
  placeholderSymbol={<FaStar className="text-warning" />}
  fullSymbol={<FaStar />}
/>
<span>{rating}</span>
</div>
<div>
<FaEye /> {total_view}
</div>

            </Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Img variant="top" src={image_url} />
              <Card.Text>
                {details.length < 250 ? (
                  <>{details}</>
                ) : (
                  <>
                    {details.slice(0, 250)}...<Link>Read More</Link>
                  </>
                )}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
            <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
              <div className="ps-2 flex-grow-1">
                <p className="mb-0">{author?.name}</p>
                <p>
                  <small>{moment(author?.published_date).format('yyyy-MM-DD')}</small>
                </p>
              </div>
              <div>
                <FaRegBookmark />
                <FaShareAlt />
              </div>





             
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
};

export default NewsCard;
