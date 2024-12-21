import '../homepage/homepage.css'
import Navbar from '../../components/navbar/navbar'
import Intro from '../../components/intro/intro'
import Skills from '../../components/skills/skills'
import AboutMe from '../../components/aboutme/aboutme'
import Websites from '../../components/websites/websites'
import FeaturedStuffzs from '../../components/featuredstuffz/featuredstuffzs'
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'


const Homepage = () => {
return (
    <div className='homepage'>

<Navbar />

< Intro />

<Skills />

<AboutMe />

<Websites />

<FeaturedStuffzs />

<Contact />

<Footer />


    </div>
    )
}
    
export default Homepage;