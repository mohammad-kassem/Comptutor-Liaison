import { HttpHeaders } from '@angular/common/http';

const apiBaseUrl: string = 'http://localhost:3000/api/';
enum apiRoutes {auth = "auth/", contacts = "contacts/", messages = "messages/", users = "users/"};

export const generateApiUrl = (groupRoute: keyof typeof apiRoutes, individualRoute: string = '', queryId: string = '', queryType: string = 'id') => {
  return `${apiBaseUrl + apiRoutes[groupRoute] + individualRoute}/?${queryType}=${queryId}`;
}

export const generateHttpOptions = (authToken: string = '') => {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authToken
    })
  }
}