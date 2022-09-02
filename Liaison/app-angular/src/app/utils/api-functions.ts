import { HttpHeaders } from '@angular/common/http';

const apiBaseUrl: string = 'http://localhost:3000/api/';
enum apiRoutes {user = "user/", contacts = "contacts/", messages = "messages/"};

export const generateApiUrl = (groupRoute: keyof typeof apiRoutes, individualRoute: string = '') => {
  return apiBaseUrl + apiRoutes[groupRoute] + individualRoute;
}

export const generateHttpOptions = (authToken: string = '') => {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    })
  }
}