/**
 * Login command.
 *
 * @typedef {Object} LoginCommandData
 * @property {string} userName - Username used for authentication.
 * @property {string} passWord - Password used for authentication.
 */

export class LoginCommand {
    /**
     * @param {LoginCommandData} data
     */
    constructor({
        userName = "",
        passWord = "",
    } = {}) {
        this.userName = userName;
        this.passWord = passWord;
    }
}