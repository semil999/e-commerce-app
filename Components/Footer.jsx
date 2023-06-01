import Link from "next/link";
import styles from "./../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-4" style={{ background: "#F1F5F9" }}>
        <div className="container">
          <div className="row py-4 text-center text-lg-start row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-5 g-4">
            <div className="col">
              <div>
                <div>
                  <Link href={'/'}>
                    <img
                      src={"/logo.png"}
                      className={styles.footerImg}
                      alt="logo"
                    />
                  </Link>
                </div>
                <div>
                  <p>
                    Wear the {"<code/>"} <br /> Premium coding tshirts, hoodies{" "}
                    <br /> and apparals
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <h6 className={styles.h6}>SHOP</h6>
                <div>
                  <Link href="/products/1" className={styles.link}>
                    T-Shirts
                  </Link>
                </div>
                <div>
                  <Link href="/products/5" className={styles.link}>
                    Sweatshirts
                  </Link>
                </div>
                <div>
                  <Link href="/products/3" className={styles.link}>
                    Hoodies
                  </Link>
                </div>
                <div>
                  <Link href="/products/4" className={styles.link}>
                    Mugs
                  </Link>
                </div>
                <div>
                  <Link href="/products/2" className={styles.link}>
                    Caps
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <h6 className={styles.h6}>CUSTOMER SERVICE</h6>
                <div>
                  <Link href="/contactus" className={styles.link}>
                    Contact Us
                  </Link>
                </div>
                <div>
                  <Link href="/about" className={styles.link}>
                    About Us
                  </Link>
                </div>
                <div>
                  <Link href="/returnpolicy" className={styles.link}>
                    Return Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <h6 className={styles.h6}>POLICY</h6>
                <div>
                  <Link href="/privacy" className={styles.link}>
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link href="/terms" className={styles.link}>
                    Terms and Conditions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <img
                  src="https://codeswear.com/pay.png"
                  alt="payment"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
