/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import requester from "../request";
import type {
  PostApiVAppletUserCardRecordList,
  ApiVAppletUserCardRecordListPostResponse,
  PostApiVAppletUserCardRecordDetal,
  ApiVAppletUserCardRecordDetalPostResponse,
  PostApiVAppletUserCardDetail,
  ApiVAppletUserCardDetailPostResponse,
  PostApiVAppletUserCardTake,
  ApiVAppletUserCardTakePostResponse,
  PostApiVAppletTradeRechargeMake,
  PostApiVAppletOrderRechargeList,
  ApiVAppletOrderRechargeListPostResponse,
  PostApiVAppletOrderRechargeDetail,
  ApiVAppletOrderRechargeDetailPostResponse,
  PostApiVAppletOrderRechargeHandle,
  ApiVAppletOrderRechargeHandlePostResponse,
  PostApiVAppletRechargeList,
  ApiVAppletRechargeListPostResponse,
  PostApiVAppletNoticeList,
  ApiVAppletNoticeListPostResponse,
  PostApiVAppletLogin,
  ApiVAppletLoginPostResponse,
  PostApiVAppletMock,
  ApiVAppletMockPostResponse,
  PostApiVAppletUserCartList,
  ApiVAppletUserCartListPostResponse,
  PostApiVAppletUserCartCreate,
  ApiVAppletUserCartCreatePostResponse,
  PostApiVAppletUserCartModify,
  ApiVAppletUserCartModifyPostResponse,
  PostApiVAppletUserCartDetail,
  ApiVAppletUserCartDetailPostResponse,
  PostApiVAppletUserCartRemove,
  ApiVAppletUserCartRemovePostResponse,
  PostApiVAppletUserCartPrice,
  ApiVAppletUserCartPricePostResponse,
  PostApiVAppletOrderList,
  ApiVAppletOrderListPostResponse,
  PostApiVAppletOrderDetail,
  ApiVAppletOrderDetailPostResponse,
  PostApiVAppletOrderModify,
  ApiVAppletOrderModifyPostResponse,
  PostApiVAppletOrderHandle,
  ApiVAppletOrderHandlePostResponse,
  PostApiVAppletOrderCancel,
  ApiVAppletOrderCancelPostResponse,
  PostApiVAppletOrderComplete,
  ApiVAppletOrderCompletePostResponse,
  PostApiVAppletProductList,
  ApiVAppletProductListPostResponse,
  PostApiVAppletProductDetail,
  ApiVAppletProductDetailPostResponse,
  ApiVAppletProductCategoryListPostResponse,
  PostApiVAppletProductCategoryChildren,
  ApiVAppletProductCategoryChildrenPostResponse,
  ApiVAppletProductCategoryBannerPostResponse,
  ApiVAppletProductCategoryCouponPostResponse,
  PostApiVAppletHome,
  PostApiVAppletTradePreview,
  PostApiVAppletTradeMake,
  PostApiVAppletTradePay,
  PostApiVAppletWechatCodeSession,
  ApiVAppletWechatCodeSessionPostResponse,
  PostApiVAppletWechatMobile,
  ApiVAppletWechatMobilePostResponse,
  PostApiVAppletUserAddressList,
  ApiVAppletUserAddressListPostResponse,
  PostApiVAppletUserAddressCreate,
  ApiVAppletUserAddressCreatePostResponse,
  PostApiVAppletUserAddressEdit,
  ApiVAppletUserAddressEditPostResponse,
  PostApiVAppletUserAddressRemove,
  ApiVAppletUserAddressRemovePostResponse,
  PostApiVAppletUserAddressDefault,
  ApiVAppletUserAddressDefaultPostResponse,
  PostApiVAppletUserAddressLocation,
  ApiVAppletUserAddressLocationPostResponse,
  PostApiVAppletUserProfile,
  ApiVAppletUserProfilePostResponse,
  PostApiVAppletUserEdit,
  ApiVAppletUserEditPostResponse,
  PostApiVAppletShopDetail,
  ApiVAppletShopDetailPostResponse,
  PostApiVAppletShopSettingList,
  ApiVAppletShopSettingListPostResponse,
} from "./definition";

/** @description request parameter type for postApiV1AppletUserCardRecordList */
export interface PostApiV1AppletUserCardRecordListOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserCardRecordList */
export interface PostApiV1AppletUserCardRecordListOption {
  body?: PostApiVAppletUserCardRecordList;
}

/** @description response type for postApiV1AppletUserCardRecordList */
export interface PostApiV1AppletUserCardRecordListResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletUserCardRecordListPostResponse;
}

export type PostApiV1AppletUserCardRecordListResponseSuccess =
  PostApiV1AppletUserCardRecordListResponse[200];
/**
 * @description
 *   获取储蓄卡后台消费记录列表
 *   获取储蓄卡后台消费记录列表
 * @tags 小程序.会员卡.后台消费记录
 * @x-apifox-folder "小程序.会员卡.后台消费记录"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118658-run"
 */
export const postApiV1AppletUserCardRecordList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/card/record/list";
  function request(
    option: PostApiV1AppletUserCardRecordListOption
  ): Promise<PostApiV1AppletUserCardRecordListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserCardRecordListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserCardRecordDetal */
export interface PostApiV1AppletUserCardRecordDetalOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserCardRecordDetal */
export interface PostApiV1AppletUserCardRecordDetalOption {
  body?: PostApiVAppletUserCardRecordDetal;
}

/** @description response type for postApiV1AppletUserCardRecordDetal */
export interface PostApiV1AppletUserCardRecordDetalResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletUserCardRecordDetalPostResponse;
}

export type PostApiV1AppletUserCardRecordDetalResponseSuccess =
  PostApiV1AppletUserCardRecordDetalResponse[200];
/**
 * @description
 *   详情
 *   详情
 * @tags 小程序.会员卡.后台消费记录
 * @x-apifox-folder "小程序.会员卡.后台消费记录"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118659-run"
 */
export const postApiV1AppletUserCardRecordDetal = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/card/record/detal";
  function request(
    option: PostApiV1AppletUserCardRecordDetalOption
  ): Promise<PostApiV1AppletUserCardRecordDetalResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserCardRecordDetalResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserCardDetail */
export interface PostApiV1AppletUserCardDetailOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserCardDetail */
export interface PostApiV1AppletUserCardDetailOption {
  body?: PostApiVAppletUserCardDetail;
}

/** @description response type for postApiV1AppletUserCardDetail */
export interface PostApiV1AppletUserCardDetailResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletUserCardDetailPostResponse;
}

export type PostApiV1AppletUserCardDetailResponseSuccess =
  PostApiV1AppletUserCardDetailResponse[200];
/**
 * @description
 *   会员卡详情
 *   会员卡详情
 * @tags 小程序.会员卡
 * @x-apifox-folder "小程序.会员卡"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118660-run"
 */
export const postApiV1AppletUserCardDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/card/detail";
  function request(
    option: PostApiV1AppletUserCardDetailOption
  ): Promise<PostApiV1AppletUserCardDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserCardDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserCardTake */
export interface PostApiV1AppletUserCardTakeOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserCardTake */
export interface PostApiV1AppletUserCardTakeOption {
  body?: PostApiVAppletUserCardTake;
}

/** @description response type for postApiV1AppletUserCardTake */
export interface PostApiV1AppletUserCardTakeResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletUserCardTakePostResponse;
}

export type PostApiV1AppletUserCardTakeResponseSuccess =
  PostApiV1AppletUserCardTakeResponse[200];
/**
 * @description
 *   领取会员卡
 *   领取会员卡
 * @tags 小程序.会员卡
 * @x-apifox-folder "小程序.会员卡"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118661-run"
 */
export const postApiV1AppletUserCardTake = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/card/take";
  function request(
    option: PostApiV1AppletUserCardTakeOption
  ): Promise<PostApiV1AppletUserCardTakeResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserCardTakeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletTradeRechargeMake */
export interface PostApiV1AppletTradeRechargeMakeOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletTradeRechargeMake */
export interface PostApiV1AppletTradeRechargeMakeOption {
  body?: PostApiVAppletTradeRechargeMake;
}

/** @description response type for postApiV1AppletTradeRechargeMake */
export interface PostApiV1AppletTradeRechargeMakeResponse {
  /**
   * @description
   *   请求成功
   */
  200: {};
}

export type PostApiV1AppletTradeRechargeMakeResponseSuccess =
  PostApiV1AppletTradeRechargeMakeResponse[200];
/**
 * @description
 *   下单
 *   /api/v1/applet/trade/recharge/make
 * @tags 小程序.充值余额
 * @x-apifox-folder "小程序.充值余额"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118662-run"
 */
export const postApiV1AppletTradeRechargeMake = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/trade/recharge/make";
  function request(
    option: PostApiV1AppletTradeRechargeMakeOption
  ): Promise<PostApiV1AppletTradeRechargeMakeResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletTradeRechargeMakeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletOrderRechargeList */
export interface PostApiV1AppletOrderRechargeListOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletOrderRechargeList */
export interface PostApiV1AppletOrderRechargeListOption {
  body?: PostApiVAppletOrderRechargeList;
}

/** @description response type for postApiV1AppletOrderRechargeList */
export interface PostApiV1AppletOrderRechargeListResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletOrderRechargeListPostResponse;
}

export type PostApiV1AppletOrderRechargeListResponseSuccess =
  PostApiV1AppletOrderRechargeListResponse[200];
/**
 * @description
 *   获取充值设置列表
 *   获取充值设置列表
 * @tags 小程序.充值订单
 * @x-apifox-folder "小程序.充值订单"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118663-run"
 */
export const postApiV1AppletOrderRechargeList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/order/recharge/list";
  function request(
    option: PostApiV1AppletOrderRechargeListOption
  ): Promise<PostApiV1AppletOrderRechargeListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletOrderRechargeListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletOrderRechargeDetail */
export interface PostApiV1AppletOrderRechargeDetailOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletOrderRechargeDetail */
export interface PostApiV1AppletOrderRechargeDetailOption {
  body?: PostApiVAppletOrderRechargeDetail;
}

/** @description response type for postApiV1AppletOrderRechargeDetail */
export interface PostApiV1AppletOrderRechargeDetailResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletOrderRechargeDetailPostResponse;
}

export type PostApiV1AppletOrderRechargeDetailResponseSuccess =
  PostApiV1AppletOrderRechargeDetailResponse[200];
/**
 * @description
 *   获取订单详情
 *   获取订单详情
 * @tags 小程序.充值订单
 * @x-apifox-folder "小程序.充值订单"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118664-run"
 */
export const postApiV1AppletOrderRechargeDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/order/recharge/detail";
  function request(
    option: PostApiV1AppletOrderRechargeDetailOption
  ): Promise<PostApiV1AppletOrderRechargeDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletOrderRechargeDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletOrderRechargeHandle */
export interface PostApiV1AppletOrderRechargeHandleOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletOrderRechargeHandle */
export interface PostApiV1AppletOrderRechargeHandleOption {
  body?: PostApiVAppletOrderRechargeHandle;
}

/** @description response type for postApiV1AppletOrderRechargeHandle */
export interface PostApiV1AppletOrderRechargeHandleResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletOrderRechargeHandlePostResponse;
}

export type PostApiV1AppletOrderRechargeHandleResponseSuccess =
  PostApiV1AppletOrderRechargeHandleResponse[200];
/**
 * @description
 *   操作订单
 *   操作订单
 * @tags 小程序.充值订单
 * @x-apifox-folder "小程序.充值订单"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118665-run"
 */
export const postApiV1AppletOrderRechargeHandle = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/order/recharge/handle";
  function request(
    option: PostApiV1AppletOrderRechargeHandleOption
  ): Promise<PostApiV1AppletOrderRechargeHandleResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletOrderRechargeHandleResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletRechargeList */
export interface PostApiV1AppletRechargeListOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletRechargeList */
export interface PostApiV1AppletRechargeListOption {
  body?: PostApiVAppletRechargeList;
}

/** @description response type for postApiV1AppletRechargeList */
export interface PostApiV1AppletRechargeListResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletRechargeListPostResponse;
}

export type PostApiV1AppletRechargeListResponseSuccess =
  PostApiV1AppletRechargeListResponse[200];
/**
 * @description
 *   获取充值设置列表
 *   获取充值设置列表
 * @tags 小程序.充值设置
 * @x-apifox-folder "小程序.充值设置"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118666-run"
 */
export const postApiV1AppletRechargeList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/recharge/list";
  function request(
    option: PostApiV1AppletRechargeListOption
  ): Promise<PostApiV1AppletRechargeListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletRechargeListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletNoticeList */
export interface PostApiV1AppletNoticeListOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletNoticeList */
export interface PostApiV1AppletNoticeListOption {
  body?: PostApiVAppletNoticeList;
}

/** @description response type for postApiV1AppletNoticeList */
export interface PostApiV1AppletNoticeListResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletNoticeListPostResponse;
}

export type PostApiV1AppletNoticeListResponseSuccess =
  PostApiV1AppletNoticeListResponse[200];
/**
 * @description
 *   获取通知列表
 *   获取通知列表
 * @tags 小程序.通知
 * @x-apifox-folder "小程序.通知"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118667-run"
 */
export const postApiV1AppletNoticeList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/notice/list";
  function request(
    option: PostApiV1AppletNoticeListOption
  ): Promise<PostApiV1AppletNoticeListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletNoticeListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletLogin */
export interface PostApiV1AppletLoginOption {
  body?: PostApiVAppletLogin;
}

/** @description response type for postApiV1AppletLogin */
export interface PostApiV1AppletLoginResponse {
  /**
   * @description
   *   请求成功
   */
  200: ApiVAppletLoginPostResponse;
}

export type PostApiV1AppletLoginResponseSuccess =
  PostApiV1AppletLoginResponse[200];
/**
 * @description
 *   微信授权登录
 *   /api/v1/applet/login
 * @tags 小程序.登录
 * @x-apifox-folder "小程序.登录"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118779-run"
 */
export const postApiV1AppletLogin = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/login";
  function request(
    option?: PostApiV1AppletLoginOption
  ): Promise<PostApiV1AppletLoginResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletLoginResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletMock */
export interface PostApiV1AppletMockOption {
  body?: PostApiVAppletMock;
}

/** @description response type for postApiV1AppletMock */
export interface PostApiV1AppletMockResponse {
  /**
   * @description
   *   请求成功
   */
  200: ApiVAppletMockPostResponse;
}

export type PostApiV1AppletMockResponseSuccess =
  PostApiV1AppletMockResponse[200];
/**
 * @description
 *   登录
 *   /api/v1/applet/mock
 * @tags 小程序.登录
 * @x-apifox-folder "小程序.登录"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118780-run"
 */
export const postApiV1AppletMock = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/mock";
  function request(
    option?: PostApiV1AppletMockOption
  ): Promise<PostApiV1AppletMockResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletMockResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserCartList */
export interface PostApiV1AppletUserCartListOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserCartList */
export interface PostApiV1AppletUserCartListOption {
  body?: PostApiVAppletUserCartList;
}

/** @description response type for postApiV1AppletUserCartList */
export interface PostApiV1AppletUserCartListResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletUserCartListPostResponse;
}

export type PostApiV1AppletUserCartListResponseSuccess =
  PostApiV1AppletUserCartListResponse[200];
/**
 * @description
 *   获取购物车列表
 *   获取购物车列表
 * @tags 小程序.购物车
 * @x-apifox-folder "小程序.购物车"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118830-run"
 */
export const postApiV1AppletUserCartList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/cart/list";
  function request(
    option: PostApiV1AppletUserCartListOption
  ): Promise<PostApiV1AppletUserCartListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserCartListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserCartCreate */
export interface PostApiV1AppletUserCartCreateOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserCartCreate */
export interface PostApiV1AppletUserCartCreateOption {
  body?: PostApiVAppletUserCartCreate;
}

/** @description response type for postApiV1AppletUserCartCreate */
export interface PostApiV1AppletUserCartCreateResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletUserCartCreatePostResponse;
}

export type PostApiV1AppletUserCartCreateResponseSuccess =
  PostApiV1AppletUserCartCreateResponse[200];
/**
 * @description
 *   创建购物车
 *   创建购物车
 * @tags 小程序.购物车
 * @x-apifox-folder "小程序.购物车"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118831-run"
 */
export const postApiV1AppletUserCartCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/cart/create";
  function request(
    option: PostApiV1AppletUserCartCreateOption
  ): Promise<PostApiV1AppletUserCartCreateResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserCartCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserCartModify */
export interface PostApiV1AppletUserCartModifyOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserCartModify */
export interface PostApiV1AppletUserCartModifyOption {
  body?: PostApiVAppletUserCartModify;
}

/** @description response type for postApiV1AppletUserCartModify */
export interface PostApiV1AppletUserCartModifyResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletUserCartModifyPostResponse;
}

export type PostApiV1AppletUserCartModifyResponseSuccess =
  PostApiV1AppletUserCartModifyResponse[200];
/**
 * @description
 *   修改购物车
 *   修改购物车
 * @tags 小程序.购物车
 * @x-apifox-folder "小程序.购物车"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118832-run"
 */
export const postApiV1AppletUserCartModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/cart/modify";
  function request(
    option: PostApiV1AppletUserCartModifyOption
  ): Promise<PostApiV1AppletUserCartModifyResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserCartModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserCartDetail */
export interface PostApiV1AppletUserCartDetailOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserCartDetail */
export interface PostApiV1AppletUserCartDetailOption {
  body?: PostApiVAppletUserCartDetail;
}

/** @description response type for postApiV1AppletUserCartDetail */
export interface PostApiV1AppletUserCartDetailResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletUserCartDetailPostResponse;
}

export type PostApiV1AppletUserCartDetailResponseSuccess =
  PostApiV1AppletUserCartDetailResponse[200];
/**
 * @description
 *   获取购物车详情
 *   获取购物车详情
 * @tags 小程序.购物车
 * @x-apifox-folder "小程序.购物车"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118833-run"
 */
export const postApiV1AppletUserCartDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/cart/detail";
  function request(
    option: PostApiV1AppletUserCartDetailOption
  ): Promise<PostApiV1AppletUserCartDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserCartDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserCartRemove */
export interface PostApiV1AppletUserCartRemoveOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserCartRemove */
export interface PostApiV1AppletUserCartRemoveOption {
  body?: PostApiVAppletUserCartRemove;
}

/** @description response type for postApiV1AppletUserCartRemove */
export interface PostApiV1AppletUserCartRemoveResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletUserCartRemovePostResponse;
}

export type PostApiV1AppletUserCartRemoveResponseSuccess =
  PostApiV1AppletUserCartRemoveResponse[200];
/**
 * @description
 *   删除购物车
 *   删除购物车
 * @tags 小程序.购物车
 * @x-apifox-folder "小程序.购物车"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118834-run"
 */
export const postApiV1AppletUserCartRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/cart/remove";
  function request(
    option: PostApiV1AppletUserCartRemoveOption
  ): Promise<PostApiV1AppletUserCartRemoveResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserCartRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserCartPrice */
export interface PostApiV1AppletUserCartPriceOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserCartPrice */
export interface PostApiV1AppletUserCartPriceOption {
  body?: PostApiVAppletUserCartPrice;
}

/** @description response type for postApiV1AppletUserCartPrice */
export interface PostApiV1AppletUserCartPriceResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletUserCartPricePostResponse;
}

export type PostApiV1AppletUserCartPriceResponseSuccess =
  PostApiV1AppletUserCartPriceResponse[200];
/**
 * @description
 *   购物车下标价格
 *   购物车下标价格
 * @tags 小程序.购物车
 * @x-apifox-folder "小程序.购物车"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118835-run"
 */
export const postApiV1AppletUserCartPrice = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/cart/price";
  function request(
    option: PostApiV1AppletUserCartPriceOption
  ): Promise<PostApiV1AppletUserCartPriceResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserCartPriceResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletOrderList */
export interface PostApiV1AppletOrderListOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletOrderList */
export interface PostApiV1AppletOrderListOption {
  body?: PostApiVAppletOrderList;
}

/** @description response type for postApiV1AppletOrderList */
export interface PostApiV1AppletOrderListResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletOrderListPostResponse;
}

export type PostApiV1AppletOrderListResponseSuccess =
  PostApiV1AppletOrderListResponse[200];
/**
 * @description
 *   获取订单列表
 *   获取订单列表
 * @tags 小程序.订单
 * @x-apifox-folder "小程序.订单"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118836-run"
 */
export const postApiV1AppletOrderList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/order/list";
  function request(
    option: PostApiV1AppletOrderListOption
  ): Promise<PostApiV1AppletOrderListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletOrderListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletOrderDetail */
export interface PostApiV1AppletOrderDetailOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletOrderDetail */
export interface PostApiV1AppletOrderDetailOption {
  body?: PostApiVAppletOrderDetail;
}

/** @description response type for postApiV1AppletOrderDetail */
export interface PostApiV1AppletOrderDetailResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletOrderDetailPostResponse;
}

export type PostApiV1AppletOrderDetailResponseSuccess =
  PostApiV1AppletOrderDetailResponse[200];
/**
 * @description
 *   获取订单详情
 *   获取订单详情
 * @tags 小程序.订单
 * @x-apifox-folder "小程序.订单"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118837-run"
 */
export const postApiV1AppletOrderDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/order/detail";
  function request(
    option: PostApiV1AppletOrderDetailOption
  ): Promise<PostApiV1AppletOrderDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletOrderDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletOrderModify */
export interface PostApiV1AppletOrderModifyOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletOrderModify */
export interface PostApiV1AppletOrderModifyOption {
  body?: PostApiVAppletOrderModify;
}

/** @description response type for postApiV1AppletOrderModify */
export interface PostApiV1AppletOrderModifyResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletOrderModifyPostResponse;
}

export type PostApiV1AppletOrderModifyResponseSuccess =
  PostApiV1AppletOrderModifyResponse[200];
/**
 * @description
 *   修改订单
 *   修改订单
 * @tags 小程序.订单
 * @x-apifox-folder "小程序.订单"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118838-run"
 */
export const postApiV1AppletOrderModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/order/modify";
  function request(
    option: PostApiV1AppletOrderModifyOption
  ): Promise<PostApiV1AppletOrderModifyResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletOrderModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletOrderHandle */
export interface PostApiV1AppletOrderHandleOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletOrderHandle */
export interface PostApiV1AppletOrderHandleOption {
  body?: PostApiVAppletOrderHandle;
}

/** @description response type for postApiV1AppletOrderHandle */
export interface PostApiV1AppletOrderHandleResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletOrderHandlePostResponse;
}

export type PostApiV1AppletOrderHandleResponseSuccess =
  PostApiV1AppletOrderHandleResponse[200];
/**
 * @description
 *   操作订单
 *   操作订单
 * @tags 小程序.订单
 * @x-apifox-folder "小程序.订单"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118839-run"
 */
export const postApiV1AppletOrderHandle = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/order/handle";
  function request(
    option: PostApiV1AppletOrderHandleOption
  ): Promise<PostApiV1AppletOrderHandleResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletOrderHandleResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletOrderCancel */
export interface PostApiV1AppletOrderCancelOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletOrderCancel */
export interface PostApiV1AppletOrderCancelOption {
  body?: PostApiVAppletOrderCancel;
}

/** @description response type for postApiV1AppletOrderCancel */
export interface PostApiV1AppletOrderCancelResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletOrderCancelPostResponse;
}

export type PostApiV1AppletOrderCancelResponseSuccess =
  PostApiV1AppletOrderCancelResponse[200];
/**
 * @description
 *   取消订单
 *   取消订单
 * @tags 小程序.订单
 * @x-apifox-folder "小程序.订单"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118840-run"
 */
export const postApiV1AppletOrderCancel = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/order/cancel";
  function request(
    option: PostApiV1AppletOrderCancelOption
  ): Promise<PostApiV1AppletOrderCancelResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletOrderCancelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletOrderComplete */
export interface PostApiV1AppletOrderCompleteOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletOrderComplete */
export interface PostApiV1AppletOrderCompleteOption {
  body?: PostApiVAppletOrderComplete;
}

/** @description response type for postApiV1AppletOrderComplete */
export interface PostApiV1AppletOrderCompleteResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletOrderCompletePostResponse;
}

export type PostApiV1AppletOrderCompleteResponseSuccess =
  PostApiV1AppletOrderCompleteResponse[200];
/**
 * @description
 *   确认订单
 *   确认订单
 * @tags 小程序.订单
 * @x-apifox-folder "小程序.订单"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118841-run"
 */
export const postApiV1AppletOrderComplete = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/order/complete";
  function request(
    option: PostApiV1AppletOrderCompleteOption
  ): Promise<PostApiV1AppletOrderCompleteResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletOrderCompleteResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletProductList */
export interface PostApiV1AppletProductListOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header?: {
    /**
        @description
          Token
        @example
           */
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AppletProductList */
export interface PostApiV1AppletProductListOption {
  body?: PostApiVAppletProductList;
}

/** @description response type for postApiV1AppletProductList */
export interface PostApiV1AppletProductListResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletProductListPostResponse;
}

export type PostApiV1AppletProductListResponseSuccess =
  PostApiV1AppletProductListResponse[200];
/**
 * @description
 *   获取商品列表
 *   获取商品列表
 * @tags 小程序.商品
 * @x-apifox-folder "小程序.商品"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118842-run"
 */
export const postApiV1AppletProductList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/product/list";
  function request(
    option?: PostApiV1AppletProductListOption
  ): Promise<PostApiV1AppletProductListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletProductListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletProductDetail */
export interface PostApiV1AppletProductDetailOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header?: {
    /**
        @description
          Token
        @example
           */
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AppletProductDetail */
export interface PostApiV1AppletProductDetailOption {
  body?: PostApiVAppletProductDetail;
}

/** @description response type for postApiV1AppletProductDetail */
export interface PostApiV1AppletProductDetailResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletProductDetailPostResponse;
}

export type PostApiV1AppletProductDetailResponseSuccess =
  PostApiV1AppletProductDetailResponse[200];
/**
 * @description
 *   获取商品详情
 *   获取商品详情
 * @tags 小程序.商品
 * @x-apifox-folder "小程序.商品"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118843-run"
 */
export const postApiV1AppletProductDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/product/detail";
  function request(
    option?: PostApiV1AppletProductDetailOption
  ): Promise<PostApiV1AppletProductDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletProductDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletProductCategoryList */
export interface PostApiV1AppletProductCategoryListOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header?: {
    /**
        @description
          Token
        @example
           */
    Authorization?: string;
  };
}

/** @description response type for postApiV1AppletProductCategoryList */
export interface PostApiV1AppletProductCategoryListResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletProductCategoryListPostResponse;
}

export type PostApiV1AppletProductCategoryListResponseSuccess =
  PostApiV1AppletProductCategoryListResponse[200];
/**
 * @description
 *   列表
 *   列表
 * @tags 小程序.分类
 * @x-apifox-folder "小程序.分类"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118844-run"
 */
export const postApiV1AppletProductCategoryList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/product/category/list";
  function request(
    option?: PostApiV1AppletProductCategoryListOption
  ): Promise<PostApiV1AppletProductCategoryListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletProductCategoryListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletProductCategoryChildren */
export interface PostApiV1AppletProductCategoryChildrenOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header?: {
    /**
        @description
          Token
        @example
           */
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AppletProductCategoryChildren */
export interface PostApiV1AppletProductCategoryChildrenOption {
  body?: PostApiVAppletProductCategoryChildren;
}

/** @description response type for postApiV1AppletProductCategoryChildren */
export interface PostApiV1AppletProductCategoryChildrenResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletProductCategoryChildrenPostResponse;
}

export type PostApiV1AppletProductCategoryChildrenResponseSuccess =
  PostApiV1AppletProductCategoryChildrenResponse[200];
/**
 * @description
 *   二级分类
 *   二级分类
 * @tags 小程序.分类
 * @x-apifox-folder "小程序.分类"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118845-run"
 */
export const postApiV1AppletProductCategoryChildren = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/product/category/children";
  function request(
    option?: PostApiV1AppletProductCategoryChildrenOption
  ): Promise<PostApiV1AppletProductCategoryChildrenResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletProductCategoryChildrenResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletProductCategoryBanner */
export interface PostApiV1AppletProductCategoryBannerOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header?: {
    /**
        @description
          Token
        @example
           */
    Authorization?: string;
  };
}

/** @description response type for postApiV1AppletProductCategoryBanner */
export interface PostApiV1AppletProductCategoryBannerResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletProductCategoryBannerPostResponse;
}

export type PostApiV1AppletProductCategoryBannerResponseSuccess =
  PostApiV1AppletProductCategoryBannerResponse[200];
/**
 * @description
 *   banner
 *   banner
 * @tags 小程序.分类
 * @x-apifox-folder "小程序.分类"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118846-run"
 */
export const postApiV1AppletProductCategoryBanner = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/product/category/banner";
  function request(
    option?: PostApiV1AppletProductCategoryBannerOption
  ): Promise<PostApiV1AppletProductCategoryBannerResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletProductCategoryBannerResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletProductCategoryCoupon */
export interface PostApiV1AppletProductCategoryCouponOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header?: {
    /**
        @description
          Token
        @example
           */
    Authorization?: string;
  };
}

/** @description response type for postApiV1AppletProductCategoryCoupon */
export interface PostApiV1AppletProductCategoryCouponResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletProductCategoryCouponPostResponse;
}

export type PostApiV1AppletProductCategoryCouponResponseSuccess =
  PostApiV1AppletProductCategoryCouponResponse[200];
/**
 * @description
 *   优惠券
 *   优惠券
 * @tags 小程序.分类
 * @x-apifox-folder "小程序.分类"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118847-run"
 */
export const postApiV1AppletProductCategoryCoupon = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/product/category/coupon";
  function request(
    option?: PostApiV1AppletProductCategoryCouponOption
  ): Promise<PostApiV1AppletProductCategoryCouponResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletProductCategoryCouponResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletHome */
export interface PostApiV1AppletHomeOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header?: {
    /**
        @description
          Token
        @example
           */
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AppletHome */
export interface PostApiV1AppletHomeOption {
  body?: PostApiVAppletHome;
}

/** @description response type for postApiV1AppletHome */
export interface PostApiV1AppletHomeResponse {
  /**
   * @description
   *   成功
   */
  200: {
    code: number;
    msg: string;
    data: {
      top_banner: {
        total: number;
        list: Array<{
          type?: number;
          image?: string;
          path?: string;
          attach?: string;
          type_msg?: string;
        }>;
      };
      middle_banner: {
        total: number;
        list: Array<string>;
      };
      active: Array<string>;
      active_two: Array<string>;
      category: {
        total: number;
        list: Array<{
          category_id: string;
          category_name: string;
          image: string;
        }>;
      };
      notice: {
        total: number;
        list: Array<{
          notice_id?: string;
          content?: string;
          create_at?: string;
        }>;
      };
    };
  };
}

export type PostApiV1AppletHomeResponseSuccess =
  PostApiV1AppletHomeResponse[200];
/**
 * @description
 *   首页
 *   首页
 * @tags 小程序.首页
 * @x-apifox-folder "小程序.首页"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118848-run"
 */
export const postApiV1AppletHome = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/home";
  function request(
    option?: PostApiV1AppletHomeOption
  ): Promise<PostApiV1AppletHomeResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletHomeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletTradePreview */
export interface PostApiV1AppletTradePreviewOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
    /**
        @description
        @example
           */
    "x-test-user": string;
  };
}

/** @description request parameter type for postApiV1AppletTradePreview */
export interface PostApiV1AppletTradePreviewOption {
  body?: PostApiVAppletTradePreview;
}

/** @description response type for postApiV1AppletTradePreview */
export interface PostApiV1AppletTradePreviewResponse {
  /**
   * @description
   *   请求成功
   */
  200: {};
}

export type PostApiV1AppletTradePreviewResponseSuccess =
  PostApiV1AppletTradePreviewResponse[200];
/**
 * @description
 *   预下单
 *   /api/v1/applet/trade/preview
 * @tags 小程序.交易
 * @x-apifox-folder "小程序.交易"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118870-run"
 */
export const postApiV1AppletTradePreview = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/trade/preview";
  function request(
    option: PostApiV1AppletTradePreviewOption
  ): Promise<PostApiV1AppletTradePreviewResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletTradePreviewResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletTradeMake */
export interface PostApiV1AppletTradeMakeOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletTradeMake */
export interface PostApiV1AppletTradeMakeOption {
  body?: PostApiVAppletTradeMake;
}

/** @description response type for postApiV1AppletTradeMake */
export interface PostApiV1AppletTradeMakeResponse {
  /**
   * @description
   *   请求成功
   */
  200: {};
}

export type PostApiV1AppletTradeMakeResponseSuccess =
  PostApiV1AppletTradeMakeResponse[200];
/**
 * @description
 *   下单
 *   /api/v1/applet/trade/make
 * @tags 小程序.交易
 * @x-apifox-folder "小程序.交易"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118871-run"
 */
export const postApiV1AppletTradeMake = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/trade/make";
  function request(
    option: PostApiV1AppletTradeMakeOption
  ): Promise<PostApiV1AppletTradeMakeResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletTradeMakeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletTradePay */
export interface PostApiV1AppletTradePayOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletTradePay */
export interface PostApiV1AppletTradePayOption {
  body?: PostApiVAppletTradePay;
}

/** @description response type for postApiV1AppletTradePay */
export interface PostApiV1AppletTradePayResponse {
  /**
   * @description
   *   请求成功
   */
  200: {};
}

export type PostApiV1AppletTradePayResponseSuccess =
  PostApiV1AppletTradePayResponse[200];
/**
 * @description
 *   发起支付
 *   /api/v1/applet/trade/pay
 * @tags 小程序.交易
 * @x-apifox-folder "小程序.交易"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118872-run"
 */
export const postApiV1AppletTradePay = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/trade/pay";
  function request(
    option: PostApiV1AppletTradePayOption
  ): Promise<PostApiV1AppletTradePayResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletTradePayResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletWechatCode2Session */
export interface PostApiV1AppletWechatCode2SessionOption {
  body?: PostApiVAppletWechatCodeSession;
}

/** @description response type for postApiV1AppletWechatCode2Session */
export interface PostApiV1AppletWechatCode2SessionResponse {
  /**
   * @description
   *   绑定成功
   */
  200: ApiVAppletWechatCodeSessionPostResponse;
}

export type PostApiV1AppletWechatCode2SessionResponseSuccess =
  PostApiV1AppletWechatCode2SessionResponse[200];
/**
 * @description
 *   根据code获取会话信息
 *   /api/v1/applet/wechat/code2session
 * @tags 小程序.微信接口
 * @x-apifox-folder "小程序.微信接口"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118873-run"
 */
export const postApiV1AppletWechatCode2Session = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/wechat/code2session";
  function request(
    option?: PostApiV1AppletWechatCode2SessionOption
  ): Promise<PostApiV1AppletWechatCode2SessionResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletWechatCode2SessionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletWechatMobile */
export interface PostApiV1AppletWechatMobileOption {
  body?: PostApiVAppletWechatMobile;
}

/** @description response type for postApiV1AppletWechatMobile */
export interface PostApiV1AppletWechatMobileResponse {
  /**
   * @description
   *   绑定成功
   */
  200: ApiVAppletWechatMobilePostResponse;
}

export type PostApiV1AppletWechatMobileResponseSuccess =
  PostApiV1AppletWechatMobileResponse[200];
/**
 * @description
 *   根据code获取会话信息
 *   /api/v1/applet/wechat/mobile
 * @tags 小程序.微信接口
 * @x-apifox-folder "小程序.微信接口"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118874-run"
 */
export const postApiV1AppletWechatMobile = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/wechat/mobile";
  function request(
    option?: PostApiV1AppletWechatMobileOption
  ): Promise<PostApiV1AppletWechatMobileResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletWechatMobileResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserAddressList */
export interface PostApiV1AppletUserAddressListOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserAddressList */
export interface PostApiV1AppletUserAddressListOption {
  body?: PostApiVAppletUserAddressList;
}

/** @description response type for postApiV1AppletUserAddressList */
export interface PostApiV1AppletUserAddressListResponse {
  /**
   * @description
   *   请求成功
   */
  200: ApiVAppletUserAddressListPostResponse;
}

export type PostApiV1AppletUserAddressListResponseSuccess =
  PostApiV1AppletUserAddressListResponse[200];
/**
 * @description
 *   获取收货地址列表
 *   /api/v1/applet/user/address/list
 * @tags 小程序.用户收货地址
 * @x-apifox-folder "小程序.用户收货地址"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118893-run"
 */
export const postApiV1AppletUserAddressList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/address/list";
  function request(
    option: PostApiV1AppletUserAddressListOption
  ): Promise<PostApiV1AppletUserAddressListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserAddressListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserAddressCreate */
export interface PostApiV1AppletUserAddressCreateOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserAddressCreate */
export interface PostApiV1AppletUserAddressCreateOption {
  body?: PostApiVAppletUserAddressCreate;
}

/** @description response type for postApiV1AppletUserAddressCreate */
export interface PostApiV1AppletUserAddressCreateResponse {
  /**
   * @description
   *   请求成功
   */
  200: ApiVAppletUserAddressCreatePostResponse;
}

export type PostApiV1AppletUserAddressCreateResponseSuccess =
  PostApiV1AppletUserAddressCreateResponse[200];
/**
 * @description
 *   创建收货地址
 *   /api/v1/applet/user/address/create
 * @tags 小程序.用户收货地址
 * @x-apifox-folder "小程序.用户收货地址"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118894-run"
 */
export const postApiV1AppletUserAddressCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/address/create";
  function request(
    option: PostApiV1AppletUserAddressCreateOption
  ): Promise<PostApiV1AppletUserAddressCreateResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserAddressCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserAddressEdit */
export interface PostApiV1AppletUserAddressEditOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserAddressEdit */
export interface PostApiV1AppletUserAddressEditOption {
  body?: PostApiVAppletUserAddressEdit;
}

/** @description response type for postApiV1AppletUserAddressEdit */
export interface PostApiV1AppletUserAddressEditResponse {
  /**
   * @description
   *   请求成功
   */
  200: ApiVAppletUserAddressEditPostResponse;
}

export type PostApiV1AppletUserAddressEditResponseSuccess =
  PostApiV1AppletUserAddressEditResponse[200];
/**
 * @description
 *   编辑收货地址
 *   /api/v1/applet/user/address/edit
 * @tags 小程序.用户收货地址
 * @x-apifox-folder "小程序.用户收货地址"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118895-run"
 */
export const postApiV1AppletUserAddressEdit = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/address/edit";
  function request(
    option: PostApiV1AppletUserAddressEditOption
  ): Promise<PostApiV1AppletUserAddressEditResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserAddressEditResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserAddressRemove */
export interface PostApiV1AppletUserAddressRemoveOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserAddressRemove */
export interface PostApiV1AppletUserAddressRemoveOption {
  body?: PostApiVAppletUserAddressRemove;
}

/** @description response type for postApiV1AppletUserAddressRemove */
export interface PostApiV1AppletUserAddressRemoveResponse {
  /**
   * @description
   *   请求成功
   */
  200: ApiVAppletUserAddressRemovePostResponse;
}

export type PostApiV1AppletUserAddressRemoveResponseSuccess =
  PostApiV1AppletUserAddressRemoveResponse[200];
/**
 * @description
 *   删除商品分类
 *   /api/v1/applet/user/address/remove
 * @tags 小程序.用户收货地址
 * @x-apifox-folder "小程序.用户收货地址"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118896-run"
 */
export const postApiV1AppletUserAddressRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/address/remove";
  function request(
    option: PostApiV1AppletUserAddressRemoveOption
  ): Promise<PostApiV1AppletUserAddressRemoveResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserAddressRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserAddressDefault */
export interface PostApiV1AppletUserAddressDefaultOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserAddressDefault */
export interface PostApiV1AppletUserAddressDefaultOption {
  body?: PostApiVAppletUserAddressDefault;
}

/** @description response type for postApiV1AppletUserAddressDefault */
export interface PostApiV1AppletUserAddressDefaultResponse {
  /**
   * @description
   *   请求成功
   */
  200: ApiVAppletUserAddressDefaultPostResponse;
}

export type PostApiV1AppletUserAddressDefaultResponseSuccess =
  PostApiV1AppletUserAddressDefaultResponse[200];
/**
 * @description
 *   获取默认收货地址
 *   /api/v1/applet/user/address/default
 * @tags 小程序.用户收货地址
 * @x-apifox-folder "小程序.用户收货地址"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118897-run"
 */
export const postApiV1AppletUserAddressDefault = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/address/default";
  function request(
    option: PostApiV1AppletUserAddressDefaultOption
  ): Promise<PostApiV1AppletUserAddressDefaultResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserAddressDefaultResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserAddressLocation */
export interface PostApiV1AppletUserAddressLocationOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserAddressLocation */
export interface PostApiV1AppletUserAddressLocationOption {
  body?: PostApiVAppletUserAddressLocation;
}

/** @description response type for postApiV1AppletUserAddressLocation */
export interface PostApiV1AppletUserAddressLocationResponse {
  /**
   * @description
   *   请求成功
   */
  200: ApiVAppletUserAddressLocationPostResponse;
}

export type PostApiV1AppletUserAddressLocationResponseSuccess =
  PostApiV1AppletUserAddressLocationResponse[200];
/**
 * @description
 *   通过经纬度获得省市区
 *   /api/v1/applet/user/address/location
 * @tags 小程序.用户收货地址
 * @x-apifox-folder "小程序.用户收货地址"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118898-run"
 */
export const postApiV1AppletUserAddressLocation = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/address/location";
  function request(
    option: PostApiV1AppletUserAddressLocationOption
  ): Promise<PostApiV1AppletUserAddressLocationResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserAddressLocationResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserProfile */
export interface PostApiV1AppletUserProfileOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserProfile */
export interface PostApiV1AppletUserProfileOption {
  body?: PostApiVAppletUserProfile;
}

/** @description response type for postApiV1AppletUserProfile */
export interface PostApiV1AppletUserProfileResponse {
  /**
   * @description
   *   请求成功
   */
  200: ApiVAppletUserProfilePostResponse;
}

export type PostApiV1AppletUserProfileResponseSuccess =
  PostApiV1AppletUserProfileResponse[200];
/**
 * @description
 *   个人详情
 *   /api/v1/applet/user/profile
 * @tags 小程序.用户
 * @x-apifox-folder "小程序.用户"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118899-run"
 */
export const postApiV1AppletUserProfile = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/profile";
  function request(
    option: PostApiV1AppletUserProfileOption
  ): Promise<PostApiV1AppletUserProfileResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserProfileResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletUserEdit */
export interface PostApiV1AppletUserEditOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletUserEdit */
export interface PostApiV1AppletUserEditOption {
  body?: PostApiVAppletUserEdit;
}

/** @description response type for postApiV1AppletUserEdit */
export interface PostApiV1AppletUserEditResponse {
  /**
   * @description
   *   请求成功
   */
  200: ApiVAppletUserEditPostResponse;
}

export type PostApiV1AppletUserEditResponseSuccess =
  PostApiV1AppletUserEditResponse[200];
/**
 * @description
 *   编辑用户详情
 *   /api/v1/applet/user/edit
 * @tags 小程序.用户
 * @x-apifox-folder "小程序.用户"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118900-run"
 */
export const postApiV1AppletUserEdit = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/user/edit";
  function request(
    option: PostApiV1AppletUserEditOption
  ): Promise<PostApiV1AppletUserEditResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletUserEditResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletShopDetail */
export interface PostApiV1AppletShopDetailOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header?: {
    /**
        @description
          Token
        @example
           */
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AppletShopDetail */
export interface PostApiV1AppletShopDetailOption {
  body?: PostApiVAppletShopDetail;
}

/** @description response type for postApiV1AppletShopDetail */
export interface PostApiV1AppletShopDetailResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletShopDetailPostResponse;
}

export type PostApiV1AppletShopDetailResponseSuccess =
  PostApiV1AppletShopDetailResponse[200];
/**
 * @description
 *   门店信息
 *   门店信息
 * @tags 小程序.商家
 * @x-apifox-folder "小程序.商家"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118978-run"
 */
export const postApiV1AppletShopDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/shop/detail";
  function request(
    option?: PostApiV1AppletShopDetailOption
  ): Promise<PostApiV1AppletShopDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletShopDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AppletShopSettingList */
export interface PostApiV1AppletShopSettingListOption {
  /**
   * @description
   *   Token
   * @example
   *
   */
  header: {
    /**
        @description
          Token
        @example
           */
    Authorization: string;
  };
}

/** @description request parameter type for postApiV1AppletShopSettingList */
export interface PostApiV1AppletShopSettingListOption {
  body?: PostApiVAppletShopSettingList;
}

/** @description response type for postApiV1AppletShopSettingList */
export interface PostApiV1AppletShopSettingListResponse {
  /**
   * @description
   *   成功
   */
  200: ApiVAppletShopSettingListPostResponse;
}

export type PostApiV1AppletShopSettingListResponseSuccess =
  PostApiV1AppletShopSettingListResponse[200];
/**
 * @description
 *   获取门店设置列表
 *   获取门店设置列表
 * @tags 小程序.店铺.设置
 * @x-apifox-folder "小程序.店铺.设置"
 * @x-apifox-status "released"
 * @x-run-in-apifox' "https://www.apifox.cn/web/project/1979761/apis/api-51118987-run"
 */
export const postApiV1AppletShopSettingList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/applet/shop/setting/list";
  function request(
    option: PostApiV1AppletShopSettingListOption
  ): Promise<PostApiV1AppletShopSettingListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostApiV1AppletShopSettingListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();
