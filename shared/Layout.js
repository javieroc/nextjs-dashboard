import Link from "next/link";
import Head from "next/head";

export default class Layout extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <div className="grid-container">
        <Head>
          <title>{title}</title>
          <link rel="stylesheet" href="static/styles.css" />
        </Head>
        <div className="menu-icon">
          <i className="fas fa-bars header__menu" />
        </div>

        <header className="header">
          <div className="header__search">Search...</div>
          <div className="header__avatar">Your face</div>
        </header>

        <aside className="sidenav">
          <div className="sidenav__close-icon">
            <i className="fas fa-times sidenav__brand-close" />
          </div>
          <ul className="sidenav__list">
            <li className="sidenav__list-item">Item One</li>
            <li className="sidenav__list-item">Item Two</li>
            <li className="sidenav__list-item">Item Three</li>
            <li className="sidenav__list-item">Item Four</li>
            <li className="sidenav__list-item">Item Five</li>
          </ul>
        </aside>

        <main className="main">{children}</main>

        <footer className="footer">
          <div className="footer__copyright">&copy; 2018 MTH</div>
          <div className="footer__signature">Made with love by pure genius</div>
        </footer>

        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
            color: #fff;
            font-family: "Open Sans", Helvetica, sans-serif;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
}
