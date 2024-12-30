import Nav from '../components/Nav/MainNav/Nav'
import Footer from '../components/Footer/Footer'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {



    return (
        <div style={{ maxWidth: '100vw' }}>
            <Nav />
            <div>Layout</div>
            <main style={{ minHeight: '100vh' }}>

                {children}
            </main>
            <Footer />
        </div>
    )
}