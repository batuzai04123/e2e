import Page from './Page';
import { DashboardMap } from "../locators/web/dashboard.map";
class DashboardPage extends Page {

    // Methods

    hoverToProfilePicture() {
        super.hoverTo(DashboardMap.profilePicture);
    }

    clickLogout() {
        super.click(DashboardMap.logout);
    }
}

export default new DashboardPage();