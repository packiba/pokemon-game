import './style.css';

const Layout = ({title, descr, urlBg, colorBg}) => {
    const styleRoot = { background: colorBg || `url(${urlBg})`}
    console.log(styleRoot);
    return (
        <section className="root" style={styleRoot}>
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>{title || 'Layout title'}</h3>
                        <span className="separator"></span>
                    </div>
                    <div className="desc full">
                        <p>{descr || 'Layout description'}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;