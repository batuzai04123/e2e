import Page from './Page';
import { LoginMap } from "../locators/web/login.map";

class LoginPage extends Page {

    // Methods

    setUsername(username: string) {
        super.setText(LoginMap.username, username);
    }

    setPassword(password: string) {
        super.setText(LoginMap.password, password);
    }

    clickLoginButton() {
        super.click(LoginMap.loginBtn);
    }

    getFormMessage() {
        return super.runJS(LoginMap.formValidationMessage);
    }
}

export default new LoginPage();