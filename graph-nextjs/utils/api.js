import axios from 'axios';

const API = axios.create({
  baseURL: process.env.BASEURL, 
});

export const addNode = (nodeData) => API.post('/nodes', nodeData);
export const addRelationship = (relationshipData) => API.post('/relationships', relationshipData);
export const fetchGraphData = () => API.get('/graph');
