/**
 * Login response data.
 *
 * @typedef {Object} LoginResponseData
 * @property {string} accessToken
 * @property {string} refreshToken
 */

export class LoginResponse {
  /**
   * @param {LoginResponseData} data
   */
  constructor({
    accessToken = "",
    refreshToken = "",
  } = {}) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}