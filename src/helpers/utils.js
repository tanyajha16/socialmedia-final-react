export function getFormBody(params) {
  let FormBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(params[property]);

    FormBody.push(encodedKey + '=' + encodedValue);
  }
  return FormBody.join('&'); // 'usrname=tamya&passsword=12212
}

export function getAuthTokenFromLocalStorage ()
{
  return localStorage.getItem('token');
}
