export enum IconSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

export interface CommonResponseType<T> {
    checkoutUrl?: string;
    message(message: string): string;
    errorMessage?:string;
    status: number, 
    data: T
}


export interface Dictionary<V> {
    [K:string]: V;
}


export enum HeaderActionType {
    BACK = 'back',
    CHANGE_LANGUAGE = 'change_language'
}

export enum FooterActionType {
    TOGGLE_DETAILS_WIDGET = 'TOGGLE_DETAILS_WIDGET',
    PROCEED = 'PROCEED'
}

export interface Theme {
    bodyColor?: string;
    themeBackgroundColor?: string;
    themeColor?: string;
    headerBackgroundColor?: string;
    headerColor?: string;
    errorColor?: string;
    successColor?: string;
    merchantName?: string;
    logoUrl?: string;
}

export interface AutoPayDetails {
    expiry: string;
    currency: string;
    maxLimit: string;
    frequency: string;
}
