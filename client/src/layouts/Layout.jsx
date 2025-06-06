import Navbar from '../components/Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="main-content">
                <div className="content-wrapper">
                    {children}
                </div>
            </main>

        </div>
    );
};

export default Layout;
