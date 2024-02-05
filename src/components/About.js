function About ({image,about}){

    const imgsrc="https://via.placeholder.com/215";
    return (
        <aside>
            <img src={imgsrc} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About;