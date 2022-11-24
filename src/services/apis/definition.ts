/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */

export interface ModelObject {}

export type ModelArray = Array<string>;

export interface ApiVAppletShopSettingListPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletShopSettingList {
  /**
   * @description
   *   门店ID
   * @example
   *   string
   */
  shop_id: string;
  sort?: PostApiVAppletShopSettingListSort;
  page?: PostApiVAppletShopSettingListPage;
}

export interface PostApiVAppletShopSettingListPage {
  /**
   * @description
   *   是否返回全部结果
   * @example
   *   integer
   */
  all?: number;
  /**
   * @description
   *   是否返回总数
   * @example
   *   integer
   */
  total?: number;
  /**
   * @description
   *   页码
   * @example
   *   integer
   */
  page?: number;
  /**
   * @description
   *   每页个数
   * @example
   *   integer
   */
  page_size?: number;
}

export interface PostApiVAppletShopSettingListSort {
  /**
   * @description
   *   创建时间
   * @example
   *   string
   */
  create_at?: string;
}

export interface ApiVAppletShopDetailPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletShopDetail {
  /**
   * @description
   *   门店ID
   * @example
   *   string
   */
  shop_id: string;
}

export interface ApiVAppletUserEditPostResponse {
  /**
   * @description
   * @default 0
   * @example
   *   integer
   */
  code?: number;
  /**
   * @description
   * @default
   * @example
   *   string
   */
  msg?: string;
  data?: ApiVAppletUserEditPostResponseData;
}

export interface ApiVAppletUserEditPostResponseData {
  /**
   * @description
   * @default true
   * @example
   *   boolean
   */
  result?: boolean;
}

export interface PostApiVAppletUserEdit {
  data?: PostApiVAppletUserEditData;
}

export interface PostApiVAppletUserEditData {
  /**
   * @description
   *   头像地址
   * @example
   *   string
   */
  avatar?: string;
  /**
   * @description
   *   昵称
   * @example
   *   string
   */
  nickname?: string;
  /**
   * @description
   *   手机号
   * @example
   *   string
   */
  mobile?: string;
}

export interface ApiVAppletUserProfilePostResponse {
  /**
   * @description
   * @default 0
   * @example
   *   integer
   */
  code?: number;
  /**
   * @description
   * @default
   * @example
   *   string
   */
  msg?: string;
  data?: ApiVAppletUserProfilePostResponseData;
}

export interface ApiVAppletUserProfilePostResponseData {
  /**
   * @description
   * @default true
   * @example
   *   boolean
   */
  result?: boolean;
}

export interface PostApiVAppletUserProfile {
  /**
   * @description
   *   门店ID
   * @example
   *   string
   */
  shop_id: string;
}

export interface ApiVAppletUserAddressLocationPostResponse {
  /**
   * @description
   * @default 0
   * @example
   *   integer
   */
  code?: number;
  /**
   * @description
   * @default
   * @example
   *   string
   */
  msg?: string;
  data?: ApiVAppletUserAddressLocationPostResponseData;
}

export interface ApiVAppletUserAddressLocationPostResponseData {
  /**
   * @description
   * @default true
   * @example
   *   boolean
   */
  result?: boolean;
}

export interface PostApiVAppletUserAddressLocation {
  /**
   * @description
   *   经纬度
   * @example
   *   string
   */
  location: string;
}

export interface ApiVAppletUserAddressDefaultPostResponse {
  /**
   * @description
   * @default 0
   * @example
   *   integer
   */
  code?: number;
  /**
   * @description
   * @default
   * @example
   *   string
   */
  msg?: string;
  data?: ApiVAppletUserAddressDefaultPostResponseData;
}

export interface ApiVAppletUserAddressDefaultPostResponseData {
  /**
   * @description
   * @default true
   * @example
   *   boolean
   */
  result?: boolean;
}

export interface PostApiVAppletUserAddressDefault {
  condition?: PostApiVAppletUserAddressDefaultCondition;
}

export interface PostApiVAppletUserAddressDefaultCondition {
  /**
   * @description
   *   店铺id
   * @example
   *   string
   */
  shop_id?: string;
}

export interface ApiVAppletUserAddressRemovePostResponse {
  /**
   * @description
   * @default 0
   * @example
   *   integer
   */
  code?: number;
  /**
   * @description
   * @default
   * @example
   *   string
   */
  msg?: string;
  data?: ApiVAppletUserAddressRemovePostResponseData;
}

export interface ApiVAppletUserAddressRemovePostResponseData {
  /**
   * @description
   * @default true
   * @example
   *   boolean
   */
  result?: boolean;
}

export interface PostApiVAppletUserAddressRemove {
  /**
   * @description
   *   收货地址ID
   * @example
   *   string
   */
  address_id?: string;
}

export interface ApiVAppletUserAddressEditPostResponse {
  /**
   * @description
   * @default 0
   * @example
   *   integer
   */
  code?: number;
  /**
   * @description
   * @default
   * @example
   *   string
   */
  msg?: string;
  data?: ApiVAppletUserAddressEditPostResponseData;
}

export interface ApiVAppletUserAddressEditPostResponseData {
  /**
   * @description
   * @default true
   * @example
   *   boolean
   */
  result?: boolean;
}

export interface PostApiVAppletUserAddressEdit {
  /**
   * @description
   *   收货地址ID
   * @example
   *   string
   */
  address_id?: string;
  data?: PostApiVAppletUserAddressEditData;
}

export interface PostApiVAppletUserAddressEditData {
  /**
   * @description
   *   联系人姓名
   * @example
   *   string
   */
  contact_name?: string;
  /**
   * @description
   *   手机号
   * @example
   *   string
   */
  mobile?: string;
  /**
   * @description
   *   地址
   * @example
   *   string
   */
  address?: string;
  /**
   * @description
   *   门牌号
   * @example
   *   string
   */
  number?: string;
  location?: PostApiVAppletUserAddressEditDataLocation;
  /**
   * @description
   *   省
   * @example
   *   integer
   */
  province_id?: number;
  /**
   * @description
   *   市
   * @example
   *   integer
   */
  city_id?: number;
  /**
   * @description
   *   区
   * @example
   *   integer
   */
  area_id?: number;
  /**
   * @description
   *   标签
   * @example
   *   string
   */
  remark?: string;
  /**
   * @description
   *   是否默认地址
   * @example
   *   integer
   */
  is_default?: number;
}

export interface PostApiVAppletUserAddressEditDataLocation {
  /**
   * @description
   *   lat
   * @example
   *   string
   */
  lat?: string;
  /**
   * @description
   *   lng
   * @example
   *   string
   */
  lng?: string;
}

export interface ApiVAppletUserAddressCreatePostResponse {
  /**
   * @description
   * @default 0
   * @example
   *   integer
   */
  code?: number;
  /**
   * @description
   * @default
   * @example
   *   string
   */
  msg?: string;
  data?: ApiVAppletUserAddressCreatePostResponseData;
}

export interface ApiVAppletUserAddressCreatePostResponseData {
  /**
   * @description
   * @default true
   * @example
   *   boolean
   */
  result?: boolean;
}

export interface PostApiVAppletUserAddressCreate {
  data?: PostApiVAppletUserAddressCreateData;
}

export interface PostApiVAppletUserAddressCreateData {
  /**
   * @description
   *   联系人姓名
   * @example
   *   string
   */
  contact_name: string;
  /**
   * @description
   *   手机号
   * @example
   *   string
   */
  mobile: string;
  /**
   * @description
   *   地址
   * @example
   *   string
   */
  address: string;
  /**
   * @description
   *   门牌号
   * @example
   *   string
   */
  number: string;
  location?: PostApiVAppletUserAddressCreateDataLocation;
  /**
   * @description
   *   省
   * @example
   *   integer
   */
  province_id?: number;
  /**
   * @description
   *   市
   * @example
   *   integer
   */
  city_id?: number;
  /**
   * @description
   *   区
   * @example
   *   integer
   */
  area_id?: number;
  /**
   * @description
   *   标签
   * @example
   *   string
   */
  remark?: string;
  /**
   * @description
   *   是否默认地址
   * @example
   *   integer
   */
  is_default?: number;
}

export interface PostApiVAppletUserAddressCreateDataLocation {
  /**
   * @description
   *   lat
   * @example
   *   string
   */
  lat: string;
  /**
   * @description
   *   lng
   * @example
   *   string
   */
  lng: string;
}

export interface ApiVAppletUserAddressListPostResponse {
  /**
   * @description
   * @default 0
   * @example
   *   integer
   */
  code?: number;
  /**
   * @description
   * @default
   * @example
   *   string
   */
  msg?: string;
  data?: ApiVAppletUserAddressListPostResponseData;
}

export interface ApiVAppletUserAddressListPostResponseData {
  /**
   * @description
   * @default true
   * @example
   *   boolean
   */
  result?: boolean;
}

export interface PostApiVAppletUserAddressList {
  condition?: PostApiVAppletUserAddressListCondition;
}

export interface PostApiVAppletUserAddressListCondition {
  /**
   * @description
   *   店铺id
   * @example
   *   string
   */
  shop_id?: string;
}

export interface ApiVAppletWechatMobilePostResponse {
  /**
   * @description
   * @default 0
   * @example
   *   integer
   */
  code?: number;
  /**
   * @description
   * @default
   * @example
   *   string
   */
  msg?: string;
  data?: ApiVAppletWechatMobilePostResponseData;
}

export interface ApiVAppletWechatMobilePostResponseData {
  /**
   * @description
   * @default true
   * @example
   *   boolean
   */
  result?: boolean;
}

export interface PostApiVAppletWechatMobile {
  /**
   * @description
   *   微信授权数据
   * @example
   *   string
   */
  iv: string;
  /**
   * @description
   *   微信授权数据
   * @example
   *   string
   */
  encryptedData: string;
  /**
   * @description
   *   会话KEY
   * @example
   *   string
   */
  session_key: string;
}

export interface ApiVAppletWechatCodeSessionPostResponse {
  /**
   * @description
   * @default 0
   * @example
   *   integer
   */
  code?: number;
  /**
   * @description
   * @default
   * @example
   *   string
   */
  msg?: string;
  data?: ApiVAppletWechatCodeSessionPostResponseData;
}

export interface ApiVAppletWechatCodeSessionPostResponseData {
  /**
   * @description
   * @default true
   * @example
   *   boolean
   */
  result?: boolean;
}

export interface PostApiVAppletWechatCodeSession {
  /**
   * @description
   *   微信登录code
   * @example
   *   string
   */
  code: string;
}

export interface PostApiVAppletTradePay {
  /**
   * @description
   *   门店ID
   * @example
   *   string
   */
  shop_id: string;
  /**
   * @description
   *   订单ID
   * @example
   *   string
   */
  order_id: string;
  /**
   * @description
   *   类型
   * @example
   *   integer
   */
  type?: number;
}

export interface PostApiVAppletTradeMake {
  /**
   * @description
   *   门店ID
   * @example
   *   string
   */
  shop_id: string;
  config?: PostApiVAppletTradeMakeConfig;
  /**
   * @description
   *   商品列表
   */
  sku_items?: Array<PostApiVAppletTradeMakeSkuItems>;
  self_mention?: PostApiVAppletTradeMakeSelfMention;
  /**
   * @description
   *   订单备注
   * @example
   *   string
   */
  remark?: string;
}

export interface PostApiVAppletTradeMakeSelfMention {
  /**
   * @description
   *   姓名
   * @example
   *   string
   */
  name?: string;
  /**
   * @description
   *   手机
   * @example
   *   string
   */
  mobile?: string;
  /**
   * @description
   *   提货时间
   * @example
   *   integer
   */
  date?: number;
}

export interface PostApiVAppletTradeMakeSkuItems {
  /**
   * @description
   *   SKU ID
   * @example
   *   string
   */
  sku_id: string;
  /**
   * @description
   *   数量
   * @example
   *   integer
   */
  count?: number;
}

export interface PostApiVAppletTradeMakeConfig {
  /**
   * @description
   *   配送方式
   * @example
   *   integer
   */
  delivery_type?: number;
  /**
   * @description
   *   支付类型
   * @example
   *   integer
   */
  pay_type?: number;
  /**
   * @description
   *   支付方式
   * @example
   *   integer
   */
  pay_method?: number;
  /**
   * @description
   *   支付渠道
   * @example
   *   integer
   */
  pay_channel?: number;
  /**
   * @description
   *   用户地址ID
   * @example
   *   string
   */
  user_addressId?: string;
  /**
   * @description
   *   预配送时间
   * @example
   *   integer
   */
  pre_delivery_at?: number;
  /**
   * @description
   *   预自提时间
   * @example
   *   integer
   */
  pre_pick_up_at?: number;
  /**
   * @description
   *   预出品时间
   * @example
   *   integer
   */
  pre_make_at?: number;
}

export interface PostApiVAppletTradePreview {
  /**
   * @description
   *   门店ID
   * @example
   *   string
   */
  shop_id: string;
  config?: PostApiVAppletTradePreviewConfig;
  /**
   * @description
   *   商品列表
   */
  sku_items?: Array<PostApiVAppletTradePreviewSkuItems>;
}

export interface PostApiVAppletTradePreviewSkuItems {
  /**
   * @description
   *   SKU ID
   * @example
   *   string
   */
  sku_id: string;
  /**
   * @description
   *   数量
   * @example
   *   integer
   */
  count?: number;
}

export interface PostApiVAppletTradePreviewConfig {
  /**
   * @description
   *   配送方式
   * @example
   *   integer
   */
  delivery_type?: number;
  /**
   * @description
   *   支付类型
   * @example
   *   integer
   */
  pay_type?: number;
  /**
   * @description
   *   支付方式
   * @example
   *   integer
   */
  pay_method?: number;
  /**
   * @description
   *   支付渠道
   * @example
   *   integer
   */
  pay_channel?: number;
  /**
   * @description
   *   用户地址ID
   * @example
   *   string
   */
  user_address_id?: string;
  /**
   * @description
   *   预配送时间
   * @example
   *   integer
   */
  pre_delivery_at?: number;
  /**
   * @description
   *   预自提时间
   * @example
   *   integer
   */
  pre_pick_up_at?: number;
  /**
   * @description
   *   预出品时间
   * @example
   *   integer
   */
  pre_make_at?: number;
}

export interface PostApiVAppletHome {
  search?: PostApiVAppletHomeSearch;
}

export interface PostApiVAppletHomeSearch {
  /**
   * @description
   *   门店id
   * @example
   *   string
   */
  shop_id: string;
}

export interface ApiVAppletProductCategoryCouponPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface ApiVAppletProductCategoryBannerPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface ApiVAppletProductCategoryChildrenPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletProductCategoryChildren {
  search?: PostApiVAppletProductCategoryChildrenSearch;
}

export interface PostApiVAppletProductCategoryChildrenSearch {
  /**
   * @description
   *   上级分类ID
   * @example
   *   string
   */
  pid: string;
}

export interface ApiVAppletProductCategoryListPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface ApiVAppletProductDetailPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletProductDetail {
  /**
   * @description
   *   商品ID
   * @example
   *   string
   */
  product_id: string;
  condition?: PostApiVAppletProductDetailCondition;
}

export interface PostApiVAppletProductDetailCondition {
  /**
   * @description
   *   是否关联商品详情数据
   * @example
   *   integer
   */
  product_detail?: number;
  /**
   * @description
   *   是否关联商品图片数据
   * @example
   *   integer
   */
  product_images?: number;
  /**
   * @description
   *   是否关联商品标签数据
   * @example
   *   integer
   */
  product_tags?: number;
  /**
   * @description
   *   是否关商品联规格数据
   * @example
   *   integer
   */
  product_specs?: number;
  /**
   * @description
   *   是否关商品sku数据
   * @example
   *   integer
   */
  product_skus?: number;
  /**
   * @description
   *   是否为统一价格
   * @example
   *   integer
   */
  product_setting?: number;
}

export interface ApiVAppletProductListPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletProductList {
  condition?: PostApiVAppletProductListCondition;
  search?: PostApiVAppletProductListSearch;
  sort?: PostApiVAppletProductListSort;
  page?: PostApiVAppletProductListPage;
}

export interface PostApiVAppletProductListPage {
  /**
   * @description
   *   是否返回全部结果
   * @example
   *   integer
   */
  all?: number;
  /**
   * @description
   *   是否返回总数
   * @example
   *   integer
   */
  total?: number;
  /**
   * @description
   *   页码
   * @example
   *   integer
   */
  page?: number;
  /**
   * @description
   *   每页个数
   * @example
   *   integer
   */
  page_size?: number;
}

export interface PostApiVAppletProductListSort {
  /**
   * @description
   *   创建时间
   * @example
   *   string
   */
  create_at?: string;
  /**
   * @description
   *   价格
   * @example
   *   string
   */
  discount_price?: string;
  /**
   * @description
   *   销量
   * @example
   *   string
   */
  sale?: string;
  /**
   * @description
   *   推荐
   * @example
   *   string
   */
  recommend?: string;
  /**
   * @description
   *   库存
   * @example
   *   string
   */
  product_stock?: string;
}

export interface PostApiVAppletProductListSearch {
  /**
   * @description
   *   分类ID
   * @example
   *   string
   */
  category_id?: string;
  /**
   * @description
   *   模糊搜索
   * @example
   *   string
   */
  search?: string;
}

export interface PostApiVAppletProductListCondition {
  /**
   * @description
   *   是否关联月销量数据
   * @example
   *   integer
   */
  with_month_sale?: number;
  /**
   * @description
   *   是否关联标签数据
   * @example
   *   integer
   */
  with_tag?: number;
  /**
   * @description
   *   是否关联优惠券数据
   * @example
   *   integer
   */
  with_coupon?: number;
}

export interface ApiVAppletOrderCompletePostResponse {
  /**
   * @description
   *   code
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletOrderComplete {
  /**
   * @description
   *   订单ID
   * @example
   *   string
   */
  order_id: string;
}

export interface ApiVAppletOrderCancelPostResponse {
  /**
   * @description
   *   code
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletOrderCancel {
  /**
   * @description
   *   订单ID
   * @example
   *   string
   */
  order_id: string;
}

export interface ApiVAppletOrderHandlePostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletOrderHandle {
  /**
   * @description
   *   订单ID
   * @example
   *   string
   */
  order_id: string;
  /**
   * @description
   *   操作
   * @example
   *   integer
   */
  action?: number;
  params?: ModelArray;
}

export interface ApiVAppletOrderModifyPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: {};
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletOrderModify {
  /**
   * @description
   *   订单ID
   * @example
   *   string
   */
  order_id: string;
}

export interface ApiVAppletOrderDetailPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletOrderDetail {
  /**
   * @description
   *   订单ID
   * @example
   *   string
   */
  order_id: string;
  condition?: PostApiVAppletOrderDetailCondition;
}

export interface PostApiVAppletOrderDetailCondition {
  /**
   * @description
   *   是否关联订单详情
   * @example
   *   integer
   */
  with_order_detail?: number;
  /**
   * @description
   *   是否关联优惠明细
   * @example
   *   integer
   */
  with_order_discount?: number;
  /**
   * @description
   *   是否关联费用明细
   * @example
   *   integer
   */
  with_order_fee?: number;
  /**
   * @description
   *   是否关联地址数据
   * @example
   *   integer
   */
  with_order_address?: number;
  /**
   * @description
   *   是否关联核销码数据
   * @example
   *   integer
   */
  with_order_code?: number;
  /**
   * @description
   *   是否关联自提数据
   * @example
   *   integer
   */
  with_order_self_mention?: number;
  /**
   * @description
   *   是否关联门店数据
   * @example
   *   integer
   */
  with_shop?: number;
  /**
   * @description
   *   是否关联支付订单
   * @example
   *   integer
   */
  with_pay_order?: number;
}

export interface ApiVAppletOrderListPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletOrderList {
  condition?: PostApiVAppletOrderListCondition;
  search?: PostApiVAppletOrderListSearch;
  sort?: PostApiVAppletOrderListSort;
  page?: PostApiVAppletOrderListPage;
}

export interface PostApiVAppletOrderListPage {
  /**
   * @description
   *   是否返回全部结果
   * @example
   *   integer
   */
  all?: number;
  /**
   * @description
   *   是否返回总数
   * @example
   *   integer
   */
  total?: number;
  /**
   * @description
   *   页码
   * @example
   *   integer
   */
  page?: number;
  /**
   * @description
   *   每页个数
   * @example
   *   integer
   */
  page_size?: number;
}

export interface PostApiVAppletOrderListSort {
  /**
   * @description
   *   创建时间
   * @example
   *   string
   */
  create_at?: string;
}

export interface PostApiVAppletOrderListSearch {
  /**
   * @description
   *   门店ID
   * @example
   *   string
   */
  shop_id: string;
  /**
   * @description
   *   订单状态
   * @example
   *   integer
   */
  user_status?: number;
  /**
   * @description
   *   配送类型
   * @example
   *   integer
   */
  delivery_type?: number;
}

export interface PostApiVAppletOrderListCondition {
  /**
   * @description
   *   关联订单明细
   * @example
   *   integer
   */
  with_order_detail?: number;
  /**
   * @description
   *   关联订单地址
   * @example
   *   integer
   */
  with_order_address?: number;
  /**
   * @description
   *   关联订单优惠明细
   * @example
   *   integer
   */
  with_order_discount?: number;
  /**
   * @description
   *   关联订单核销码
   * @example
   *   integer
   */
  with_order_code?: number;
  /**
   * @description
   *   关联订单附加费用明细
   * @example
   *   integer
   */
  with_order_fee?: number;
}

export interface ApiVAppletUserCartPricePostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletUserCartPrice {
  /**
   * @description
   *   门店ID
   * @example
   *   string
   */
  shop_id: string;
}

export interface ApiVAppletUserCartRemovePostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletUserCartRemove {
  user_cart_id?: ModelArray;
}

export interface ApiVAppletUserCartDetailPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletUserCartDetail {
  /**
   * @description
   *   购物车ID
   * @example
   *   string
   */
  user_cart_id: string;
}

export interface ApiVAppletUserCartModifyPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletUserCartModify {
  /**
   * @description
   *   购物车ID
   * @example
   *   string
   */
  user_cart_id: string;
  data?: PostApiVAppletUserCartModifyData;
}

export interface PostApiVAppletUserCartModifyData {
  /**
   * @description
   *   门店id
   * @example
   *   string
   */
  shop_id: string;
  /**
   * @description
   *   商品id
   * @example
   *   string
   */
  product_id?: string;
  /**
   * @description
   *   skuId
   * @example
   *   string
   */
  sku_id?: string;
  /**
   * @description
   *   商品数量
   * @example
   *   integer
   */
  product_count?: number;
}

export interface ApiVAppletUserCartCreatePostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletUserCartCreate {
  data?: PostApiVAppletUserCartCreateData;
}

export interface PostApiVAppletUserCartCreateData {
  /**
   * @description
   *   门店id
   * @example
   *   string
   */
  shop_id: string;
  /**
   * @description
   *   商品id
   * @example
   *   string
   */
  product_id: string;
  /**
   * @description
   *   skuId
   * @example
   *   string
   */
  sku_id: string;
  /**
   * @description
   *   商品数量
   * @example
   *   integer
   */
  product_count?: number;
}

export interface ApiVAppletUserCartListPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletUserCartList {
  search?: PostApiVAppletUserCartListSearch;
}

export interface PostApiVAppletUserCartListSearch {
  /**
   * @description
   *   门店ID
   * @example
   *   string
   */
  shop_id: string;
}

export interface ApiVAppletMockPostResponse {
  /**
   * @description
   * @default 0
   * @example
   *   integer
   */
  code?: number;
  /**
   * @description
   * @default
   * @example
   *   string
   */
  msg?: string;
  data?: ApiVAppletMockPostResponseData;
}

export interface ApiVAppletMockPostResponseData {
  /**
   * @description
   * @default true
   * @example
   *   boolean
   */
  result?: boolean;
}

export interface PostApiVAppletMock {
  /**
   * @description
   *   用户ID
   * @example
   *   string
   */
  user_id: string;
}

export interface ApiVAppletLoginPostResponse {
  /**
   * @description
   * @default 0
   * @example
   *   integer
   */
  code?: number;
  /**
   * @description
   * @default
   * @example
   *   string
   */
  msg?: string;
  data?: ApiVAppletLoginPostResponseData;
}

export interface ApiVAppletLoginPostResponseData {
  /**
   * @description
   * @default true
   * @example
   *   boolean
   */
  result?: boolean;
}

export interface PostApiVAppletLogin {
  /**
   * @description
   *   微信登录code
   * @example
   *   string
   */
  code: string;
  user_info?: PostApiVAppletLoginUserInfo;
}

export interface PostApiVAppletLoginUserInfo {
  /**
   * @description
   *   昵称
   * @example
   *   string
   */
  nickname?: string;
  /**
   * @description
   *   头像
   * @example
   *   string
   */
  avatar?: string;
  /**
   * @description
   *   手机号
   * @example
   *   string
   */
  mobile?: string;
}

export interface ApiVAppletNoticeListPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletNoticeList {
  search?: PostApiVAppletNoticeListSearch;
  page?: PostApiVAppletNoticeListPage;
}

export interface PostApiVAppletNoticeListPage {
  /**
   * @description
   *   是否返回全部结果
   * @example
   *   integer
   */
  all?: number;
  /**
   * @description
   *   是否返回总数
   * @example
   *   integer
   */
  total?: number;
  /**
   * @description
   *   页码
   * @example
   *   integer
   */
  page?: number;
  /**
   * @description
   *   每页个数
   * @example
   *   integer
   */
  page_size?: number;
}

export interface PostApiVAppletNoticeListSearch {
  /**
   * @description
   *   门店id
   * @example
   *   string
   */
  shop_id: string;
}

export interface ApiVAppletRechargeListPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletRechargeList {
  search?: PostApiVAppletRechargeListSearch;
  page?: PostApiVAppletRechargeListPage;
}

export interface PostApiVAppletRechargeListPage {
  /**
   * @description
   *   是否返回全部结果
   * @example
   *   integer
   */
  all?: number;
  /**
   * @description
   *   是否返回总数
   * @example
   *   integer
   */
  total?: number;
  /**
   * @description
   *   页码
   * @example
   *   integer
   */
  page?: number;
  /**
   * @description
   *   每页个数
   * @example
   *   integer
   */
  page_size?: number;
}

export interface PostApiVAppletRechargeListSearch {
  /**
   * @description
   *   门店id
   * @example
   *   string
   */
  shop_id: string;
}

export interface ApiVAppletOrderRechargeHandlePostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletOrderRechargeHandle {
  /**
   * @description
   *   订单ID
   * @example
   *   string
   */
  order_id: string;
  /**
   * @description
   *   操作
   * @example
   *   integer
   */
  action?: number;
  params?: ModelArray;
}

export interface ApiVAppletOrderRechargeDetailPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletOrderRechargeDetail {
  /**
   * @description
   *   订单ID
   * @example
   *   string
   */
  order_id: string;
}

export interface ApiVAppletOrderRechargeListPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletOrderRechargeList {
  search?: PostApiVAppletOrderRechargeListSearch;
  page?: PostApiVAppletOrderRechargeListPage;
}

export interface PostApiVAppletOrderRechargeListPage {
  /**
   * @description
   *   是否返回全部结果
   * @example
   *   integer
   */
  all?: number;
  /**
   * @description
   *   是否返回总数
   * @example
   *   integer
   */
  total?: number;
  /**
   * @description
   *   页码
   * @example
   *   integer
   */
  page?: number;
  /**
   * @description
   *   每页个数
   * @example
   *   integer
   */
  page_size?: number;
}

export interface PostApiVAppletOrderRechargeListSearch {
  /**
   * @description
   *   支付类型
   * @example
   *   integer
   */
  pay_type?: number;
  /**
   * @description
   *   门店id
   * @example
   *   string
   */
  shop_id: string;
}

export interface PostApiVAppletTradeRechargeMake {
  /**
   * @description
   *   门店ID
   * @example
   *   string
   */
  shop_id: string;
  /**
   * @description
   *   充值
   * @example
   *   integer
   */
  price?: number;
  /**
   * @description
   *   会员卡ID
   * @example
   *   integer
   */
  user_member_card_id?: number;
  /**
   * @description
   *   手机号
   * @example
   *   string
   */
  mobile?: string;
  config?: PostApiVAppletTradeRechargeMakeConfig;
  /**
   * @description
   *   备注
   * @example
   *   string
   */
  remark?: string;
}

export interface PostApiVAppletTradeRechargeMakeConfig {
  /**
   * @description
   *   支付类型
   * @example
   *   integer
   */
  pay_type?: number;
  /**
   * @description
   *   支付方式
   * @example
   *   integer
   */
  pay_method?: number;
  /**
   * @description
   *   支付渠道
   * @example
   *   integer
   */
  pay_channel?: number;
}

export interface ApiVAppletUserCardTakePostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletUserCardTake {
  /**
   * @description
   *   卡号ID
   * @example
   *   string
   */
  card_id: string;
  /**
   * @description
   *   门店ID
   * @example
   *   string
   */
  shop_id: string;
  /**
   * @description
   *   手机号
   * @example
   *   string
   */
  mobile: string;
}

export interface ApiVAppletUserCardDetailPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletUserCardDetail {
  /**
   * @description
   *   卡号ID
   * @example
   *   string
   */
  card_id: string;
}

export interface ApiVAppletUserCardRecordDetalPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletUserCardRecordDetal {
  /**
   * @description
   *   记录ID
   * @example
   *   string
   */
  user_member_card_record_id: string;
}

export interface ApiVAppletUserCardRecordListPostResponse {
  /**
   * @description
   *   code
   * @default 0
   * @example
   *   string
   */
  code?: string;
  result?: ModelObject;
  /**
   * @description
   *   message
   * @default Success
   * @example
   *   string
   */
  msg?: string;
}

export interface PostApiVAppletUserCardRecordList {
  condition?: PostApiVAppletUserCardRecordListCondition;
  search?: PostApiVAppletUserCardRecordListSearch;
  sort?: PostApiVAppletUserCardRecordListSort;
  page?: PostApiVAppletUserCardRecordListPage;
}

export interface PostApiVAppletUserCardRecordListPage {
  /**
   * @description
   *   是否返回全部结果
   * @example
   *   integer
   */
  all?: number;
  /**
   * @description
   *   是否返回总数
   * @example
   *   integer
   */
  total?: number;
  /**
   * @description
   *   页码
   * @example
   *   integer
   */
  page?: number;
  /**
   * @description
   *   每页个数
   * @example
   *   integer
   */
  page_size?: number;
}

export interface PostApiVAppletUserCardRecordListSort {
  /**
   * @description
   *   创建时间
   * @example
   *   string
   */
  create_at?: string;
}

export interface PostApiVAppletUserCardRecordListSearch {
  /**
   * @description
   *   手机号
   * @example
   *   string
   */
  mobile?: string;
  date?: PostApiVAppletUserCardRecordListSearchDate;
}

export interface PostApiVAppletUserCardRecordListSearchDate {
  /**
   * @description
   *   开始时间
   * @example
   *   integer
   */
  start?: number;
  /**
   * @description
   *   结束时间
   * @example
   *   integer
   */
  end?: number;
}

export interface PostApiVAppletUserCardRecordListCondition {
  /**
   * @description
   *   关联订单下单用户明细
   * @example
   *   integer
   */
  with_user?: number;
}
