import './App.css'

const ProductSection = ({ title, products, id }) => (
  <section id={id} className="product-section">
    <h2>{title}</h2>
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  </section>
);

function App() {
  const cosmetics = [
    {
      name: "Luxury Lipstick",
      description: "Long-lasting, moisturizing lipstick in various shades. Perfect for everyday wear or special occasions."
    },
    {
      name: "Foundation Cream",
      description: "Lightweight foundation that provides natural coverage and evens out skin tone. Available in multiple skin tones."
    },
    {
      name: "Mascara",
      description: "Volumizing mascara that adds length and definition to lashes. Waterproof formula for all-day wear."
    },
    {
      name: "Eyeshadow Palette",
      description: "A collection of vibrant eyeshadows in matte and shimmer finishes. Ideal for creating stunning eye looks."
    },
    {
      name: "Blush Powder",
      description: "Silky blush powder that adds a natural flush to cheeks. Buildable coverage for a fresh, rosy glow."
    },
    {
      name: "Skincare Serum",
      description: "Hydrating serum with vitamins and antioxidants to nourish and rejuvenate the skin. Suitable for all skin types."
    },
    {
      name: "Hair Color",
      description: "High-quality hair dyes in various colors and shades for professional-looking results at home."
    },
    {
      name: "Face Wash",
      description: "Gentle cleansing face wash that removes impurities and leaves skin refreshed and balanced."
    },
    {
      name: "Hair Wash",
      description: "Nourishing shampoo that cleanses and conditions hair, promoting healthy and shiny locks."
    },
    {
      name: "Nail Paints",
      description: "Vibrant and long-lasting nail polish in a wide range of colors for beautiful manicures."
    },
    {
      name: "Nail Arts",
      description: "Decorative nail art supplies including stickers, tools, and accessories for creative designs."
    },
    {
      name: "Bracelets",
      description: "Elegant jewelry pieces including beaded and metal bracelets for everyday and special occasions."
    },
    {
      name: "Artificial Necklaces",
      description: "Fashionable costume necklaces with various designs, perfect for completing any outfit."
    },
    {
      name: "Perfumes",
      description: "Fragrant perfumes and eau de toilette in different scents for men and women."
    },
    {
      name: "Deodorants",
      description: "Effective deodorants and antiperspirants to keep you fresh and confident throughout the day."
    },
    {
      name: "Cosmetic Stationery",
      description: "Essential beauty tools including brushes, applicators, and organizers for your makeup routine."
    }
  ];

  const toysAndGifts = [
    {
      name: "Dolls and Accessories",
      description: "Beautiful dolls with clothing and accessories, perfect for imaginative play for children aged 3-12."
    },
    {
      name: "Building Blocks",
      description: "Colorful building blocks and construction sets that encourage creativity and problem-solving skills."
    },
    {
      name: "Puzzle Games",
      description: "Educational puzzles and brain teasers suitable for children of all ages within 0-15 years."
    },
    {
      name: "Stuffed Animals",
      description: "Soft and cuddly stuffed toys including bears, rabbits, and other animals for comfort and play."
    },
    {
      name: "Ride-On Toys",
      description: "Fun ride-on vehicles like scooters, tricycles, and cars for outdoor adventures."
    },
    {
      name: "Educational Toys",
      description: "Learning toys including shape sorters, alphabet sets, and science kits for young minds."
    },
    {
      name: "Art Supplies",
      description: "Creative art kits with paints, crayons, and craft materials for artistic expression."
    },
    {
      name: "Board Games",
      description: "Family-friendly board games and card games that promote social interaction and fun."
    },
    {
      name: "Musical Instruments",
      description: "Kid-sized musical instruments like keyboards, drums, and guitars for budding musicians."
    },
    {
      name: "Gift Sets",
      description: "Curated gift sets including books, stationery, and toys perfect for birthdays and celebrations."
    }
  ];

  const religiousItems = [
    {
      name: "God Idols",
      description: "Beautifully crafted idols of various gods and goddesses for home worship and decoration."
    },
    {
      name: "Photo Arts",
      description: "Artistic photographs and prints of religious themes and spiritual imagery."
    },
    {
      name: "Decorative Frames",
      description: "Elegant frames for photos, paintings, and religious artwork to enhance your sacred space."
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Golden Gift Palace</h1>
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('cosmetics')}>Cosmetics</button></li>
            <li><button onClick={() => scrollToSection('toys')}>Toys & Gifts</button></li>
            <li><button onClick={() => scrollToSection('religious')}>Religious Items</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>

      <header id="home">
        <h1>Golden Gift Palace</h1>
        <p>Your one-stop shop for premium products and gifts</p>
        <p>Discover our wide range of cosmetics, toys, gifts, and religious items for all your needs.</p>
        <div className="since1999">Since 1999</div>
      </header>

      <ProductSection title="Cosmetic Products" products={cosmetics} id="cosmetics" />
      <ProductSection title="Toys and Gifts for Kids (Ages 0-15)" products={toysAndGifts} id="toys" />
      <ProductSection title="Religious Items" products={religiousItems} id="religious" />

      <section id="about" className="about-section">
        <h2>About Golden Gift Palace</h2>
        <div className="about-content">
          <p>Golden Gift Palace has been serving the community for years, providing high-quality products that cater to all age groups and interests. Our store specializes in:</p>
          <ul>
            <li>Premium cosmetic products for beauty and self-care</li>
            <li>Educational and fun toys for children aged 0-15</li>
            <li>Beautiful religious items for spiritual enhancement</li>
          </ul>
          <p>We pride ourselves on offering genuine products at competitive prices, ensuring customer satisfaction and building lasting relationships with our valued customers.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>For inquiries and purchases, please contact the owner:</p>
        <div className="contact-photo-bg">
          <img src="/bgp.jpeg" alt="Golden Gift Palace Owner" className="contact-photo" />
        </div>
        <div className="contact-info">
          <p><strong>Phone:</strong> 9760762440</p>
          <p><strong>Address:</strong> Link Road Pithoragarh</p>
          <p><strong>Email:</strong> info@goldengiftpalace.com</p>
          <ul>
            <li><a href="https://www.facebook.com/share/1C4rUs8nAs/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/bhagwat5614?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
        
          <p>Bringing joy and beauty to your life, one product at a time.</p>
        </div>
      </footer>
    </>
  )
}

export default App
