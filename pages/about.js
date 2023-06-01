import { useRouter } from "next/router"
import styles from "./../styles/About.module.css"
import HeadComponet from "@/Components/HeadComponet"

const About = () => {
    const router = useRouter()
  return (
    <>
        <HeadComponet title={'About Us'}/>
        <div className='container'>
            <div className='text-center pt-5'>
                <img src="/logo.png" alt="img" className={styles.logo}/>
            </div>
            <div className="text-center">
                <h2 className="pb-4">Welcome to E-Commerce</h2>
                <p className="px-lg-5 mx-lg-5">Introducing E-Commerce, a revolutionary e-commerce platform that delivers amazing products at unbeatable prices. Built on a foundation of NextJs and Json-Server, our website offers a seamless shopping experience powered by server-side rendering. Whether you're a tech enthusiast or simply looking for a stylish geek T-shirt, E-Commerce has something for everyone. And for those curious about the development process, Shop now at E-Commerce and experience the future of online shopping.</p>
            </div>
            <div className="text-center pt-3 pb-5 mb-4 border-bottom border-2">
                <button type="button" onClick={() => router.push('/')} className={styles.shoppingbtn}>Start Shopping</button>
            </div>
            <div className="pb-5">
                <div className='row g-4'>
                    <div className='col-lg-8 col-12 order-1 order-lg-0'>
                        <div>
                            <h3 className="text-center text-lg-start pb-1">About E-Commerce</h3>
                            <p>E-Commerce is revolutionizing the way India shops for unique, geeky apparel. From our one-of-a-kind hoodie designs to our wide selection of stickers, mugs and other accessories, we have everything you need to express your individuality and stand out from the crowd. Say goodbye to the hassle of hopping from store to store in search of your perfect geeky look. With just a single click on our website, you can find it all!</p>
                            <p>But what sets E-Commerce apart from the competition? The answer is simple: our unique designs and commitment to providing the highest quality products. We understand the importance of style and durability, which is why we put so much effort into creating unique designs and using only the best materials. Don't settle for mediocre clothing and accessories - choose E-Commerce and make a statement with your wardrobe.</p>
                            {/* <p>At E-Commerce, we strive to be more than just an online store - we want to be a community where like-minded individuals can come together and express themselves through fashion. Whether you're a gamer, a programmer, or simply someone who loves all things geeky, we have something for you. Our collection is curated with the latest trends and fan favorites in mind, ensuring that you'll always find something new and exciting.</p> */}
                            <p>We also understand the importance of affordability and convenience. That's why we offer competitive prices and fast shipping, so you can get your hands on your new geeky apparel as soon as possible. Plus, with our easy-to-use website and secure checkout process, shopping with us is a breeze.</p>
                            <p>So why wait? Visit E-Commerce.com today and discover the latest in geeky fashion. With our unique designs and high-quality products, we're sure you'll find something you'll love. Join our community and express your individuality through fashion.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-12 order-lg-1 order-0'>
                        <div>
                            <img src="https://codeswear.com/order.jpg" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About