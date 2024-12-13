import style from "./AppMain.module.css"
import AppPost from "./AppPost"
import posts from "../data/data.js"

function AppMain() {


    return (
        <>
            <main>
                {posts.map((curPost) => 
                    <div  key = {curPost.id} className={style.row}>
                        <AppPost
                            image = {`/images/${curPost.image}`}
                            title = {curPost.title}
                            content = {curPost.content}
                            tags = {curPost.tags}
                            published = {curPost.published}
                        />
                    </div>
                )
                }
            </main>
        </>
    )
}

export default AppMain