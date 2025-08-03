import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import theme from "@/assets/images/themes.png"
// Sample news data - you can replace this with actual data from an API
const newsData = [
  {
    id: 1,
    title: "Coding Bootcamp",
    date: "July 15, 2024",
    image: "/images/img1-news.png",
    category: "Education",
    description: "Join our intensive coding bootcamp to learn the latest programming skills and technologies."
  },
  {
    id: 2,
    title: "Open House",
    date: "August 22, 2024",
    image: "/images/img2-news.png",
    category: "Event",
    description: "Join us for an open house event to explore our programs and meet our instructors."
  },
  {
    id: 3,
    title: "Math Competition",
    date: "September 12, 2024",
    image: "/images/img3-news.png",
    category: "Competition",
    description: "Participate in our annual math competition to showcase your skills and win prizes."
  },
  {
    id: 4,
    title: "Workshop on AI",
    date: "March 15, 2024",
    image: "/images/img4-news.png",
    category: "Workshop",
    description: "Learn about the latest advancements in AI and how they can be applied in education."
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
  },
  {
    id: 10,
    title: "Annual Science Fair",
    date: "April 10, 2024",
    image: "/images/img1-news.png",
    category: "Event"
  },
  {
    id: 11,
    title: "Literature Festival",
    date: "October 5, 2024",
    image: "/images/img2-news.png",
    category: "Festival"
  },
  {
    id: 12,
    title: "Workshop on AI",
    date: "March 15, 2024",
    image: "/images/img3-news.png",
    category: "Workshop"
  },
  {
    id: 13,
    title: "Annual Science Fair",
    date: "April 10, 2024",
    image: "/images/img4-news.png",
    category: "Event"
  },
  {
    id: 14,
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
  const [pageInput, setPageInput] = useState('1'); // Separate state for input field
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
    setPageInput('1'); // Also reset input field
  }, [searchTerm, sortBy]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setPageInput(page.toString()); // Update input field when page changes
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
      <section
       className="relative bg-cover bg-center py-20 md:py-32 text-white flex items-center justify-center overflow-hidden"
       style={{ backgroundImage: `url(${theme})` }} // ✅ Fix here
     >
        <div className="absolute inset-0 bg-blue-900/30 z-0" />
       {/* Remove the <img /> — it's not needed */}
       <div className="relative z-10 text-center  px-4 py-6 rounded">
         <h1 className="text-4xl khmer-text md:text-6xl font-bold mb-4">ព្រឹត្តិការណ៍</h1>
         <h2 className="text-2xl md:text-6xl font-semibold mb-4 text-[#FFD900]">News</h2>
         <p className="text-lg md:text-xl">
           Here is our News that related to our even.
         </p>
       </div>
     </section>
 <main className="container mx-auto px-6 md:px-12 py-8 md:py-12">
      {/* Main Content Card */}

        <div className="container bg-white mx-auto p-8 md:p-12 rounded-2xl shadow-lg -mt-16  z-20 relative" style={{ 
       
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
                background: 'linear-gradient(135deg,  #DEB128, #DC5D3B, #E12045, #953773, #3843B3)'
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
                  background: 'linear-gradient(135deg,  #DEB128, #DC5D3B, #E12045, #953773, #3843B3)'
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
                background: 'linear-gradient(135deg,  #DEB128, #DC5D3B, #E12045, #953773, #3843B3)'
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
              background: 'linear-gradient(135deg,  #DEB128, #DC5D3B, #E12045, #953773, #3843B3)',
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
                        {news.description}
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

        {/* Pagination - Enhanced to match photo design */}
        {totalPages > 1 && (
          <div className="flex justify-center py-8">
            {/* Pagination Container with elegant rounded border */}
            <div className="rounded-full p-[3px]" style={{
              background: 'linear-gradient(135deg,  #DEB128, #DC5D3B, #E12045, #953773, #3843B3)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
            }}>
              <div className="bg-white rounded-full px-10 py-5 flex items-center gap-4">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 hover:bg-blue-50 hover:scale-105"
                  aria-label="Previous page"
                >
                  <FaChevronLeft className="text-base" />
                </button>
                <div className="flex items-center gap-2">
                  {getVisiblePages().map((page, index) => {
                    if (page === '...') {
                      return (
                        <span key={index} className="px-4 text-gray-400 select-none text-base font-medium">
                          ...
                        </span>
                      );
                    }
                    
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-base font-bold transition-all duration-300 ${
                          currentPage === page
                            ? 'bg-blue-900 text-white shadow-lg scale-110 ring-2 ring-blue-200'
                            : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50 hover:scale-105'
                        }`}
                        aria-label={`Go to page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>
                
                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 hover:bg-blue-50 hover:scale-105"
                  aria-label="Next page"
                >
                  <FaChevronRight className="text-base" />
                </button>
                <div className="flex items-center gap-3 ml-8 pl-8 border-l-2 border-gray-200">
                  <span className="text-base text-gray-700 font-semibold whitespace-nowrap">Go to</span>
                  <div className="relative">
                    <input
                      type="text"
                      value={pageInput}
                      onChange={(e) => {
                        const value = e.target.value;
                        setPageInput(value);
                        
                        // Try to parse and validate the page number as user types
                        const page = parseInt(value);
                        if (!isNaN(page) && page >= 1 && page <= totalPages) {
                          setCurrentPage(page);
                        }
                      }}
                      onKeyDown={(e) => {
                        // Prevent non-numeric input except backspace, delete, arrow keys, Enter
                        if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'].includes(e.key)) {
                          e.preventDefault();
                        }
                        
                        // Handle Enter key to apply the page change
                        if (e.key === 'Enter') {
                          const page = parseInt(pageInput);
                          if (!isNaN(page) && page >= 1 && page <= totalPages) {
                            handlePageChange(page);
                          } else {
                            setPageInput(currentPage.toString());
                          }
                        }
                      }}
                      onBlur={() => {
                        // If input is empty or invalid on blur, reset to current page
                        const page = parseInt(pageInput);
                        if (pageInput === '' || isNaN(page) || page < 1 || page > totalPages) {
                          setPageInput(currentPage.toString());
                        } else {
                          handlePageChange(page);
                        }
                      }}
                      className="w-16 h-10 text-center text-base bg-blue-900 text-white rounded-lg border-0 outline-none font-bold shadow-md focus:ring-2 focus:ring-blue-300 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      aria-label="Go to page number" 
                      style={{ borderRadius: '0.5rem' }}
                      placeholder={currentPage.toString()}
                    />
                  </div>
                  <span className="text-base text-gray-700 font-semibold whitespace-nowrap">Page</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-2">No news found</div>
            <div className="text-gray-400 text-sm">
              Try adjusting your search terms or sort criteria
            </div>
          </div>
        )}
      </div>
    </main>



    </div>
  );
}