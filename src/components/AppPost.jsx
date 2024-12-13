import style from "./AppPost.module.css"

function AppPost({title, image, content, tags, published}) {


    return (
        <>
            <div className={`${style.post} ${style.m}`}>

                <div>
                    <img src={image} alt="" />
                </div>

                <div>
                    <h3 className={style.m}> {title} <span>  {tags.join('-')}</span></h3>
                    <p className={style.m}>{content}</p>
                    <button className={style.m}>LEGGI DI PIU'</button>
                </div>

            </div>
        </>
    )
}

export default AppPost