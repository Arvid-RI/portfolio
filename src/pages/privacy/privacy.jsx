import React from 'react'
import './privacy.css'
import Navbar from '../../components/navbar/navbar'


const Privacy = () => {
  return (
<div className='privacy'>
    <Navbar/>
    <div className='privacy-part1'>
        <h1 >Privacy Policy</h1>
        <p>Welcome to Arvid RI Portfolio. Your privacy is our priority. This website does not collect, store, or share any personal data from its visitors. Everything you interact with on this site is private and secure.</p>
        <div className='privacy-part2'>
           <h1>No Data Collection</h1>
           <p>
            <ul className='a'>
                <li>We do not use cookies or any form of tracking technologies.</li>
                <li>No personal data is collected, processed, or stored through this website.</li>
            </ul>
           </p>
           <div className='privacy-part3'>
                <h1>No Third-Party Tools</h1>
                <p>This website does not integrate with or use any third-party services or tools that could collect your information.</p>
           </div>
           <div className='privacy-part4'>
                <h1>Your Privacy Is Safe</h1>
                <p>As this portfolio is designed solely to showcase professional work, your browsing experience remains completely private.</p>
                <p>For further concerns or inquiries, please contact the owner of this page via email at: <a href="arvidriworkz@gmail.com">arvidriworkz@gmail.com</a>.</p>
           </div>
        </div>
    </div>
</div>
  )
}

export default Privacy