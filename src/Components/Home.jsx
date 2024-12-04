import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero min-h-[300px] bg-cover bg-center text-white flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
        }}
      >
        <div className="container mx-auto text-center bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Welcome to Coffee Haven</h1>
          <p className="text-lg mb-6">
            Your perfect coffee experience starts here. Enjoy handcrafted brews made with love.
          </p>
          <button className="btn bg-orange-800 hover:bg-orange-900 text-white px-6 py-3">
            Discover More
          </button>
        </div>
      </section>

      {/* Coffee Menu Section */}
      <section className="py-5 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Our Coffee Specials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: 'Espresso',
                img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
              },
              {
                name: 'Cappuccino',
                img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
              },
              {
                name: 'Latte',
                img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
              },
              {
                name: 'Mocha',
                img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
              },
              {
                name: 'Americano',
                img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
              },
              {
                name: 'Flat White',
                img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
              },
            ].map((coffee, index) => (
              <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={coffee.img}
                  alt={coffee.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-semibold mb-3">{coffee.name}</h3>
                  <p>
                    A unique blend of flavors, brewed to perfection for coffee enthusiasts.
                  </p>
                  <button className="btn mt-4 bg-orange-800 hover:bg-orange-900 text-white">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        className="bg-cover bg-center py-16 text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
        }}
      >
        <div className="container mx-auto text-center bg-black bg-opacity-50 p-10 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Become a Coffee Club Member</h2>
          <p className="mb-6">
            Join our exclusive coffee club to enjoy premium blends, special discounts, and more!
          </p>
          <button className="btn bg-white text-orange-800 px-6 py-3 hover:bg-gray-200">
            Sign Up Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
