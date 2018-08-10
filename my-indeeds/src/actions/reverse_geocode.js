const GOOGLE_API_KEY = '{YOUR_API_KEY}';
const GEOCODE_ROOT_URL = `https://maps.googleapis.com/maps/api/geocode/json?`;

const buildGeocodeUrl = ({ longitude, latitude }) => {
    const query = qs.stringify({
        key: GOOGLE_API_KEY,
        latlng: `${latitude},${longitude}`
    });
    return `${GEOCODE_ROOT_URL}${query}`;
};

const reverseGeocode = async region => {
    const url = buildGeocodeUrl(region);
    let { data } = await axios.get(url);

    if (data.error_message) {
        throw new Error(data.error_message);
    }

    const { results } = data;

    if (results.length === 0) {
        throw new Error('No Results');
    }

    const postCode = results[0].address_components.find(
        component => component.types[0] === 'postal_code'
    );

    if (!postCode) {
        throw new Error('No Postcode');
    }

    return postCode.long_name || postCode.short_name;
};
