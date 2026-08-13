// jsdoc định nghĩa kiểu dữ liệu (phát hiện sai khi code nhưng không check valid và runtime error)
/**
 * Standard API response.
 *
 * @typedef {Object} ApiResponseData
 * @property {boolean} success
 * @property {*} data
 * @property {string} message
 */

// class để chuẩn hóa dữ liệu trả về từ API, giúp dễ dàng xử lý và hiển thị thông tin phản hồi trong ứng dụng.
export class ApiResponse {
    constructor({
        success = true,
        data = null,
        message = "",
    } = {}) {
        this.success = success;
        this.data = data;
        this.message = message;
    }
}