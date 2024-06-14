const endpoints = Object.freeze({});

const getEndpoint = (endpoint: keyof typeof endpoints) => `${process.env.NEXT_PUBLIC_API_URL}/${endpoints[endpoint]}`;

export default getEndpoint;
