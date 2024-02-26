import { Theme } from "./common.types"

export interface OrderInfo {
    merchantDetails: MerchantDetails;
    mandateDetails: MandateDetails;
    productDetails?: ProductDetails;
    customerDetails: CustomerDetails;
    orderDetails: OrderDetails;
    merchantProductDetails: MerchantProductDetails;
    availableModes:PaymentMode[];
    message?:string
}

export interface PaymentMode {
    type:string,
    name:string,
    icon:string,
    payLaterDetails?:PayLaterDetails,
    availableBankList?:Bank[]
}

export interface MerchantDetails {
    merchantId: string;
    successUrl: string;
    failureUrl: string;
    merchantTheme: Theme;
    merchantName: string;
}

export interface MandateDetails {
    biller: string;
    merchantName:string;
    nextBillingDate: string;
    currency: string;
    maxLimit: string;
    frequency: string;
    expiry: string;
    infoBanner: string;
}

export interface MerchantProductDetails {
    name:string,
    quantity:string,
    details:string
}

export interface CustomerDetails {
    customerId: string;
    clientCustomerId: string;
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    countryCode: string;
    isdCode: string;
    preferredDate?:number
    preferredLanguage?: string
    financialInstruments: FinancialInstrument[];
}

export interface FinancialInstrument {
    fiId?:string;
    fspCode?:string;
    fspId?:string;
    msisdn?:string;
    validMsisdn?:boolean;
    balance?:number;
    issuer?: string;
    type?: FinancialInstrumentType;
    logoUrl?: string;
    accountNumber?: string;
    branchCode?: string;
    selected?: boolean;
    //below keys added for new payload
    amount?: string;
    customerWalletFee?: string;
    customerPlatformFee?: string;
    tax?: string;
    totalAmount?: string;
}

export interface ProductDetails {
    productType: string;
    operationType: string;
}

export interface OrderDetails {
    merchantOrderId: string;
    nxtpeOrderId: string;
    planId: string;
    amount?:string
    customerWalletFee?:string;
    customerPlatformFee?:string;
    tax?:string;
    totalAmount?:string;
    currency: string;
    proratedAmount: string;
}


export interface PayLaterDetails {
    info:string,
    creditLimit:string,
    options:PayLaterOption[]
}

export interface PayLaterOption {
    title:string,
    interestRate: number,
    totalAmount: number,
    currency: string,
    processingFees: number,
    emiBreakup: EmiBreakUp[]
}

export interface EmiBreakUp {
    payableDate:string,
    amount:number
}


export interface Bank {
    name:string,
    logo:string
}



export enum FinancialInstrumentType {
    WALLET = 'WALLET',
    BANK = 'BANK'
}


export interface processOrderType{
    errorMessage?:string
    //new Error Response
    detail?:string,
    instance?:string,
    status?:number,
    type?:string,
    title?:string,
}

export interface orderStatusType{
    status: number;
    message:string;
    orderStatus?: string;
    orderState?: string;
    //new Error Response
    detail?:string,
    instance?:string,
    type?:string,
    title?:string,
}

export interface preferredDateSelection{
    proratedAmount : string,
    nextBillingDate : string,
    baseAmount : string,
    detail?:string
}
export interface confirmdate{
    message? : string,
    detail?:string
}
