function Footer() {
    return (
        <footer className="page-footer red">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()}
                    &nbsp;Danil Panov
                    <a className="grey-text text-lighten-2 right" href="https://github.com/Fastestnuclearwatermelon">
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
