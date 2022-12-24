const handleError = ({ error, rejectWithValue }) => {

    if (error.response) {
        // Request đã được tạo ra và server đã hồi đáp với một mã trạng thái
        // nằm ra ngoài tầm 2xx
        // console.error({ ...error.response.data, status: error.response.status });
        return rejectWithValue({ ...error.response.data, status: error.response.status });
    } else if (error.request) {
        // Request đã được tạo ra nhưng không nhận được hồi đáp nào
        // Trong trình duyệt, `error.request` là instance của XMLHttpRequest
        // còn trong node.js thì nó là instance của http.ClientRequest
        // console.error(error.request);
    } else {
        // Điều gì đó đã xảy ra trong bước thiết lập request rồi gây nên lỗi
        // console.error('Lỗi', error.message);
    }
    // console.error(error.config)
}

export default handleError