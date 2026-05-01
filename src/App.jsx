import React, { useState, useEffect, useRef } from 'react';
import {
  Phone, Calendar, Clock, MapPin, Menu, X,
  CheckCircle2, Star, ChevronRight, Shield,
  Smile, Activity, Sparkles, MessageCircle,
  Award, Users, HeartPulse, Zap, Send, Navigation
} from 'lucide-react';
import './index.css';

/* ── tiny hook: IntersectionObserver for scroll animations ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── Services data ── */
const SERVICES = [
  { icon: <Smile size={28}/>, title: 'Teeth Cleaning', desc: 'Professional deep cleaning to remove plaque and tartar, keeping your gums healthy and breath fresh.', price: 'From $79' },
  { icon: <Zap size={28}/>, title: 'Root Canal', desc: 'Pain-free, precision root canal treatments to save your natural tooth and eliminate infection.', price: 'From $299' },
  { icon: <Sparkles size={28}/>, title: 'Braces & Aligners', desc: 'Clear aligners and modern braces for a perfectly straight smile you\'ll be proud to show off.', price: 'From $1,499' },
  { icon: <Shield size={28}/>, title: 'Dental Implants', desc: 'Permanent, natural-looking implants that look and feel just like your real teeth.', price: 'From $999' },
  { icon: <Star size={28}/>, title: 'Teeth Whitening', desc: 'Advanced whitening for a brilliantly bright smile — results you\'ll notice after a single session.', price: 'From $149' },
  { icon: <HeartPulse size={28}/>, title: 'General Dentistry', desc: 'Comprehensive checkups, fillings, X-rays, and preventive care for your whole family.', price: 'From $59' },
];

/* ── Why Choose Us data ── */
const WHY = [
  { icon: <Award size={24}/>, title: 'Experienced Doctors', desc: '15+ years of combined expertise across all dental specialities.' },
  { icon: <Zap size={24}/>, title: 'Modern Equipment', desc: 'State-of-the-art digital X-rays, laser dentistry, and 3D imaging.' },
  { icon: <HeartPulse size={24}/>, title: 'Affordable Care', desc: 'Transparent pricing with flexible payment plans — no surprise bills.' },
  { icon: <Shield size={24}/>, title: 'Painless Treatments', desc: 'Advanced anaesthesia and gentle techniques for 100% comfort.' },
  { icon: <Clock size={24}/>, title: 'Same-Day Slots', desc: 'Emergency appointments available 6 days a week, 9 AM – 8 PM.' },
  { icon: <Sparkles size={24}/>, title: 'Strict Sterilisation', desc: 'Hospital-grade hygiene protocols — your safety is our top priority.' },
];

/* ── Testimonials data ── */
const TESTIMONIALS = [
  {
    name: 'Priya Sharma', role: 'Teacher, Mumbai',
    avatar: 'https://i.pravatar.cc/150?img=47',
    text: 'I was terrified of dentists until I came here. The team was so warm and the procedure was completely painless. My smile has transformed completely!',
    stars: 5,
  },
  {
    name: 'Rahul Mehta', role: 'Software Engineer, Ahmedabad',
    avatar: 'https://i.pravatar.cc/150?img=11',
    text: 'Got my implants done here. Incredibly professional team. The whole process — from consultation to fitting — was smooth and transparent.',
    stars: 5,
  },
  {
    name: 'Sneha Patel', role: 'Business Owner, Surat',
    avatar: 'https://i.pravatar.cc/150?img=45',
    text: 'The teeth whitening results are unbelievable! I have received so many compliments. The clinic is spotless and the equipment is cutting-edge.',
    stars: 5,
  },
];

/* ── Main App ── */
export default function App() {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [bookingDone, setBookingDone]   = useState(false);
  const [form, setForm]                 = useState({ name:'', phone:'', email:'', service:'', date:'', msg:'' });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleBook = (e) => {
    e.preventDefault();
    setBookingDone(true);
    setTimeout(() => setBookingDone(false), 5000);
    setForm({ name:'', phone:'', email:'', service:'', date:'', msg:'' });
  };

  /* Reveal hooks */
  const [heroRef,    heroV]    = useReveal();
  const [statsRef,   statsV]   = useReveal();
  const [svcRef,     svcV]     = useReveal();
  const [whyRef,     whyV]     = useReveal();
  const [testiRef,   testiV]   = useReveal();
  const [bookRef,    bookV]    = useReveal();

  return (
    <div style={{ overflowX:'hidden' }}>

      {/* ───────── NAVBAR ───────── */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <HeartPulse color="var(--primary)" size={28}/>
            Smile<span className="logo-dot">Care</span>
          </div>

          <ul className="nav-links">
            {['Home','Services','Why Us','Testimonials','Contact'].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(' ','-')}`} onClick={closeMenu}>{l}</a></li>
            ))}
          </ul>

          <div className="nav-cta">
            <a href="tel:+911234567890" className="btn btn-outline" style={{padding:'.65rem 1.25rem', fontSize:'.875rem'}}>
              <Phone size={16}/> Call Now
            </a>
            <a href="#booking" className="btn btn-primary" style={{padding:'.65rem 1.25rem', fontSize:'.875rem'}}>
              Book Appointment
            </a>
            <button className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background:'white', padding:'1.5rem 5%', borderTop:'1px solid var(--gray-100)' }}>
            {['Home','Services','Why Us','Testimonials','Contact','Booking'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(' ','-')}`}
                onClick={closeMenu}
                style={{ display:'block', padding:'.75rem 0', fontWeight:600, color:'var(--gray-700)', borderBottom:'1px solid var(--gray-100)' }}>
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ───────── HERO ───────── */}
      <section id="home" className="hero" ref={heroRef}>
        <div className="container grid-2" style={{ minHeight:'90vh', paddingTop:'2rem', paddingBottom:'4rem' }}>

          <div className={`hero-content${heroV ? ' fade-up' : ''}`} style={{ opacity: heroV ? 1 : 0 }}>
            <div className="hero-badge"><Sparkles size={14}/> #1 Rated Dental Clinic in Your City</div>

            <h1 className="hero-title">
              Best Dental Care<br/>
              <span className="hl">in Your City</span>
            </h1>
            <p className="hero-sub">
              Book your appointment today. Expert dentists, modern tech, and zero pain — your perfect smile is one visit away.
            </p>

            <div className="hero-btns">
              <a href="tel:+911234567890" className="btn btn-white">
                <Phone size={18}/> Call Now
              </a>
              <a href="#booking" className="btn btn-outline-white">
                <Calendar size={18}/> Book Appointment
              </a>
            </div>

            <div className="hero-stats">
              {[['5,000+','Happy Patients'],['15+','Years Experience'],['98%','Satisfaction Rate']].map(([n,l]) => (
                <div key={l}>
                  <div className="stat-num">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`hero-img-wrap float-anim${heroV ? ' fade-right' : ''}`} style={{ opacity: heroV ? 1 : 0 }}>
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=700&q=85&auto=format&fit=crop"
              alt="Smiling patient at SmileCare dental clinic"
              style={{ borderRadius:'var(--r-xl)', boxShadow:'var(--sh-xl)' }}
            />
            {/* floating badge top */}
            <div className="hero-badge-float top">
              <div className="badge-icon" style={{ background:'var(--primary-light)' }}>
                <Shield size={20} color="var(--primary)"/>
              </div>
              <div>
                <div className="badge-text-top">Certified Clinic</div>
                <div className="badge-text-main">ISO 9001:2015</div>
              </div>
            </div>
            {/* floating badge bottom */}
            <div className="hero-badge-float bottom">
              <div className="badge-icon" style={{ background:'#fef3c7' }}>
                <Star size={20} color="#f59e0b" fill="#f59e0b"/>
              </div>
              <div>
                <div className="badge-text-top">Google Rating</div>
                <div className="badge-text-main">4.9 ★ (600+ Reviews)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── STATS BAR ───────── */}
      <div style={{ background:'var(--gray-50)', padding:'1rem 0' }}>
        <div className="container">
          <div ref={statsRef} className={`stats-bar${statsV ? ' fade-up' : ''}`} style={{ opacity: statsV ? 1 : 0, background:'white' }}>
            {[['5,000+','Patients Treated'],['15+','Years of Excellence'],['12','Specialist Doctors'],['98%','Satisfaction Rate']].map(([n,l], i, arr) => (
              <React.Fragment key={l}>
                <div className="stat-box">
                  <div className="stat-box-num">{n}</div>
                  <div className="stat-box-label">{l}</div>
                </div>
                {i < arr.length - 1 && <div className="stat-divider"/>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ───────── SERVICES ───────── */}
      <section id="services" className="section">
        <div className="container" ref={svcRef}>
          <div className="text-center">
            <div className="section-tag"><Sparkles size={13}/> Our Specialities</div>
            <h2 className="section-title">Premium <span>Dental Services</span></h2>
            <p className="section-sub">Everything your smile needs, under one roof — with the latest technology and the most gentle hands in the city.</p>
          </div>
          <div className="grid-3" style={{ marginTop:'1rem' }}>
            {SERVICES.map((s, i) => (
              <div key={i} className={`service-card${svcV ? ` fade-up delay-${(i%4)+1}` : ''}`} style={{ opacity: svcV ? 1 : 0 }}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div style={{ marginTop:'1.25rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ color:'var(--primary)', fontWeight:700, fontSize:'.9rem' }}>{s.price}</span>
                  <a href="#booking" style={{ display:'flex', alignItems:'center', gap:'.3rem', color:'var(--primary)', fontWeight:700, fontSize:'.875rem' }}>
                    Book <ChevronRight size={14}/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WHY CHOOSE US ───────── */}
      <section id="why-us" className="section section-navy" ref={whyRef}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:'4rem', alignItems:'center' }} className="grid-2">
            <div>
              <div className="section-tag" style={{ background:'rgba(14,165,233,.15)', color:'#7dd3fc' }}>
                <Award size={13}/> Why SmileCare
              </div>
              <h2 className="section-title white">Why Thousands <span>Choose Us</span></h2>
              <p className="section-sub white">We combine clinical excellence with a warm, welcoming environment so every visit feels comfortable.</p>
              <a href="#booking" className="btn btn-primary" style={{ marginTop:'0.5rem' }}>
                <Calendar size={18}/> Book Free Consultation
              </a>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
              {WHY.map((w, i) => (
                <div key={i} className={`why-card${whyV ? ` fade-up delay-${(i%4)+1}` : ''}`} style={{ opacity: whyV ? 1 : 0 }}>
                  <div className="why-icon">{w.icon}</div>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── TESTIMONIALS ───────── */}
      <section id="testimonials" className="section section-gradient" ref={testiRef}>
        <div className="container">
          <div className="text-center">
            <div className="section-tag"><Users size={13}/> Patient Stories</div>
            <h2 className="section-title">What Our Patients <span>Say</span></h2>
            <p className="section-sub">Real reviews from real patients — see why SmileCare is the most trusted clinic in the city.</p>
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`testi-card${testiV ? ` fade-up delay-${i+1}` : ''}`} style={{ opacity: testiV ? 1 : 0 }}>
                <div className="testi-stars">
                  {Array(t.stars).fill(0).map((_, s) => <Star key={s} size={16} fill="currentColor"/>)}
                </div>
                <div className="testi-quote">"</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <img src={t.avatar} alt={t.name} className="testi-avatar"/>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── BOOKING + CONTACT ───────── */}
      <section id="booking" className="section section-alt" ref={bookRef}>
        <div className="container">
          <div className="text-center" style={{ marginBottom:'3rem' }}>
            <div className="section-tag"><Calendar size={13}/> Easy Booking</div>
            <h2 className="section-title">Book Your <span>Appointment</span></h2>
            <p className="section-sub">Fill the form and we'll confirm your slot within 30 minutes via WhatsApp or call.</p>
          </div>

          <div className="grid-2" style={{ gap:'2.5rem', alignItems:'start' }}>

            {/* ── Booking Form ── */}
            <div className={`contact-card${bookV ? ' fade-left' : ''}`} style={{ opacity: bookV ? 1 : 0 }}>
              <h3 style={{ fontSize:'1.4rem', color:'var(--navy)', fontWeight:700, marginBottom:'1.75rem', display:'flex', alignItems:'center', gap:'.6rem' }}>
                <Calendar size={22} color="var(--primary)"/> Appointment Form
              </h3>

              {bookingDone ? (
                <div style={{ textAlign:'center', padding:'2.5rem 1rem' }}>
                  <CheckCircle2 size={56} color="var(--teal)" style={{ margin:'0 auto 1rem' }}/>
                  <h4 style={{ color:'var(--navy)', fontSize:'1.3rem', marginBottom:'.5rem' }}>Appointment Requested!</h4>
                  <p style={{ color:'var(--gray-500)' }}>We'll confirm your slot via WhatsApp within 30 minutes. 🎉</p>
                </div>
              ) : (
                <form onSubmit={handleBook} style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" placeholder="Rahul Sharma" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone *</label>
                      <input className="form-input" placeholder="+91 98765 43210" required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input className="form-input" type="email" placeholder="rahul@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Service *</label>
                      <select className="form-input" required value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
                        <option value="">Select Service</option>
                        <option>Teeth Cleaning</option>
                        <option>Root Canal</option>
                        <option>Braces & Aligners</option>
                        <option>Dental Implants</option>
                        <option>Teeth Whitening</option>
                        <option>General Checkup</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Preferred Date *</label>
                      <input className="form-input" type="date" required min={new Date().toISOString().split('T')[0]} value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Additional Message</label>
                    <textarea className="form-input" rows={3} placeholder="Any specific concerns or questions..." value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} style={{ resize:'vertical' }}/>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width:'100%', padding:'1rem', fontSize:'1.05rem' }}>
                    <Send size={18}/> Confirm Appointment
                  </button>
                  <p style={{ textAlign:'center', fontSize:'.8rem', color:'var(--gray-400)' }}>
                    🔒 Your info is private. We never share your data.
                  </p>
                </form>
              )}
            </div>

            {/* ── Contact Details + Map ── */}
            <div id="contact" className={`${bookV ? ' fade-right' : ''}`} style={{ opacity: bookV ? 1 : 0, display:'flex', flexDirection:'column', gap:'1.5rem' }}>
              <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
                {[
                  { icon:<MapPin size={20}/>, label:'Clinic Address', value:'123 Smile Avenue, Medical District, Ahmedabad – 380001, Gujarat' },
                  { icon:<Phone size={20}/>, label:'Phone / WhatsApp', value:'+91 98765 43210 | +91 87654 32109' },
                  { icon:<Clock size={20}/>, label:'Working Hours', value:'Mon – Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM' },
                ].map((c,i) => (
                  <div key={i} className="contact-info-item">
                    <div className="ci-icon">{c.icon}</div>
                    <div>
                      <div className="ci-label">{c.label}</div>
                      <div className="ci-value">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div style={{ borderRadius:'var(--r-lg)', overflow:'hidden', boxShadow:'var(--sh-md)', border:'1px solid var(--gray-200)' }}>
                <iframe
                  title="SmileCare Dental Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9015258698677!2d72.56714431496!3d23.02458798495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f84d5c7a89%3A0xb3a21d8e2fa8b3fb!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%" height="220"
                  style={{ border:0, display:'block' }}
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick action buttons */}
              <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                <a href="tel:+919876543210" className="btn btn-primary" style={{ flex:1, justifyContent:'center' }}>
                  <Phone size={16}/> Call Us
                </a>
                <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20dental%20appointment%20at%20SmileCare." target="_blank" rel="noreferrer"
                  className="btn" style={{ flex:1, justifyContent:'center', background:'#25d366', color:'white', borderRadius:'var(--r-full)', fontWeight:700, gap:'.5rem' }}>
                  <MessageCircle size={16}/> WhatsApp
                </a>
                <a href="https://maps.google.com/?q=Ahmedabad+Gujarat" target="_blank" rel="noreferrer"
                  className="btn btn-outline" style={{ flex:1, justifyContent:'center' }}>
                  <Navigation size={16}/> Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <HeartPulse size={24} color="var(--primary)"/> SmileCare
              </div>
              <p className="footer-desc">Providing advanced dental care with a personal touch. Your perfect smile is our mission.</p>
              <div className="footer-socials">
                {['f','in','tw','yt'].map(s => <a key={s} href="#" className="social-btn">{s}</a>)}
              </div>
            </div>
            <div>
              <div className="footer-heading">Quick Links</div>
              <div className="footer-links">
                {[['#home','Home'],['#services','Services'],['#why-us','Why Us'],['#testimonials','Reviews'],['#booking','Book Appointment']].map(([href,label]) => (
                  <a key={href} href={href}>{label}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="footer-heading">Services</div>
              <div className="footer-links">
                {['Teeth Cleaning','Root Canal','Braces','Implants','Whitening','General Care'].map(s => (
                  <a key={s} href="#services">{s}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="footer-heading">Contact Us</div>
              {[
                [<MapPin size={14}/>, '123 Smile Ave, Ahmedabad, Gujarat'],
                [<Phone size={14}/>, '+91 98765 43210'],
                [<MessageCircle size={14}/>, 'info@smilecare.in'],
                [<Clock size={14}/>, 'Mon–Sat: 9AM – 8PM'],
              ].map(([icon, text], i) => (
                <div key={i} className="footer-contact-item">
                  <span style={{ color:'var(--primary)', marginTop:'.1rem', flexShrink:0 }}>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} SmileCare Dental Clinic. All Rights Reserved. | Demo Site — Not a Real Clinic</p>
          </div>
        </div>
      </footer>

      {/* ───────── FLOATING WHATSAPP ───────── */}
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20dental%20appointment%20at%20SmileCare."
        target="_blank" rel="noreferrer"
        className="whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} color="white" fill="white"/>
      </a>

    </div>
  );
}
