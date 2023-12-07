import { Gitlab } from '@gitbeaker/rest';

const api = new Gitlab({
  token: 'personaltoken'
});
console.log("API Object:", api);
