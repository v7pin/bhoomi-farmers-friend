import React from 'react';

const articles = [
  {
    title: 'Improving Crop Yields: A Guide for Farmers',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    link: 'https://example.com/article1',
  },
  {
    title: 'Sustainable Farming Practices for the Future',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    link: 'https://example.com/article2',
  },
  {
    title: 'Latest Innovations in Agricultural Technology',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    link: 'https://example.com/article3',
  },
  {
    title: 'Farmers',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    link: 'https://example.com/article4',

  },
{
  title: 'Farmers with technology',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
  link: 'https://example.com/article5',

}
  // Add more articles as needed
];

const Article = () => {
  return (
    <div className="article-container">
      <div className="bg-green-300 flex justify-between items-center mb-6 h-16 p-5 fixed w-full">
        {/* Left Side (Logo) */}
        <div className="flex items-center">
          <img src="logobhoomi.png" alt="Bhoomi Logo" className="h-14 w-14" />
          <h1 className="text-2xl font-bold ml-2">Bhoomi</h1>
        </div>

        {/* Right Side (Signup and Go Back to Dashboard) */}
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:scale-110 duration-300"
          >
            Login
          </a>
          <a
            href="/dashboard"
            className="bg-blue-500 text-white py-2 px-4 rounded-md font-bold hover:scale-110 duration-300"
          >
          
            Go Back to Dashboard
          </a>
          <button
            onClick={() => (window.location.href = "/register")}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:scale-110 duration-300"
          >
            
            Sign Up
          </button>
        </div>
      </div>
      <br /><br /><br />
      <h1 className="text-4xl font-bold mt-6">Agriculture Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">{article.title}</h2>
            <p className="text-gray-600">{article.content}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Article;
