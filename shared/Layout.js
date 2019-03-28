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
          <i className="fas fa-bars header-menu" />
        </div>

        <header className="header">
          <div className="header-search">Search...</div>
          <div className="header-avatar">Your face</div>
        </header>

        <aside className="sidenav">
          <div className="sidenav-close-icon">
            <i className="fas fa-times sidenav-brand-close" />
          </div>
          <ul className="sidenav-list">
            <li className="sidenav-list-item">Item One</li>
            <li className="sidenav-list-item">Item Two</li>
            <li className="sidenav-list-item">Item Three</li>
            <li className="sidenav-list-item">Item Four</li>
            <li className="sidenav-list-item">Item Five</li>
          </ul>
        </aside>

        <main className="main">{children}</main>

        <footer className="footer">
          <div className="footer-copyright">&copy; 2019 MIT</div>
          <div className="footer-signature">by Dev & Coffee</div>
        </footer>

        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
            color: #161426;
            font-family: "Open Sans", Helvetica, sans-serif;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
}
