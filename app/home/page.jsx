"use client"
import Image from 'next/image';
import '../home/Home.css'
import pic1 from '../assets/images/pata.png'
import pic2 from '../assets/images/product-large-1.png'
import pic3 from '../assets/images/Steak-Transparent.png'
import author from '../assets/images/Different-Beautiful-American-Girls.jpg.webp'
import chicken from '../assets/images/elements-1.png'
import pic4 from '../assets/images/t2_5.png'
import pic5 from '../assets/images/t2_1.png'
import pic6 from '../assets/images/t2_2.png'

export default function Home() {


  const blogs = [
    {
      id: 1,
      image: pic1,
      title: 'Hot dog dressed in mustard, accompanied by a side of ketchup',
      date: 'November 10, 2024',
      views: 560,
      comments: 2,
      author: 'Emily',
      readTime: '5 Min Read'
    },
    {
      id: 2,
      image: pic2,
      title: 'Indulge in a sesame bun burger, crispy French fries, and a tasty milkshake',
      date: 'November 10, 2024',
      views: 560,
      comments: 2,
      author: 'Emily',
      readTime: '5 Min Read'
    },
    {
      id: 3,
      image: pic3,
      title: 'Two meat and cheese sandwiches with tomatoes between toasted bread',
      date: 'November 10, 2024',
      views: 560,
      comments: 2,
      author: 'Emily',
      readTime: '5 Min Read'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Waiter',
      image: pic4
    },
    {
      name: 'Ethan Rodriguez',
      role: 'Head Chef',
      image: pic5
    },
    {
      name: 'Megan Robinson',
      role: 'Waiter',
      image: pic6
    }
  ];


  return (
    <>

      {/* Hero Section */}
      <main className='heroSection'>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className='heroContent'>
                <span className='subtitle'>SOMETHING SPICY</span>
                <h1 className='mainTitle'>
                  Foody Crunch Grillhouse
                </h1>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur. Congue purus cursus ac aliquet eget enim est. Nunc.
                </p>
                <div className="d-flex align-items-center gap-4">
                  <button className={`btn orderButton`}>
                    Order Now
                  </button>
                  <span className='price'>$240.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className='heroImage'>
                {/* This would be replaced with your actual burger image */}
                <div className='burgerImage'></div>
              </div>
            </div>
          </div>
        </div>
      </main>




      <section className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-warning text-dark px-4 py-2 mb-3 fs-6">RECENT BLOGS</span>
        {/* <h1 className="display-4 fw-bold mb-4">
          BEST RECIPES<br />
          FOR YOU
        </h1> */}
      </div>

      <div className="row g-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-4">
            <div className='blogCard'>
              <div className='imageWrapper'>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className='blogImage'
                />
                <span className='category'>FOOD</span>
              </div>
              
              <div className='cardContent'>
                <h3 className='blogTitle'>{blog.title}</h3>
                
                <div className='blogMeta'>
                  <div className="d-flex align-items-center">
                    <span className='date'>{blog.date}</span>
                    <span className='metaDot'>•</span>
                    <span className='views'>{blog.views} Views</span>
                    <span className='metaDot'>•</span>
                    <span className='comments'>{blog.comments} Comment</span>
                  </div>
                </div>
                
                <div className={`d-flex justify-content-between align-items-center $blogFooter}`}>
                  <div className="d-flex align-items-center">
                    <Image
                      src={author}
                      alt={blog.author}
                      width={40}
                      height={40}
                      className='authorAvatar'
                    />
                    <div className='authorInfo'>
                      <span className='authorName'>{blog.author}</span>
                      <span className='readTime'>{blog.readTime}</span>
                    </div>
                  </div>
                  <button className='readMoreBtn'>
                    Read More
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


<section className='w-100 bg-dark'>
<div className="container py-5 ">
      <div className="text-center mb-5">
        <span className="badge bg-warning text-dark px-4 py-2 mb-3 fs-6">INGREDIENTS</span>
        <h1 className="display-4 fw-bold mb-4 text-white">
          BEST QUALITY<br />
          INGREDIENTS
        </h1>
      </div>

      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-md-3 text-md-end">
          <div className="mb-5">
            <h3 className="text-warning fw-bold">ARTISAN<br />BUNS</h3>
            <ul className="list-unstyled text-secondary">
              <li>• Available Gluten-Free</li>
              <li>• Made Cecally</li>
            </ul>
          </div>
          <div>
            <h3 className="text-success fw-bold">GROUND<br />BEEF</h3>
            <ul className="list-unstyled text-secondary">
              <li>• Signature Blended Beef</li>
              <li>• Never Frozen</li>
            </ul>
          </div>
        </div>

        {/* Center Image */}
        <div className="col-md-6 text-center">
          <Image 
          src={chicken}
            alt="Exploded view of burger ingredients"
            className="img-fluid"
          />
        </div>

        {/* Right Column */}
        <div className="col-md-3 text-md-start">
          <div className="mb-5">
            <h3 className="text-success fw-bold">FRESH<br />PRODUCE</h3>
            <ul className="list-unstyled text-secondary">
              <li>• Made Fresh Everyday</li>
              <li>• Hand-Tossed</li>
            </ul>
          </div>
          <div>
            <h3 className="text-danger fw-bold">GROUND<br />TURKEY</h3>
            <ul className="list-unstyled text-secondary">
              <li>• Ground Fresh</li>
              <li>• Never Frozen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

</section>

<div className="container py-5">
<div className="text-center mb-5">
        <span className="badge bg-warning text-dark px-4 py-2 mb-3 fs-6">OUR TEAM</span>
        <h1 className="display-4 fw-bold mb-4">
          BEST RECIPES<br />
          FOR YOU
        </h1>
      </div>

      <div className="row justify-content-center g-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4">
            <div className="team-card position-relative">
              <div className="team-card-con rounded-4  shadow-sm p-3 ">
                <div className="text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="img-fluid rounded-circle mb-3 pics"
                  />
                  <h3 className="fs-4 fw-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-black mb-0">{member.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>



    </>
  );
}