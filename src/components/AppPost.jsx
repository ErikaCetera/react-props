import style from "./AppPost.module.css"

function AppPost({ title, image, content, tags }) {
    const arrayTags = tags.map((curTag, index) => <p key={index} className={`${curTag} ${style.m}`}>#{curTag}</p>)

    return (
        <>
            <div className={style.col}>
                <div className={`${style.post} ${style.m}`}>

                    <div>
                        <img src={image} alt="" />
                    </div>

                    <div>
                        <h3 className={style.m}> {title} </h3>
                        {arrayTags}
                        <p className={style.m}>{content}</p>
                        <button className={style.m}>LEGGI DI PIU'</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AppPost