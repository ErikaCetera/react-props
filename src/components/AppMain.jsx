import style from "./AppMain.module.css"
import AppPost from "./AppPost"
import posts from "../data/data.js"

function AppMain() {


    return (
        <>
            <main>
                <div className={style.row}>

                    {posts.map((curPost) =>
                        curPost.published &&
                        <div key={curPost.id}>
                            <AppPost
                                image={curPost.image ? `/images/${curPost.image}` : "/images/unnamed.png"}
                                title={curPost.title}
                                content={curPost.content}
                                tags={curPost.tags}
                                published={curPost.published}
                            />
                        </div>
                    )
                    }
                </div>
            </main>
        </>
    )
}

export default AppMain