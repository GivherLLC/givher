"use client";

import React, { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { GalleryImageGroup, GalleryCopy } from "@/types/types";

export default function GalleryPage({
  galleryData,
  galleryCopy,
}: {
  galleryData: GalleryImageGroup[];
  galleryCopy: GalleryCopy;
}) {
  const breakpointColumns = {
    default: 3,
    1280: 3,
    1024: 2,
    640: 1,
  };

  const [visibleImages, setVisibleImages] = useState<GalleryImageGroup[]>([]);
  const [page, setPage] = useState(1);
  const [selectedEventType, setSelectedEventType] = useState<string | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlickityReady, setIsFlickityReady] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const flickityRef = useRef<any | null>(null);

  // Define filtered images based on visible images
  const allImages = visibleImages.flatMap((group) => group.images);

  // Define filter options in the desired order
  const filterOptions = [
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ];

  useEffect(()=>{
      //prevent scrolling behind open bio
      if(isModalOpen){
          document.body.style.overflow = 'hidden';
      }
      return ()=>{
          document.body.style.overflow = 'unset';
      }
    },[isModalOpen])

  const loadMoreImages = () => {
    const itemsPerPage = 5;
  
    // Filter gallery data based on selectedEventType
    const filteredData = selectedEventType
      ? galleryData.filter((group) => group.eventType === selectedEventType)
      : galleryData;
  
    // Calculate the items to display for the current page
    const nextPageImages = filteredData.slice(0, page * itemsPerPage);
  
    // Update visible images to include only the current filtered data up to the specified page
    setVisibleImages(nextPageImages);
  };
  
  // Effect to handle resetting page and visibleImages on filter change
  useEffect(() => {
    setPage(1); // Reset to the first page whenever the filter changes
    setVisibleImages([]); // Clear the visible images
    loadMoreImages(); // Load the first page of filtered data
  }, [selectedEventType]);
  
  // Effect to load more images when the page increments
  useEffect(() => {
    const itemsPerPage = 10;
  
    // Filter gallery data based on selectedEventType
    const filteredData = selectedEventType
      ? galleryData.filter((group) => group.eventType === selectedEventType)
      : galleryData;
  
    // Only load more images if there are more items to show for this page
    if (page * itemsPerPage <= filteredData.length) {
      loadMoreImages();
    }
  }, [page]);
  
    
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    const currentObserverRef = observerRef.current;
    if (currentObserverRef) observer.observe(currentObserverRef);

    return () => {
      if (currentObserverRef) observer.unobserve(currentObserverRef);
    };
  }, []);
  

  const openModal = (groupIndex: number, imageIndex: number) => {
    const globalIndex = visibleImages
      .flatMap((group) => group.images)
      .findIndex((_, index) => {
        const flatIndex = visibleImages
          .slice(0, groupIndex)
          .reduce((sum, group) => sum + group.images.length, 0) + imageIndex;
        return index === flatIndex;
      });
  
    console.log("Calculated Global Index:", globalIndex);
  
    // Set modal state
    setCurrentImageIndex(globalIndex);
    setIsModalOpen(true);
    setIsFlickityReady(false);
  
    setTimeout(() => {
      const Flickity = require("flickity-imagesloaded");
  
      // Destroy existing Flickity instance if it exists
      if (flickityRef.current) {
        flickityRef.current.destroy();
      }
  
      // Initialize new Flickity instance
      flickityRef.current = new Flickity(".carousel", {
        cellAlign: "left",
        cellSelector: ".carousel-cell",
        imagesLoaded: true,
        prevNextButtons: false,
        pageDots: false,
        percentPosition: true,
        wrapAround: true,
        dragThreshold: 5,
        selectedAttraction: 0.1,
        friction: 0.8,
        initialIndex: globalIndex,
        accessibility: true,
      });
  
      console.log("Initialized Flickity at Index:", globalIndex);
  
      setIsFlickityReady(true);
  
      // Sync current image index on Flickity's select event
      flickityRef.current.on("select", () => {
        setCurrentImageIndex(flickityRef.current.selectedIndex);
      });  
    }, 100); // Ensure the modal fully opens
  };
  
  

  const closeModal = () => {
    console.log(flickityRef.current)
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  
    // Cleanup Flickity and remove event listeners
    if (flickityRef.current) {
      flickityRef.current.destroy();
      flickityRef.current = null;
      console.log(flickityRef.current)
    }
  };
  

  return (
    <div className="bg-softOpal dark:bg-navySmoke py-12 md:py-18 flex justify-center">
      <div className="max-w-[85.75rem] flex flex-col gap-[1.5rem] mx-[0.625rem] lg:mx-[1.5625rem]">
        <h1 className="font-visbyBold text-navySmoke dark:text-softOpal text-center mb-[1rem]">
          {galleryCopy.galleryTitle}
        </h1>
        <p className="text-navySmoke dark:text-softOpal max-w-[550px] text-center mx-auto">{galleryCopy.gallerySubTitle}</p>
        {/* Event Type Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-[1.5rem]">
          <button
            onClick={() => {
              setSelectedEventType(null);
              setPage(1);
            }}
            className={`px-4 py-2 font-visbyBold ${
                selectedEventType === null
                ? "text-mauvelous underline underline-offset-8"
                : "text-navySmoke dark:text-softOpal"
              }`}
          >
            All
          </button>
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSelectedEventType(option.value === selectedEventType ? null : option.value);
                setPage(1);
              }}
              className={`px-4 py-2 font-visbyBold ${
                selectedEventType === option.value
                  ? "text-mauvelous underline underline-offset-8"
                  : "text-navySmoke dark:text-softOpal"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex w-auto"
          columnClassName="masonry-column"
        >
          {visibleImages.flatMap((group, groupIndex) =>
            group.images.map((image, imageIndex) => (
              <div
                key={`${groupIndex} ${imageIndex}`}
                className="group relative mb-4 sm:ml-4 overflow-hidden"
                onClick={() => openModal(groupIndex, imageIndex)}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-zoomColor opacity-0 group-hover:opacity-90 transition-all duration-700 overflow-hidden z-10 cursor-pointer"></div>
                
                {/* Image with zoom effect */}
                <Image
                  src={image.image}
                  alt={`${group.eventType}`}
                  className="w-full h-auto transition-all duration-700 ease-in-out transform group-hover:scale-125 image-wrapper"
                  loading="lazy"
                  width={500}
                  height={500}
                  onLoadingComplete={(img) => img.classList.add("image-loaded")}
                />
              </div>
            ))
          )}
        </Masonry>

        {/* Observer div for triggering load more */}
        <div ref={observerRef} className="h-1" />

        {/* Modal */}
        {isModalOpen && currentImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button
              type="button"
              data-id="Close Button"
              onClick={closeModal}
              className="absolute top-4 right-4 h-8 w-8 text-white z-10"
            >
              &#10005;
            </button>
            {/* Navigation arrows */}
            <button
              type="button"
              aria-label="Previous Image"
              className="custom-prev-button absolute left-4 top-1/2 rotate-[180deg] transform -translate-y-1/2 z-10 pointer-events-auto"
              onClick={() => flickityRef.current?.previous()}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" className="text-white">
                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" fill="currentColor" />
              </svg>
            </button>
            <button
              type="button"
              data-id="next"
              aria-label="Next Event"
              className="custom-next-button absolute right-4 top-1/2 transform -translate-y-1/2 z-10 pointer-events-auto"
              onClick={() => flickityRef.current?.next()}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" className="text-white">
                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" fill="currentColor" />
              </svg>
            </button>
            
            {/* Flickity Carousel */}
            <div className="carousel w-screen h-screen cursor-pointer">
            {allImages.map((image, index) => (
              <div key={index} className="carousel-cell h-screen w-screen flex items-center justify-center ml-[20px]">
                {isFlickityReady && (
                  <Image
                    src={image.image}
                    alt={`Expanded view ${index + 1}`}
                    width={800}
                    height={800}
                    className="object-contain w-full h-full max-w-[90%] lg:max-w-[1500px] max-h-[calc(100vh-100px)]"
                  />
                )}
              </div>
            ))}
          </div>

            {/* Image counter */}
            <div className="absolute top-4 left-4 text-white text-lg">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
