"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, X, Filter } from "lucide-react";
import BlogCard from "./blog-card";

interface BlogPost {
  title: string;
  description: string;
  image_cover?: string;
  url: string;
  date: string;
  body: { raw: string };
  tags?: string[];
}

interface BlogSearchProps {
  posts: BlogPost[];
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract all unique tags from posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => tags.add(tag));
      }
    });
    return ["All", ...Array.from(tags).sort()];
  }, [posts]);

  // Filter posts based on search query and selected tag
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by tag
    if (selectedTag !== "All") {
      filtered = filtered.filter(post => post.tags?.includes(selectedTag));
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.body.raw.toLowerCase().includes(query) ||
        post.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [posts, searchQuery, selectedTag]);

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedTag("All");
  };

  return (
    <div className="w-full">
      {/* Search and Filter Section */}
      <motion.div
        className="mb-8 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search articles by title, content, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-12 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-yaleblue focus:border-transparent transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center">
          <motion.button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Filter className="w-4 h-4" />
            Filter by Tags
            <motion.div
              animate={{ rotate: isFilterOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.button>
        </div>

        {/* Tag Filters */}
        <motion.div
          className="overflow-hidden"
          initial={false}
          animate={{ height: isFilterOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-wrap gap-2 justify-center pt-4">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-yaleblue dark:bg-[#063672] text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {tag}
                <span className="ml-2 text-xs opacity-70">
                  ({tag === "All" ? posts.length : posts.filter(p => p.tags?.includes(tag)).length})
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Search Results Info */}
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-gray-600 dark:text-gray-400">
          {filteredPosts.length === posts.length ? (
            `Showing all ${posts.length} articles`
          ) : (
            <>
              Found {filteredPosts.length} of {posts.length} articles
              {(searchQuery || selectedTag !== "All") && (
                <button
                  onClick={clearSearch}
                  className="ml-2 text-yaleblue hover:text-darkgoldenrod underline"
                >
                  Clear filters
                </button>
              )}
            </>
          )}
        </p>
      </motion.div>

      {/* Blog Posts Grid */}
      <motion.div
        className="grid gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        key={`${searchQuery}-${selectedTag}`}
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <motion.div
              key={post.url}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <BlogCard
                title={post.title}
                description={post.description}
                image={post.image_cover}
                slug={post.url}
                date={post.date}
                readingTime={Math.ceil(post.body.raw.split(/\s+/).length / 200)}
                tags={post.tags}
              />
            </motion.div>
          ))
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No articles found
            </h3>
            <p className="text-gray-500 dark:text-gray-500 mb-4">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={clearSearch}
              className="px-6 py-2 bg-yaleblue dark:bg-[#063672] text-white rounded-lg hover:opacity-90 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
