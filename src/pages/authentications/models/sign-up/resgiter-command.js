/**
 * Register command data.
 *
 * @typedef {Object} RegisterCommandData
 * @property {string} holderName
 * @property {string} email
 * @property {string} telephone
 * @property {number|string} state
 * @property {string} address
 * @property {number|string} gender
 * @property {string|Date} birthDate
 * @property {string} passWord
 * @property {number|string} role
 * @property {string} birthPlace
 * @property {string} citizendId
 */

export class RegisterCommand {
  /**
   * @param {RegisterCommandData} data
   */
  constructor({
    holderName = "",
    email = "",
    telephone = "",
    state = null,
    address = "",
    gender = null,
    birthDate = null,
    passWord = "",
    role = null,
    birthPlace = "",
    citizendId = "",
  } = {}) {
    this.holderName = holderName;
    this.email = email;
    this.telephone = telephone;
    this.state = state;
    this.address = address;
    this.gender = gender;
    this.birthDate = birthDate;
    this.passWord = passWord;
    this.role = role;
    this.birthPlace = birthPlace;
    this.citizendId = citizendId;
  }
}