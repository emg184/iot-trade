import axios from 'axios';

export function getCoordinates(link) {
  return axios.get(link)
}
