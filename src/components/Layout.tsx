import Background from './Background';

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <Background />
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default Layout;