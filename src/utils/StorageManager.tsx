/**
 * StorageManager class to handle local storage.
 * 
 * Currently, this class is used to handle authentication tokens,
 * but a token is not required for API calls in the current version of the application.
 * 
 * This implementation is set up for future use, allowing for easy integration
 * of token-based authentication if needed in later stages of development.
 */

export default class MyStorageManager {
    _USER = "user";
    _TOKEN = "token";
    _localStorage = window.localStorage;

    getToken = () => this._localStorage.getItem(this._TOKEN) || "";
    
    storeToken = (token: string) => this._localStorage.setItem(this._TOKEN, token);
    
    removeToken = () => this._localStorage.removeItem(this._TOKEN);
}
