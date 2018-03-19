import { fetchStargazersByProject } from './api';
import { DataMapper } from 'async-structure';

let stargazersByRepository = new DataMapper(fetchStargazersByProject);

export default stargazersByRepository;
