import './style.css';

const Layout = ({title, urlBg, colorBg, children}) => {
    const styleRoot = { background: colorBg || (urlBg ? `url(${urlBg})` : 'none')}
    return (
        <section className="root" style={styleRoot}>
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>{title || 'Layout title'}</h3>
                        <span className="separator"></span>
                    </div>
                    <div className="desc full">
                        {children || 'Layout description'}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;