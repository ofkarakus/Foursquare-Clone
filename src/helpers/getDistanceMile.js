/**
 *
 * @param {Object} venueLocation
 * @param {Object} userLocation
 */

const getDistanceMile = async (venueLocation, userLocation) => {
  const lat1 = venueLocation.lat;
  const lon1 = venueLocation.lng;
  const lat2 = userLocation.latitude;
  const lon2 = userLocation.longitude;
  const R = 6371 / 1.609344; // mile

  const x1 = lat2 - lat1;
  const dLat = (x1 * Math.PI) / 180;
  const x2 = lon2 - lon1;
  const dLon = (x2 * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  const e = Math.round(d * 100) / 100;
  return e;
};

export default getDistanceMile;
