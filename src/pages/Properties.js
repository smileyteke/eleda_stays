import React, { useState } from 'react';
import './Properties.css';

function Properties() {
  const [properties] = useState([
    {
      id: 1,
      name: 'Sunset Apartments',
      address: '123 Main St, Downtown',
      type: 'Apartment Complex',
      units: 12,
      occupied: 10,
      monthlyRent: '$1,200',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Oak Tree Condos',
      address: '456 Oak Ave, Midtown',
      type: 'Condominium',
      units: 8,
      occupied: 7,
      monthlyRent: '$1,800',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Garden View Townhomes',
      address: '789 Garden Rd, Suburbs',
      type: 'Townhouse',
      units: 6,
      occupied: 4,
      monthlyRent: '$2,200',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Downtown Loft',
      address: '321 Urban St, Downtown',
      type: 'Loft',
      units: 1,
      occupied: 0,
      monthlyRent: '$2,800',
      status: 'Available'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'All' || property.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="properties">
      <div className="page-header">
        <h1>Properties</h1>
        <button className="btn btn-primary">Add New Property</button>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Search properties..."
            className="form-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <select
            className="form-input"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Apartment Complex">Apartment Complex</option>
            <option value="Condominium">Condominium</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Loft">Loft</option>
          </select>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-2">
        {filteredProperties.map(property => (
          <div key={property.id} className="card property-card">
            <div className="property-header">
              <h3>{property.name}</h3>
              <span className={`status-badge ${property.status === 'Active' ? 'status-active' : 'status-pending'}`}>
                {property.status}
              </span>
            </div>
            
            <div className="property-details">
              <p><strong>Address:</strong> {property.address}</p>
              <p><strong>Type:</strong> {property.type}</p>
              <p><strong>Units:</strong> {property.occupied}/{property.units} occupied</p>
              <p><strong>Monthly Rent:</strong> {property.monthlyRent}</p>
            </div>

            <div className="property-progress">
              <div className="progress-label">Occupancy Rate</div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(property.occupied / property.units) * 100}%` }}
                ></div>
              </div>
              <div className="progress-text">
                {Math.round((property.occupied / property.units) * 100)}% occupied
              </div>
            </div>

            <div className="property-actions">
              <button className="btn btn-primary">View Details</button>
              <button className="btn btn-success">Add Tenant</button>
              <button className="btn btn-warning">Edit</button>
            </div>
          </div>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="no-results">
          <p>No properties found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default Properties;