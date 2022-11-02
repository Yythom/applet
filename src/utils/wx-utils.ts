import { makePhoneCall } from '@tarojs/taro'

export const callPhone = (e, phone) => {
    e.stopPropagation();
    makePhoneCall({
        phoneNumber: phone,
    });
};
