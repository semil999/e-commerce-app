import Link from "next/link"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import styles from "./../styles/Header.module.css"
import { useRouter } from "next/router"
import { FaBars, FaCartPlus } from 'react-icons/fa';

const Header = () => {
    const router = useRouter()
    // #0cf
    // #0b47a9
  return (
    <>
        <div className="position-sticky top-0" style={{zIndex : 9999}}>
        <Navbar expand="lg" className={`${styles.navbar} px-xl-5 p-0`}>
            <Container fluid>
                <Navbar.Brand className="py-0 m-0"><Link href={'/'}><img src={'/logo.png'} alt="logo" className={styles.logo}/></Link></Navbar.Brand>
                <Button variant="primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="ms-auto d-lg-none">
                    <FaBars />
                </Button>
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="ms-auto my-2 my-lg-0 d-flex align-items-center" style={{ maxHeight: '100px' }}>
                    <Link className={styles.link} href="/">Home</Link>
                    <Link className={styles.link} href="/products/1">T-Shirts</Link>
                    <Link className={styles.link} href="/products/3">Hoodies</Link>
                    <Link className={styles.link} href="/products/2">Caps</Link>
                    <Link className={styles.link} href="/products/5">SweatShirts</Link>
                    <Link className={styles.link} href="/products/4">Mugs</Link>
                    <Link className={styles.link} href="/products/6">Oversized T-Shirts</Link>
                    <button className={`position-relative border-0 bg-transparent fs-3 ${styles.cart}`}>
                        <FaCartPlus />
                        <span className={`text-white translate-middle border border-light rounded-circle ${styles.bage}`}>
                            0
                        </span>
                    </button>
                    <button type="button" onClick={() => router.push('/login')} className={styles.login}>Login</button>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        <div className="offcanvas offcanvas-start d-lg-none" tabIndex="-1" id="offcanvasRight" data-bs-backdrop="static" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">
                <img src={'/logo.png'} alt="logo" className="w-50"/>
            </h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <p>
                <button type="button" onClick={() => router.push('/login')} className={styles.login}>Login</button>
                <button className={`ms-2 position-relative border-0 bg-transparent fs-3 ${styles.cart}`}>
                    <FaCartPlus />
                    <span className={`text-white translate-middle border border-light rounded-circle ${styles.bage}`}>0</span>
                </button>
            </p>
            <p><Link className={styles.canvasLink} href="/">Home</Link></p>
            <p><Link className={styles.canvasLink} href="/products/1">T-Shirts</Link></p>
            <p><Link className={styles.canvasLink} href="/products/3">Hoodies</Link></p>
            <p><Link className={styles.canvasLink} href="/products/2">Caps</Link></p>
            <p><Link className={styles.canvasLink} href="/products/5">SweatShirts</Link></p>
            <p><Link className={styles.canvasLink} href="/products/4">Mugs</Link></p>
            <p><Link className={styles.canvasLink} href="/products/6">Oversized T-Shirts</Link></p>
          </div>
        </div>
    </>
  )
}

export default Header