import { fetchStargazersByProject } from './api';
import { Resource } from './ExternalLib';

let stargazersByRepository = new Resource(fetchStargazersByProject);

export default stargazersByRepository;
