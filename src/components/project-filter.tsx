"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, X, Filter } from "lucide-react";
import ProjectCard from "./project-card";
import ContentLoader from "./content-loader";

interface Project {
  title: string;
  summary: string;
  tags?: string[];
  sourceCode?: string;
  preview?: string;
  tutorial?: string;
  image?: string;
}

interface ProjectFilterProps {
  projects: Project[];
}

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(project => {
      if (project.tags) {
        project.tags.forEach(tag => tags.add(tag));
      }
    });
    return ["All", ...Array.from(tags).sort()];
  }, [projects]);

  // Filter projects based on search query and selected tag
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by tag
    if (selectedTag !== "All") {
      filtered = filtered.filter(project => project.tags?.includes(selectedTag));
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [projects, searchQuery, selectedTag]);

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedTag("All");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
            placeholder="Search projects by title, description, or technology..."
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
            Filter by Technology
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
                    ? "bg-yaleblue text-white shadow-lg"
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
                  ({tag === "All" ? projects.length : projects.filter(p => p.tags?.includes(tag)).length})
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
          {filteredProjects.length === projects.length ? (
            `Showing all ${projects.length} projects`
          ) : (
            <>
              Found {filteredProjects.length} of {projects.length} projects
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

      {/* Projects Grid */}
      <ContentLoader type="project" itemCount={filteredProjects.length || 6}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={`${searchQuery}-${selectedTag}`} // Re-animate when filters change
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div key={project.title} variants={itemVariants} layout>
                <ProjectCard {...project} />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="text-center py-16 col-span-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 dark:text-gray-500 mb-4">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={clearSearch}
                className="px-6 py-2 bg-yaleblue text-white rounded-lg hover:bg-yaleblue/90 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </ContentLoader>
    </div>
  );
}
