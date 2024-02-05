function Article ({title,date,preview}){
    const minutesToRead = Math.ceil(preview.split(``).Length/200);


    const generataEmojis = (emoji, count) => {
        let emojis = '';
        for (let i = 0; i < count; i++){
            emojis += emoji;
        }
        return emojis;
    }

const emojis = minutesToRead < 30 ? generataEmojis ('...', Math.ceil(minutesToRead/5)) : generateEmojis('**', Math.ceil(minutesToRead / 10));

    return(
        <article>

            <h3>{title}</h3>
            <small> {date || "January 1, 1970"}  </small>
            <p>{emojis} {minutesToRead} min read </p>
            <p>{preview}</p>

        </article>
    );
}

export default Article;