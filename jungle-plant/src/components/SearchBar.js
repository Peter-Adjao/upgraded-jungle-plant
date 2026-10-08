"use client"

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import "@/styles/SearchBar.css"

function SearchBar() {
    const [query, setQuery] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    const inputRef = useRef(null);
    const router = useRouter();

    /* 
    *Autofocus when the mobile overlay opens
    */
   useEffect(() => {
    if (isExpanded) inputRef.current?.focus();
   }, [isExpanded]);


   const openSearch = () => {
    setIsExpanded(true);
   };

   const closeSearch = () => {
    setIsExpanded(false);
    inputRef.current?.blur();
   };

   const clearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    closeSearch();
   };

 /*
    *Escape closes the the overlay - 
    */
   const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            closeSearch();
        }
   };

   const handleOnChange = (e) => {
    setQuery(e.target.value)
   }

   return (
    <div className={`search-bar ${isExpanded ? "search-bar--expanded" : ""}`}>
        {/*Mobile trigger*/}
        <Button
            variant="ghost"
            size="md"
            type="button"
            aria-label="Open search"
            aria-expanded={isExpanded}
            onClick={openSearch}
            className="search-bar__trigger"
        >
            <Search
             size={21} 
             strokeWidth={2}
             aria-hidden="true" 
             />
        </Button>

        {/* Search form */}
        <form role="search" className="search-bar__form" onSubmit={handleSubmit}>
            <Button
            variant="ghost"
            size="icon"
            rounded="full"
            type="button"
            aria-label="Close Search"
            onClick={closeSearch}
            className="search-bar__back"
            >
                <ArrowLeft size={20} aria-hidden="true" />
            </Button>
            <Search
                className="search-bar__icon"
                size={19}
                strokeWidth={2}
                aria-hidden="true" 
                />
                
                <input 
                    ref={inputRef}
                    type="search"
                    name="q"
                    inputMode="search"
                    placeholder="Search plants..."
                    aria-label="Search products"
                    value={query}
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}
                    className="search-bar__input"
                />

                {query && (
                    <Button
                    variant="ghost"
                    size="icon"
                    rounded="full"
                    type="button"
                    aria-label="Clear search"
                    onClick={clearSearch}
                    className="search-bar__clear"
                    >
                        <X size={17} aria-hidden="true" />
                    </Button>
                )}
        </form>
    </div>
   );

}

export default SearchBar;