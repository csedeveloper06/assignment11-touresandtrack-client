

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className="w-20 h-20 rounded-full mr-2" src="https://i.ibb.co/nc4wTyB/logo.png" alt="" />
                    <p><span className="font-bold text-red-500">ToursNTracks</span>
                        <br/>Providing reliable travel company since 2012</p>
                </div> 
                <nav>
                    <header className="footer-title">Services</header> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <header className="footer-title">Company</header> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <header className="footer-title">Legal</header> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;