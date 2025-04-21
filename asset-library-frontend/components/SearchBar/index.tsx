"use client";

import { useStore } from "@/store/useStore";

const SearchBar = () => {
  const searchQuery = useStore((s) => s.searchQuery);
  const setSearchQuery = useStore((s) => s.setSearchQuery);
  const clearSearch = useStore((s) => s.clearSearch);
  const addRecentSearch = useStore((s) => s.addRecentSearch);

  // TODO: Recent searches functionality:
  // - Storage logic implemented in store
  // - Cannot implement UI - no wireframe provided
  // - Cannot implement persistence - no user session
  // - Need design for:
  //   - How to display recent searches
  //   - Clear/reset UI interaction
  //   - Search history limit

  // TODO: "Not seeing" state needs clarification:
  // - Current implementation merges search with category filters
  // - "Not seeing" in diagram might suggest separate flows
  // - Need to clarify if:
  //   - Search should work independently of filters
  //   - "Not seeing" applies to current filter context
  //   - How to handle no results in filtered vs unfiltered search

  return (
    <div className="w-full relative">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
          🔍
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (e.target.value.trim()) {
              addRecentSearch(e.target.value);
            }
          }}
          placeholder="Type to search..."
          className="w-full pl-9 pr-12 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
