// ListingsContainer.js
import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchTerm }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    const response = await fetch('http://localhost:6001/listings');
    const data = await response.json();
    setListings(data);
  };

  const deleteListing = async (id) => {
    try {
      const response = await fetch(`http://localhost:6001/listings/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setListings(listings.filter(listing => listing.id !== id));
      }
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };

  const filteredListings = listings.filter(listing =>
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} {...listing} deleteListing={deleteListing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;