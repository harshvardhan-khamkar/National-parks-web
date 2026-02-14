import { useState, useMemo } from 'react';
import { parksData, getRegions, getStates } from '../data/parks';
import ParkCard from '../components/ParkCard';
import './Parks.css';

function Parks() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [sortBy, setSortBy] = useState('name');

    const regions = getRegions();
    const states = getStates();

    const filteredAndSortedParks = useMemo(() => {
        let filtered = parksData.filter((park) => {
            const matchesSearch =
                searchQuery === '' ||
                park.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                park.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
                park.famousFor.some((item) =>
                    item.toLowerCase().includes(searchQuery.toLowerCase())
                );

            const matchesRegion =
                selectedRegion === '' || park.region === selectedRegion;
            const matchesState = selectedState === '' || park.state === selectedState;

            return matchesSearch && matchesRegion && matchesState;
        });

        // Sort
        filtered.sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'area') {
                return parseFloat(b.area) - parseFloat(a.area);
            } else if (sortBy === 'state') {
                return a.state.localeCompare(b.state);
            }
            return 0;
        });

        return filtered;
    }, [searchQuery, selectedRegion, selectedState, sortBy]);

    return (
        <div className="parks-page">
            <section className="parks-hero">
                <div className="container">
                    <h1 className="page-title fade-in">Explore National Parks</h1>
                    <p className="page-subtitle fade-in">
                        Discover India's rich biodiversity through {parksData.length} national parks and wildlife sanctuaries
                    </p>
                </div>
            </section>

            <section className="parks-content section">
                <div className="container">
                    {/* Search and Filter Bar */}
                    <div className="filter-section">
                        <div className="search-wrapper">
                            <input
                                type="text"
                                placeholder="Search parks, states, or wildlife..."
                                className="search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <span className="search-icon">🔍</span>
                        </div>

                        <div className="filters-wrapper">
                            <select
                                className="filter-select"
                                value={selectedRegion}
                                onChange={(e) => setSelectedRegion(e.target.value)}
                            >
                                <option value="">All Regions</option>
                                {regions.map((region) => (
                                    <option key={region} value={region}>
                                        {region}
                                    </option>
                                ))}
                            </select>

                            <select
                                className="filter-select"
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                            >
                                <option value="">All States</option>
                                {states.map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>

                            <select
                                className="filter-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="name">Sort by Name</option>
                                <option value="area">Sort by Area</option>
                                <option value="state">Sort by State</option>
                            </select>
                        </div>
                    </div>

                    {/* Results Info */}
                    <div className="results-info">
                        <p>
                            Showing <strong>{filteredAndSortedParks.length}</strong> park(s)
                            {searchQuery && ` for "${searchQuery}"`}
                        </p>
                        {(searchQuery || selectedRegion || selectedState) && (
                            <button
                                className="clear-filters"
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedRegion('');
                                    setSelectedState('');
                                }}
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>

                    {/* Parks Grid */}
                    {filteredAndSortedParks.length > 0 ? (
                        <div className="parks-grid">
                            {filteredAndSortedParks.map((park) => (
                                <ParkCard key={park.id} park={park} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <div className="no-results-icon">🔍</div>
                            <h3>No parks found</h3>
                            <p>Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Parks;
