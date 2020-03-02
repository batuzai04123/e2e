/**
 * Login Locators
 */

const LoginMap = {
    username: 'input[ng-model*="username"]',
    password: 'input[ng-model*="password"]',
    loginBtn: '//button[normalize-space(text())="Login"]',
    formValidationMessage: `return document.querySelector(".form-group > input").validationMessage`
}

export { LoginMap };