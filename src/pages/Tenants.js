import React, { useState } from 'react';
import './Tenants.css';

function Tenants() {
  const [tenants] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '(555) 123-4567',
      property: 'Sunset Apartments',
      unit: '4B',
      leaseStart: '2024-01-15',
      leaseEnd: '2024-12-31',
      rentAmount: '$1,200',
      status: 'Active',
      lastPayment: '2024-10-01'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '(555) 987-6543',
      property: 'Oak Tree Condos',
      unit: '2A',
      leaseStart: '2024-03-01',
      leaseEnd: '2025-02-28',
      rentAmount: '$1,800',
      status: 'Active',
      lastPayment: '2024-10-01'
    },
    {
      id: 3,
      name: 'Mike Davis',
      email: 'mike.davis@email.com',
      phone: '(555) 456-7890',
      property: 'Garden View Townhomes',
      unit: '12C',
      leaseStart: '2024-02-15',
      leaseEnd: '2025-01-31',
      rentAmount: '$2,200',
      status: 'Active',
      lastPayment: '2024-09-28'
    },
    {
      id: 4,
      name: 'Emily Wilson',
      email: 'emily.w@email.com',
      phone: '(555) 321-0987',
      property: 'Sunset Apartments',
      unit: '7A',
      leaseStart: '2024-06-01',
      leaseEnd: '2025-05-31',
      rentAmount: '$1,200',
      status: 'Pending',
      lastPayment: '2024-09-15'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredTenants = tenants.filter(tenant => {
    const matchesSearch = tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tenant.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || tenant.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="tenants">
      <div className="page-header">
        <h1>Tenants</h1>
        <button className="btn btn-primary">Add New Tenant</button>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Search tenants..."
            className="form-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <select
            className="form-input"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Tenants Table */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Tenant Directory</h2>
        </div>
        
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Tenant</th>
                <th>Contact</th>
                <th>Property & Unit</th>
                <th>Lease Period</th>
                <th>Rent</th>
                <th>Status</th>
                <th>Last Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTenants.map(tenant => (
                <tr key={tenant.id}>
                  <td>
                    <div className="tenant-info">
                      <strong>{tenant.name}</strong>
                      <br />
                      <small>{tenant.email}</small>
                    </div>
                  </td>
                  <td>{tenant.phone}</td>
                  <td>
                    <div>
                      <strong>{tenant.property}</strong>
                      <br />
                      <small>Unit {tenant.unit}</small>
                    </div>
                  </td>
                  <td>
                    <div>
                      <small>Start: {formatDate(tenant.leaseStart)}</small>
                      <br />
                      <small>End: {formatDate(tenant.leaseEnd)}</small>
                    </div>
                  </td>
                  <td><strong>{tenant.rentAmount}</strong></td>
                  <td>
                    <span className={`status-badge ${
                      tenant.status === 'Active' ? 'status-active' : 
                      tenant.status === 'Pending' ? 'status-pending' : 'status-inactive'
                    }`}>
                      {tenant.status}
                    </span>
                  </td>
                  <td>{formatDate(tenant.lastPayment)}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn btn-primary btn-sm">View</button>
                      <button className="btn btn-warning btn-sm">Edit</button>
                      <button className="btn btn-success btn-sm">Payment</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTenants.length === 0 && (
          <div className="no-results">
            <p>No tenants found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tenants;