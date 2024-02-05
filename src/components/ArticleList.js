import Article from "./Article";

function ArticleList ({posts}){
    if(!Array.isArray(post)){
        console.log("Invalid article prop.Expected an array")
         return null;
    }


    return ( 
        <main>
            {posts.map((article) =>{
                return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes}></Article>
            })}
        </main>

    )
}
export default ArticleList;