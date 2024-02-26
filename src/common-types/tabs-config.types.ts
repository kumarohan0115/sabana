import { UserType } from "./user.types";

export enum PageType {
    TEST_PANEL = 'test-panel',
    LOGIN_SIGNUP = 'login_signup'
}

export interface TabsConfig {
    [UserType.MERCHANT]?: TabsConfigItem[];
    [UserType.WALLET]?: TabsConfigItem[];
}

export interface TabsConfigItem {
    name: string;
    icon: string;
    url: string;
    permission?: string|boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.ComponentType<any>;
}
