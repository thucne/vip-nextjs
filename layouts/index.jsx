import Navigation from "@components/Navigation";
import Meta from "@components/Meta";

const Layout = ({children}) => {
    return <main>
        <Meta />
        <Navigation />
        {children}
    </main>
}

export default Layout;