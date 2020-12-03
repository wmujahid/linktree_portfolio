import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import LinkButton from './LinkButton';

const LinkList = () => {
  const links = [
    'https://www.instagram.com/wmujahid47/',
    'https://twitter.com/wmujahid47',
    'https://www.linkedin.com/in/wmujahid47/',
    'https://github.com/wmujahid',
  ];

  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center">
        <Image
          alt="logo"
          width="150"
          height="150"
          src={process.env.PUBLIC_URL + '2020_wafeeq_headshot.jpeg'}
          className="mb-4"
          rounded
        />
        <h5 className="mb-4 text-white">@wmujahid47</h5>
        {links.map((link) => (
          <LinkButton key={link} link={link} />
        ))}
      </div>
    </ListGroup>
  );
};

export default LinkList;
