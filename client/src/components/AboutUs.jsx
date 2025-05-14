// import { Link } from 'wouter';
// import Footer from './Footer';

// const AboutUs = () => {
//   return (
//     <div style={styles.pageWrapper}>
//       {/* Header */}
//       <header style={styles.header}>
//         <div style={styles.headerContainer}>
//           <h1 style={styles.logo}>About Us</h1>
//           <nav>
//             <ul style={styles.navList}>
//               {['Home', 'About Us', 'Newsletter', 'Login', 'Sign Up'].map((text, index) => {
//                 const paths = ['/', '/about', '/newsletter', '/login', '/signup'];
//                 return (
//                   <li key={text}>
//                     <Link href={paths[index]}>
//                       <a style={styles.navLink}>{text}</a>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section style={styles.heroSection}>
//         <div style={styles.heroLeft}>
//           <h1 style={styles.heroTitle}>ELEGANCE</h1>
//         </div>
//         <div style={styles.heroRight}>
//           <div style={styles.bioContent}>
//             <h2 style={styles.sectionHeading}>QUALITY WOOD</h2>
//             <h3 style={styles.subHeading}>HANDCRAFTED PIECES</h3>
//             <p style={styles.paragraph}>
//               Furni has been working with various log and wood around the world since 2010.
//               Our philosophy is rooted in vintage style and hasn't slowed down since. We
//               specialize in woodworking and crafting that both serve and excite. Using
//               traditional joinery techniques, benchmarking in Finland, and carving in Rome,
//               we bring your dream furniture pieces to life.
//             </p>
//             <div style={styles.navButtons}>
//               <button style={styles.navButton}>◀</button>
//               <button style={styles.navButton}>▶</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section style={styles.servicesSection}>
//         <div style={styles.container}>
//           <h2 style={styles.sectionHeading}>OUR SERVICES</h2>
//           <div style={styles.servicesGrid}>
//             {services.map(service => (
//               <div key={service.title} style={styles.serviceBox}>
//                 <h3 style={styles.serviceTitle}>{service.title}</h3>
//                 <ul style={styles.serviceList}>
//                   {service.items.map(item => (
//                     <li key={item} style={styles.serviceItem}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Clients Section */}
//       <section style={styles.clientsSection}>
//         <div style={styles.container}>
//           <h2 style={styles.sectionHeading}>SOME OF OUR CLIENTS</h2>
//           <div style={styles.clientsGrid}>
//             {['Luxury Hotels', 'Modern Homes', 'Design Studios', 'Executive Offices'].map(client => (
//               <div key={client} style={styles.clientBox}>{client}</div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer Banner */}
//       <section style={styles.footerBanner}>
//         <div style={styles.footerLogo}>FURNI.</div>
//         <div style={styles.socialIcons}>
//           {['F', 'T', 'I'].map(icon => (
//             <div key={icon} style={styles.iconBox}>{icon}</div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// const services = [
//   {
//     title: 'PREMIUM WOOD',
//     items: ['Teak', 'Oak Collection', 'Walnut Creations', 'Maple Standards', 'Cherry Wood', 'Finishing & Restoration']
//   },
//   {
//     title: 'CUSTOM DESIGN',
//     items: ['Interior Design Consultation', 'Application Development', 'Furniture Management Systems', 'Measurement Services', '3D Renders']
//   },
//   {
//     title: 'CRAFTING',
//     items: ['Handcrafted Design', 'Brochures', 'Guidebooks', 'Lookbooks', 'Catalogs', 'Polish and Polishing']
//   },
//   {
//     title: 'STRATEGY',
//     items: ['Product Analysis', 'Target Markets', 'Value Proposition', 'Search Engine Optimization', 'Customer Communication', 'Analytics']
//   }
// ];

// const styles = {
//   pageWrapper: {
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     fontFamily: 'Arial, sans-serif'
//   },
//   header: {
//     backgroundColor: '#fff',
//     boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
//     padding: '1rem 0'
//   },
//   headerContainer: {
//     maxWidth: '80rem',
//     margin: '0 auto',
//     padding: '0 1rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   logo: {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     fontFamily: 'serif'
//   },
//   navList: {
//     display: 'flex',
//     gap: '1.5rem',
//     listStyle: 'none',
//     margin: 0,
//     padding: 0
//   },
//   navLink: {
//     color: '#4b5563',
//     textDecoration: 'none',
//     fontWeight: 500
//   },
//   heroSection: {
//     display: 'flex',
//     flexDirection: 'row',
//     backgroundColor: '#f5f5f5',
//     flexWrap: 'wrap'
//   },
//   heroLeft: {
//     flex: 1,
//     backgroundColor: '#2F5D62',
//     backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     minHeight: '500px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   heroTitle: {
//     color: 'white',
//     fontSize: '4rem',
//     fontWeight: 'bold'
//   },
//   heroRight: {
//     flex: 1,
//     padding: '3rem',
//     display: 'flex',
//     alignItems: 'center'
//   },
//   bioContent: {
//     maxWidth: '500px'
//   },
//   sectionHeading: {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     marginBottom: '0.5rem',
//     textTransform: 'uppercase',
//     textAlign: 'center',
//     letterSpacing: '1px'
//   },
//   subHeading: {
//     fontSize: '1rem',
//     color: '#666',
//     marginBottom: '1.5rem',
//     textTransform: 'uppercase',
//     textAlign: 'center'
//   },
//   paragraph: {
//     lineHeight: '1.7',
//     marginBottom: '1.5rem',
//     textAlign: 'justify'
//   },
//   navButtons: {
//     display: 'flex',
//     gap: '1rem'
//   },
//   navButton: {
//     width: '50px',
//     height: '50px',
//     border: '1px solid #ccc',
//     background: 'white',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '1.5rem',
//     cursor: 'pointer'
//   },
//   servicesSection: {
//     backgroundColor: '#D4AF37',
//     padding: '4rem 2rem',
//     color: '#111'
//   },
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto'
//   },
//   servicesGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//     gap: '2rem'
//   },
//   serviceBox: {
//     textAlign: 'center'
//   },
//   serviceTitle: {
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     marginBottom: '1rem',
//     textTransform: 'uppercase',
//     letterSpacing: '1px'
//   },
//   serviceList: {
//     listStyle: 'none',
//     padding: 0
//   },
//   serviceItem: {
//     marginBottom: '0.5rem'
//   },
//   clientsSection: {
//     padding: '4rem 2rem',
//     backgroundColor: '#fff'
//   },
//   clientsGrid: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     gap: '2rem'
//   },
//   clientBox: {
//     backgroundColor: '#f0f0f0',
//     padding: '1rem 2rem',
//     minWidth: '150px',
//     textAlign: 'center',
//     color: '#888',
//     fontWeight: 'bold',
//     borderRadius: '5px'
//   },
//   footerBanner: {
//     backgroundColor: '#1a2a3a',
//     padding: '2rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   footerLogo: {
//     color: '#D4AF37',
//     fontWeight: 'bold',
//     fontSize: '1.2rem'
//   },
//   socialIcons: {
//     display: 'flex',
//     gap: '1rem'
//   },
//   iconBox: {
//     width: '30px',
//     height: '30px',
//     border: '1px solid #D4AF37',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#D4AF37',
//     borderRadius: '4px'
//   }
// };

// export default AboutUs;

import { Link } from 'wouter';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <h1 style={styles.logo}>About Us</h1>
          <nav>
            <ul style={styles.navList}>
              {['Home', 'About Us', 'Newsletter', 'Login', 'Sign Up'].map((text, index) => {
                const paths = ['/', '/about', '/newsletter', '/login', '/signup'];
                return (
                  <li key={text} style={styles.navItem}>
                    <Link href={paths[index]}>
                      <a style={styles.navLink}>{text}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>ELEGANCE</h1>
        </div>
        <div style={styles.heroRight}>
          <div style={styles.bioContent}>
            <h2 style={styles.sectionHeading}>QUALITY WOOD</h2>
            <h3 style={styles.subHeading}>HANDCRAFTED PIECES</h3>
            <p style={styles.paragraph}>
              Furni has been working with various log and wood around the world since 2010.
              Our philosophy is rooted in vintage style and hasn't slowed down since. We
              specialize in woodworking and crafting that both serve and excite. Using
              traditional joinery techniques, benchmarking in Finland, and carving in Rome,
              we bring your dream furniture pieces to life.
            </p>
            <div style={styles.navButtons}>
              <button style={styles.navButton}>◀</button>
              <button style={styles.navButton}>▶</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionHeading}>OUR SERVICES</h2>
          <div style={styles.servicesGrid}>
            {services.map(service => (
              <div key={service.title} style={styles.serviceBox}>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <ul style={styles.serviceList}>
                  {service.items.map(item => (
                    <li key={item} style={styles.serviceItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section style={styles.clientsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionHeading}>SOME OF OUR CLIENTS</h2>
          <div style={styles.clientsGrid}>
            {['Luxury Hotels', 'Modern Homes', 'Design Studios', 'Executive Offices'].map(client => (
              <div key={client} style={styles.clientBox}>{client}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section style={styles.footerBanner}>
        <div style={styles.footerLogo}>FURNI.</div>
        <div style={styles.socialIcons}>
          {['F', 'T', 'I'].map(icon => (
            <div key={icon} style={styles.iconBox}>{icon}</div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const services = [
  {
    title: 'PREMIUM WOOD',
    items: ['Teak', 'Oak Collection', 'Walnut Creations', 'Maple Standards', 'Cherry Wood', 'Finishing & Restoration']
  },
  {
    title: 'CUSTOM DESIGN',
    items: ['Interior Design Consultation', 'Application Development', 'Furniture Management Systems', 'Measurement Services', '3D Renders']
  },
  {
    title: 'CRAFTING',
    items: ['Handcrafted Design', 'Brochures', 'Guidebooks', 'Lookbooks', 'Catalogs', 'Polish and Polishing']
  },
  {
    title: 'STRATEGY',
    items: ['Product Analysis', 'Target Markets', 'Value Proposition', 'Search Engine Optimization', 'Customer Communication', 'Analytics']
  }
];

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f8f9fa', // Light grey background
    color: '#333', // Dark grey text
  },
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
    padding: '1.2rem 0',
    position: 'sticky', // Make header stick to the top
    top: 0,
    zIndex: 100,
  },
  headerContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    fontFamily: 'Playfair Display, serif', // More elegant font
    color: '#2c3e50', // Dark blue-grey logo color
  },
  navList: {
    display: 'flex',
    gap: '1.8rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  navLink: {
    color: '#555',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#007bff', // Blue hover color
    },
  },
  heroSection: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#e9ecef', // Light grey hero background
    flexWrap: 'wrap',
    padding: '3rem 1.5rem',
  },
  heroLeft: {
    flex: 1,
    backgroundColor: '#343a40', // Dark grey background for left side
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    color: '#fff',
    fontSize: '3.5rem',
    fontWeight: 'bold',
    fontFamily: 'Playfair Display, serif',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  heroRight: {
    flex: 1,
    padding: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bioContent: {
    maxWidth: '550px',
  },
  sectionHeading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.8rem',
    textTransform: 'uppercase',
    textAlign: 'left',
    letterSpacing: '0.8px',
    color: '#2c3e50',
  },
  subHeading: {
    fontSize: '1.1rem',
    color: '#6c757d',
    marginBottom: '1.8rem',
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  paragraph: {
    lineHeight: '1.8',
    marginBottom: '1.8rem',
    textAlign: 'left',
    color: '#495057',
  },
  navButtons: {
    display: 'flex',
    gap: '1.2rem',
  },
  navButton: {
    width: '45px',
    height: '45px',
    border: '1px solid #ccc',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.3rem',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      color: '#fff',
    },
  },
  servicesSection: {
    backgroundColor: '#f0f8ff', // Light blue background
    padding: '4rem 1.5rem',
    color: '#333',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2.5rem',
    marginTop: '2rem',
  },
  serviceBox: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  serviceTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1.2rem',
    textTransform: 'uppercase',
    letterSpacing: '0.6px',
    color: '#007bff', // Blue service title
  },
  serviceList: {
    listStyle: 'none',
    padding: 0,
  },
  serviceItem: {
    marginBottom: '0.8rem',
    color: '#555',
  },
  clientsSection: {
    padding: '4rem 1.5rem',
    backgroundColor: '#fff',
  },
  clientsGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '2rem',
    marginTop: '2rem',
  },
  clientBox: {
    backgroundColor: '#e9ecef',
    padding: '1rem 2rem',
    minWidth: '180px',
    textAlign: 'center',
    color: '#495057',
    fontWeight: 'bold',
    borderRadius: '6px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  },
  footerBanner: {
    backgroundColor: '#2c3e50', // Dark blue-grey footer
    padding: '2.5rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLogo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.4rem',
    fontFamily: 'Playfair Display, serif',
  },
  socialIcons: {
    display: 'flex',
    gap: '1.2rem',
  },
  iconBox: {
    width: '35px',
    height: '35px',
    border: '1px solid #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    '&:hover': {
      backgroundColor: '#007bff',
      borderColor: '#007bff',
    },
  },
};

export default AboutUs;
