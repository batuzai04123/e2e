import { assert } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';
import dashboard from '../pages/DashboardPage';

@binding()
export class DashboardSteps {

    @then(/^I perform logout$/)
    public logout() {
        dashboard.hoverToProfilePicture();
        dashboard.clickLogout();
    }
}
