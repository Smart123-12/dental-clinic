import React, { useState, useEffect } from 'react';
import { 
  Phone, Calendar, Clock, MapPin, Menu, X, 
  CheckCircle2, Star, ChevronRight, Stethoscope, 
  Smile, ShieldPlus, Activity, MessagesSquare
} from 'lucide-react';
import './index.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={isScrolled ? {boxShadow: 'var(--shadow-md)'} : {}}>
        <div className="container">
          <div className="logo">
            <ShieldPlus color="var(--color-blue-600)" size={32} />
            Smile<span>Care</span>
          </div>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} style={mobileMenuOpen ? {display:'flex', flexDirection:'column', position:'absolute', top:'100%', left:0, width:'100%', background:'white', padding:'2rem', boxShadow:'var(--shadow-md)'} : {}}>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
            <li><a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Reviews</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="nav-actions">
            <a href="#booking" className="btn btn-primary" style={{display: mobileMenuOpen ? 'none' : 'flex'}}>Book Appointment</a>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section" style={{paddingTop: '8rem', minHeight: '90vh', display: 'flex', alignItems: 'center'}}>
        <div className="container grid-2">
          <div className="hero-content animate-fade-in-up">
            <div style={{display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'var(--color-blue-50)', color:'var(--color-blue-600)', padding:'0.5rem 1rem', borderRadius:'var(--radius-full)', fontWeight:'600', marginBottom:'1.5rem'}}>
              <Star size={16} fill="currentColor" /> Top Rated Dental Clinic
            </div>
            <h1 style={{fontSize:'3.5rem', fontWeight:'800', lineHeight:'1.2', color:'var(--color-blue-900)', marginBottom:'1.5rem'}}>
              Advanced Dental Care for a <span style={{color:'var(--color-blue-600)'}}>Healthy, Confident Smile</span>
            </h1>
            <p style={{fontSize:'1.25rem', color:'var(--color-gray-600)', marginBottom:'2rem'}}>
              Expert dentists, modern technology, and personalized treatment to give you the smile you deserve.
            </p>
            <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
              <a href="#booking" className="btn btn-primary">Book Appointment <ChevronRight size={20}/></a>
              <a href="tel:+1234567890" className="btn btn-outline"><Phone size={20}/> Call Now</a>
            </div>
          </div>
          <div className="hero-image animate-fade-in" style={{position:'relative'}}>
            <div style={{position:'absolute', top:'-5%', right:'-5%', width:'110%', height:'110%', background:'linear-gradient(to right bottom, var(--color-blue-100), var(--color-blue-50))', borderRadius:'60% 40% 30% 70% / 60% 30% 70% 40%', zIndex:'-1', animation:'float 6s ease-in-out infinite'}}></div>
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Smiling patient with dentist" style={{borderRadius:'var(--radius-xl)', boxShadow:'var(--shadow-lg)'}} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section section-bg">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Premium <span>Services</span></h2>
            <p className="section-subtitle">We provide a wide range of top-tier dental services using the latest technology to ensure your absolute comfort and health.</p>
          </div>
          <div className="grid-3">
            {[
              { icon: <Smile size={40}/>, title: 'Teeth Cleaning', desc: 'Professional deep cleaning to remove plaque and tartar for healthy gums.' },
              { icon: <ShieldPlus size={40}/>, title: 'Dental Implants', desc: 'Permanent and natural-looking solutions to replace missing teeth.' },
              { icon: <Activity size={40}/>, title: 'Root Canal', desc: 'Pain-free root canal treatments to save infected or damaged teeth.' },
              { icon: <Star size={40}/>, title: 'Teeth Whitening', desc: 'Advanced whitening techniques for a noticeably brighter, whiter smile.' },
              { icon: <Stethoscope size={40}/>, title: 'Braces & Aligners', desc: 'Clear aligners and modern braces for perfectly straight teeth.' },
              { icon: <CheckCircle2 size={40}/>, title: 'General Dentistry', desc: 'Comprehensive checkups, fillings, and preventive care.' }
            ].map((srv, idx) => (
              <div key={idx} style={{background:'white', padding:'2.5rem 2rem', borderRadius:'var(--radius-lg)', boxShadow:'var(--shadow-sm)', transition:'var(--transition)', ':hover':{transform:'translateY(-5px)', boxShadow:'var(--shadow-lg)'}}} className="service-card">
                <div style={{color:'var(--color-blue-600)', marginBottom:'1.5rem', background:'var(--color-blue-50)', display:'inline-block', padding:'1rem', borderRadius:'var(--radius-md)'}}>
                  {srv.icon}
                </div>
                <h3 style={{fontSize:'1.5rem', color:'var(--color-blue-900)', marginBottom:'1rem'}}>{srv.title}</h3>
                <p style={{color:'var(--color-gray-600)'}}>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container grid-2">
          <div style={{position:'relative'}}>
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clinic Interior" style={{borderRadius:'var(--radius-xl)', boxShadow:'var(--shadow-md)'}} />
            <div style={{position:'absolute', bottom:'-2rem', right:'-2rem', background:'white', padding:'2rem', borderRadius:'var(--radius-lg)', boxShadow:'var(--shadow-lg)', borderBottom:'4px solid var(--color-blue-600)'}}>
              <h4 style={{fontSize:'2.5rem', color:'var(--color-blue-600)', fontWeight:'800'}}>15+</h4>
              <p style={{color:'var(--color-gray-600)', fontWeight:'600'}}>Years Experience</p>
            </div>
          </div>
          <div>
            <h2 className="section-title" style={{textAlign:'left'}}>Trust Your Smile to the <span>Experts</span></h2>
            <p style={{color:'var(--color-gray-600)', fontSize:'1.125rem', marginBottom:'1.5rem'}}>
              At SmileCare, we are dedicated to providing exceptional dental services tailored to your unique needs. Our state-of-the-art facility is equipped with modern technology to deliver painless and effective treatments.
            </p>
            <ul style={{display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'2rem'}}>
              {['Certified & Experienced Doctors', 'Modern & Advanced Technology', '100% Painless Treatments', 'Strict Hygiene & Sterilization'].map((item, i) => (
                <li key={i} style={{display:'flex', alignItems:'center', gap:'0.75rem', fontSize:'1.125rem', color:'var(--color-gray-800)', fontWeight:'500'}}>
                  <CheckCircle2 color="var(--color-blue-600)" /> {item}
                </li>
              ))}
            </ul>
            <a href="#doctors" className="btn btn-outline">Meet Our Team</a>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section id="doctors" className="section section-blue">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Meet Our <span>Specialists</span></h2>
            <p className="section-subtitle">Our team consists of highly qualified and experienced dental professionals committed to your oral health.</p>
          </div>
          <div className="grid-3" style={{justifyContent:'center'}}>
            <div style={{background:'white', borderRadius:'var(--radius-lg)', overflow:'hidden', boxShadow:'var(--shadow-md)'}}>
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Dr. Sarah Johnson" style={{width:'100%', height:'350px', objectFit:'cover'}} />
              <div style={{padding:'2rem', textAlign:'center'}}>
                <h3 style={{fontSize:'1.5rem', color:'var(--color-blue-900)', marginBottom:'0.5rem'}}>Dr. Sarah Johnson</h3>
                <p style={{color:'var(--color-blue-600)', fontWeight:'600', marginBottom:'1rem'}}>Chief Orthodontist</p>
                <p style={{color:'var(--color-gray-600)'}}>12+ Years Experience. Specializes in Braces & Invisalign.</p>
              </div>
            </div>
            {/* Add more doctor cards if needed, keeping it focused for now */}
             <div style={{background:'white', borderRadius:'var(--radius-lg)', overflow:'hidden', boxShadow:'var(--shadow-md)'}}>
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Dr. Michael Chen" style={{width:'100%', height:'350px', objectFit:'cover', objectPosition: 'top'}} />
              <div style={{padding:'2rem', textAlign:'center'}}>
                <h3 style={{fontSize:'1.5rem', color:'var(--color-blue-900)', marginBottom:'0.5rem'}}>Dr. Michael Chen</h3>
                <p style={{color:'var(--color-blue-600)', fontWeight:'600', marginBottom:'1rem'}}>Prosthodontist</p>
                <p style={{color:'var(--color-gray-600)'}}>10+ Years Experience. Expert in Implants & Cosmetics.</p>
              </div>
            </div>
             <div style={{background:'white', borderRadius:'var(--radius-lg)', overflow:'hidden', boxShadow:'var(--shadow-md)'}}>
              <img src="https://images.unsplash.com/photo-1594824432258-2904b6bd74c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Dr. Emily Davis" style={{width:'100%', height:'350px', objectFit:'cover'}} />
              <div style={{padding:'2rem', textAlign:'center'}}>
                <h3 style={{fontSize:'1.5rem', color:'var(--color-blue-900)', marginBottom:'0.5rem'}}>Dr. Emily Davis</h3>
                <p style={{color:'var(--color-blue-600)', fontWeight:'600', marginBottom:'1rem'}}>Endodontist</p>
                <p style={{color:'var(--color-gray-600)'}}>8+ Years Experience. Specializes in Pain-free Root Canals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">What Our Patients <span>Say</span></h2>
          </div>
          <div className="grid-3">
            {[
              {name: 'Amanda Wilson', text: 'Best dental experience ever! The staff is so welcoming and Dr. Sarah made sure my braces journey was smooth.'},
              {name: 'Robert Smith', text: 'Got my implants here. Highly professional team and zero pain during the procedure. Highly recommended!'},
              {name: 'Jessica Lee', text: 'The clinic is spotless and the equipment is top-notch. My teeth whitening results are amazing.'}
            ].map((review, i) => (
              <div key={i} style={{background:'var(--color-gray-50)', padding:'2rem', borderRadius:'var(--radius-lg)', position:'relative', border:'1px solid var(--color-gray-200)'}}>
                <div style={{display:'flex', gap:'0.25rem', color:'#fbbf24', marginBottom:'1rem'}}>
                  {[1,2,3,4,5].map(s => <Star key={s} fill="currentColor" size={20}/>)}
                </div>
                <p style={{color:'var(--color-gray-600)', fontStyle:'italic', marginBottom:'1.5rem'}}>"{review.text}"</p>
                <div style={{fontWeight:'700', color:'var(--color-blue-900)'}}>{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form & Contact */}
      <section id="booking" className="section section-bg">
        <div className="container grid-2">
          {/* Form */}
          <div style={{background:'white', padding:'3rem', borderRadius:'var(--radius-xl)', boxShadow:'var(--shadow-lg)'}}>
            <h2 style={{fontSize:'2rem', color:'var(--color-blue-900)', marginBottom:'2rem'}}>Book an Appointment</h2>
            <form style={{display:'flex', flexDirection:'column', gap:'1.5rem'}} onSubmit={e => e.preventDefault()}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem'}}>
                <input type="text" placeholder="Full Name" required style={inputStyle} />
                <input type="tel" placeholder="Phone Number" required style={inputStyle} />
              </div>
              <input type="email" placeholder="Email Address" required style={inputStyle} />
              <select style={inputStyle} required>
                <option value="">Select Service</option>
                <option value="cleaning">Teeth Cleaning</option>
                <option value="implants">Dental Implants</option>
                <option value="root-canal">Root Canal</option>
                <option value="whitening">Teeth Whitening</option>
                <option value="braces">Braces & Aligners</option>
              </select>
              <input type="date" required style={inputStyle} />
              <button type="submit" className="btn btn-primary" style={{width:'100%', padding:'1rem', fontSize:'1.125rem'}}>Book Appointment</button>
            </form>
          </div>

          {/* Contact Details */}
          <div id="contact" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <h2 className="section-title" style={{textAlign:'left'}}>Get In <span>Touch</span></h2>
            <p style={{color:'var(--color-gray-600)', marginBottom:'2rem'}}>Have questions? Reach out to us or visit our clinic.</p>
            
            <div style={{display:'flex', flexDirection:'column', gap:'1.5rem', marginBottom:'2rem'}}>
              <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                <div style={iconBoxStyle}><MapPin color="var(--color-blue-600)" /></div>
                <div>
                  <h4 style={{color:'var(--color-blue-900)', fontWeight:'700'}}>Clinic Address</h4>
                  <p style={{color:'var(--color-gray-600)'}}>123 Smile Avenue, Medical District, NY 10001</p>
                </div>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                <div style={iconBoxStyle}><Phone color="var(--color-blue-600)" /></div>
                <div>
                  <h4 style={{color:'var(--color-blue-900)', fontWeight:'700'}}>Phone Number</h4>
                  <p style={{color:'var(--color-gray-600)'}}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                <div style={iconBoxStyle}><Clock color="var(--color-blue-600)" /></div>
                <div>
                  <h4 style={{color:'var(--color-blue-900)', fontWeight:'700'}}>Working Hours</h4>
                  <p style={{color:'var(--color-gray-600)'}}>Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps Fake Embed (Image) for aesthetics */}
            <div style={{width:'100%', height:'200px', backgroundColor:'var(--color-gray-200)', borderRadius:'var(--radius-lg)', overflow:'hidden'}}>
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Map" style={{width:'100%', height:'100%', objectFit:'cover', opacity:'0.7'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor:'var(--color-blue-900)', color:'white', paddingTop:'4rem', paddingBottom:'2rem'}}>
        <div className="container grid-3" style={{marginBottom:'3rem'}}>
          <div>
            <div className="logo" style={{color:'white', marginBottom:'1.5rem'}}>
              <ShieldPlus color="white" size={32} />
              Smile<span style={{color:'var(--color-blue-100)'}}>Care</span>
            </div>
            <p style={{color:'var(--color-blue-100)', marginBottom:'1.5rem'}}>
              Providing advanced dental care with a personalized touch to ensure your teeth stay healthy and beautiful.
            </p>
            <div style={{display:'flex', gap:'1rem'}}>
              <a href="#" style={{background:'rgba(255,255,255,0.1)', padding:'0.5rem 1rem', borderRadius:'2rem', fontSize:'0.875rem'}}>Facebook</a>
              <a href="#" style={{background:'rgba(255,255,255,0.1)', padding:'0.5rem 1rem', borderRadius:'2rem', fontSize:'0.875rem'}}>Instagram</a>
              <a href="#" style={{background:'rgba(255,255,255,0.1)', padding:'0.5rem 1rem', borderRadius:'2rem', fontSize:'0.875rem'}}>Twitter</a>
            </div>
          </div>
          <div>
            <h4 style={{fontSize:'1.25rem', fontWeight:'700', marginBottom:'1.5rem'}}>Quick Links</h4>
            <ul style={{display:'flex', flexDirection:'column', gap:'0.75rem', color:'var(--color-blue-100)'}}>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#about">About Clinic</a></li>
              <li><a href="#doctors">Our Doctors</a></li>
              <li><a href="#booking">Book Appointment</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{fontSize:'1.25rem', fontWeight:'700', marginBottom:'1.5rem'}}>Contact Info</h4>
            <ul style={{display:'flex', flexDirection:'column', gap:'1rem', color:'var(--color-blue-100)'}}>
              <li style={{display:'flex', gap:'0.5rem'}}><MapPin /> 123 Smile Ave, NY 10001</li>
              <li style={{display:'flex', gap:'0.5rem'}}><Phone /> +1 (555) 123-4567</li>
              <li style={{display:'flex', gap:'0.5rem'}}><MessagesSquare /> info@smilecare.com</li>
            </ul>
          </div>
        </div>
        <div className="container" style={{borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'2rem', textAlign:'center', color:'var(--color-blue-100)', fontSize:'0.875rem'}}>
          &copy; {new Date().getFullYear()} SmileCare Clinic. All Rights Reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" style={{
        position:'fixed', bottom:'2rem', right:'2rem', backgroundColor:'#25D366', color:'white', 
        width:'60px', height:'60px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'var(--shadow-lg)', zIndex:'1000', transition:'var(--transition)', ':hover': {transform:'scale(1.1)'}
      }} title="Chat on WhatsApp">
        <MessagesSquare size={30} />
      </a>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '1rem',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--color-gray-200)',
  backgroundColor: 'var(--color-gray-50)',
  fontSize: '1rem',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'var(--transition)'
};

const iconBoxStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: 'var(--color-blue-50)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
};

export default App;
