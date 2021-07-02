import React from 'react';

const embedVideo = ({embedID}) => (
    <>
    <iframe width="50%" height="auto"
    src= {`https://youtube.com/embed/${embedID}`} >
    </iframe> 
    </>
)

export default embedVideo