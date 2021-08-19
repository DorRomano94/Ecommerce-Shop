export const baseUrl = 'https://dors-ecommerce-shop.herokuapp.com'

export const formatCurrency = (price) => {
    return `$${price}`
};
export const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        return false;
    } else {
        return true;
    }
}



