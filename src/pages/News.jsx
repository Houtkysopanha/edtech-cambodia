import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sample news data - you can replace this with actual data from an API
const newsData = [
  {
    id: 1,
    title: "Coding Bootcamp",
    date: "July 15, 2024",
    image: "/images/img1-news.png",
    category: "Education"
  },
  {
    id: 2,
    title: "Open House",
    date: "August 22, 2024",
    image: "/images/img2-news.png",  
    category: "Event"
  },
  {
    id: 3,
    title: "Math Competition",
    date: "September 12, 2024",
    image: "/images/img3-news.png",
    category: "Competition"
  },
  {
    id: 4,
    title: "Workshop on AI",
    date: "March 15, 2024",
    image: "/images/img4-news.png",
    category: "Workshop"
  },
  {
    id: 5,
    title: "Annual Science Fair",
    date: "April 10, 2024",
    image: "/images/img1-news.png",
    category: "Event"
  },
  {
    id: 6,
    title: "Literature Festival",
    date: "October 5, 2024",
    image: "/images/img2-news.png",
    category: "Festival"
  },
  {
    id: 7,
    title: "Workshop on AI",
    date: "March 15, 2024",
    image: "/images/img3-news.png",
    category: "Workshop"
  },
  {
    id: 8,
    title: "Annual Science Fair",
    date: "April 10, 2024",
    image: "/images/img4-news.png",
    category: "Event"
  },
  {
    id: 9,
    title: "Robot Lecture Series",
    date: "June 20, 2024",
    image: "/images/img1-news.png",
    category: "Lecture"
  }
];

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  
  const itemsPerPage = 9; // Always show 9 items per page
  
  // Filter and sort news based on search term and sort option
  const filteredNews = newsData
    .filter(news => 
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

  // Pagination calculations
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedNews = filteredNews.slice(startIndex, endIndex);
  
  // Reset to page 1 when search or sort changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Smooth scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Generate page numbers to show (with ellipsis for many pages)
  const getVisiblePages = () => {
    const delta = 2; // Number of pages to show around current page
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative text-white py-20" style={{
        backgroundImage: `url('/images/themes.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="block text-3xl md:text-4xl mb-2">ព័ត៌មាន</span>
            <span className="text-yellow-400">News</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Here is our news that related to our event.
          </p>
        </div>
      </div>

      {/* Main Content - Overlapping the hero section */}
      <div className="container mx-auto px-4 -mt-16 relative z-10" style={{ 
        backgroundColor: 'white', 
        paddingTop: '4rem', 
        paddingBottom: '4rem', 
        marginTop: '-2rem', 
        borderRadius: '20px', 
        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '4rem',
       
      }}>
        {/* Search and Filter Section */}
        <div className="rounded-[20px] p-6 mb-8 relative" style={{ 
          backgroundColor: 'transparent',
          borderRadius: '20px'
        }}>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
              <div className="relative rounded-[15px] p-[1px]" style={{
                background: 'linear-gradient(45deg, rgba(255,0,0,0.6), rgba(255,127,0,0.6), rgba(255,255,0,0.6), rgba(0,255,0,0.6), rgba(0,0,255,0.6), rgba(75,0,130,0.6), rgba(148,0,211,0.6))'
              }}>
                <input
                  type="text"
                  placeholder="Search items, collections, and accounts"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-[14px] focus:ring-2 focus:ring-blue-500 outline-none relative z-10 bg-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Button */}
              <div className="flex items-center gap-2">
                <label className="text-gray-600 font-medium">Sort by</label>
                <div className="relative rounded-[15px] p-[1px]" style={{
                  background: 'linear-gradient(45deg, rgba(255,0,0,0.6), rgba(255,127,0,0.6), rgba(255,255,0,0.6), rgba(0,255,0,0.6), rgba(0,0,255,0.6), rgba(75,0,130,0.6), rgba(148,0,211,0.6))'
                }}>
                  <button
                    onClick={() => {
                      // Cycle through sort options
                      const options = ['date', 'title', 'category'];
                      const currentIndex = options.indexOf(sortBy);
                      const nextIndex = (currentIndex + 1) % options.length;
                      setSortBy(options[nextIndex]);
                    }}
                    className="px-4 py-2 rounded-[14px] focus:ring-2 focus:ring-blue-500 outline-none bg-white hover:bg-gray-50 transition-colors"
                  >
                    {sortBy === 'date' && 'Date'}
                    {sortBy === 'title' && 'Title'}
                    {sortBy === 'category' && 'Category'}
                  </button>
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="rounded-[15px] p-[1px]" style={{
                background: 'linear-gradient(45deg, rgba(255,0,0,0.6), rgba(255,127,0,0.6), rgba(255,255,0,0.6), rgba(0,255,0,0.6), rgba(0,0,255,0.6), rgba(75,0,130,0.6), rgba(148,0,211,0.6))'
              }}>
                <div className="flex items-center rounded-[14px] overflow-hidden bg-white">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  >
                    <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                    </div>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  >
                    <div className="w-5 h-5 flex flex-col gap-1">
                      <div className="h-1 bg-current rounded"></div>
                      <div className="h-1 bg-current rounded"></div>
                      <div className="h-1 bg-current rounded"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid/List */}
        <div className={`gap-6 mb-8 ${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'flex flex-col space-y-6'
        }`}>
          {paginatedNews.map((news) => (
            <div key={news.id} className={`rounded-[20px] p-[1px] hover:shadow-xl transition-shadow duration-300 ${
              viewMode === 'list' ? 'w-full' : ''
            }`} style={{
              background: 'linear-gradient(135deg, rgba(255,0,0,0.6), rgba(255,127,0,0.6), rgba(255,255,0,0.6), rgba(0,255,0,0.6), rgba(0,0,255,0.6), rgba(75,0,130,0.6), rgba(148,0,211,0.6))',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div className={`bg-white rounded-[19px] overflow-hidden h-full ${
                viewMode === 'list' ? 'flex flex-row' : ''
              }`}>
                <div className={`relative ${
                  viewMode === 'list' ? 'w-64 flex-shrink-0' : ''
                }`}>
                  <img
                    src={news.image}
                    alt={news.title}
                    className={`object-cover ${
                      viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                    }`}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"%3E%3Crect width="400" height="200" fill="%23f3f4f6"/%3E%3Ctext x="200" y="100" font-family="Arial, sans-serif" font-size="16" fill="%236b7280" text-anchor="middle" dy=".3em"%3ENews Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className={`p-4 ${
                  viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''
                }`}>
                  <div>
                    <h3 className={`font-semibold text-gray-800 mb-2 ${
                      viewMode === 'list' ? 'text-xl line-clamp-3' : 'text-lg line-clamp-2'
                    }`}>
                      {news.title}
                    </h3>
                    {viewMode === 'list' && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    )}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendarAlt className="mr-2" />
                    <span>{news.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center py-8">
            {/* Pagination Container with Rounded Border */}
            <div className="rounded-full p-[2px]" style={{
              background: 'linear-gradient(45deg, rgba(255,0,0,0.6), rgba(255,127,0,0.6), rgba(255,255,0,0.6), rgba(0,255,0,0.6), rgba(0,0,255,0.6), rgba(75,0,130,0.6), rgba(148,0,211,0.6))'
            }}>
              <div className="bg-white rounded-full px-6 py-3 flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous page"
                >
                  <FaChevronLeft className="text-sm" />
                </button>
                
                {/* Page Numbers */}
                {getVisiblePages().map((page, index) => {
                  if (page === '...') {
                    return (
                      <span key={index} className="px-2 text-gray-400 select-none text-sm">
                        ...
                      </span>
                    );
                  }
                  
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                        currentPage === page
                          ? 'bg-blue-900 text-white shadow-sm'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      aria-label={`Go to page ${page}`}
                      aria-current={currentPage === page ? 'page' : undefined}
                    >
                      {page}
                    </button>
                  );
                })}
                
                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Next page"
                >
                  <FaChevronRight className="text-sm" />
                </button>
                
                {/* Go to Page Section */}
                <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
                  <span className="text-sm text-gray-600 whitespace-nowrap">Go to</span>
                  <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={currentPage}
                    onChange={(e) => {
                      const page = parseInt(e.target.value);
                      if (!isNaN(page) && page >= 1 && page <= totalPages) {
                        handlePageChange(page);
                      }
                    }}
                    className="w-12 h-6 text-center text-sm bg-blue-900 text-white rounded border-0 outline-none"
                    aria-label="Go to page number"
                  />
                  <span className="text-sm text-gray-600 whitespace-nowrap">Page</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* No Results Message */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-2">No news found</div>
            <div className="text-gray-400 text-sm">
              Try adjusting your search terms or sort criteria
            </div>
          </div>
        )}
      </div>
    </div>
  );
}