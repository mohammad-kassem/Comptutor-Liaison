import { HttpHeaders } from '@angular/common/http';

const apiBaseUrl: string = 'http://localhost:3000/api/';
enum apiRoutes {user = "user/", contacts = "contacts/", messages = "messages/"};

export const generateApiUrl = (groupRoute: keyof typeof apiRoutes, individualRoute: string = '', queryId: string = '') => {
  return `${apiBaseUrl + apiRoutes[groupRoute] + individualRoute}/?id=${queryId}`;
}

export const generateHttpOptions = (authToken: string = '') => {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authToken
    })
  }
}