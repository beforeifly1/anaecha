import Link from 'next/link';

const Header = () => {
    return (
        <>
            <header>
                <Link href="/">
                    <a>Anaecha</a>
                </Link>
            </header>
            <nav>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </nav>
        </>
    );
};  
export default Header;