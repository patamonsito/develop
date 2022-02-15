'use strict';
const { UserSchema, USER_TABLE } = require('./../models/user.model');
const { ReferralSchema, REFERRAL_TABLE } = require('./../models/referral.model');
const { FavoriteSchema, FAVORITE_TABLE } = require('./../models/favorite.model');
const { OrderSchema, ORDER_TABLE } = require('./../models/order.model');
const { CouponSchema, COUPON_TABLE } = require('./../models/coupon.model');
const { CarSchema, CAR_TABLE } = require('./../models/car.model');
const { TicketSchema, TICKET_TABLE } = require('./../models/ticket.model');
const { Ticket_imgSchema, TICKET_IMG_TABLE } = require('./../models/ticket_img.model');
const { AddressSchema, ADDRESS_TABLE } = require('./../models/address.model');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');
const { Product_imgSchema, PRODUCT_IMG_TABLE } = require('./../models/product_img.model');
const { Model_carSchema, MODEL_CAR_TABLE } = require('./../models/model_car.model');
const { ReasonSchema, REASON_TABLE } = require('./../models/reason.model');
const { ReplySchema, REPLY_TABLE } = require('./../models/reply.model');
const { RegionSchema, REGION_TABLE } = require('./../models/region.model');
const { CommuneSchema, COMMUNE_TABLE } = require('./../models/commune.model');
const { FamilySchema, FAMILY_TABLE } = require('./../models/family.model');
const { CategorySchema, CATEGORY_TABLE } = require('./../models/category.model');
const { MenuSchema, MENU_TABLE } = require('./../models/menu.model');
const { SliderSchema, SLIDER_TABLE } = require('./../models/slider.model');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(REFERRAL_TABLE, ReferralSchema);
    await queryInterface.createTable(FAVORITE_TABLE, FavoriteSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
    await queryInterface.createTable(COUPON_TABLE, CouponSchema);
    await queryInterface.createTable(MODEL_CAR_TABLE, Model_carSchema);
    await queryInterface.createTable(CAR_TABLE, CarSchema);
    await queryInterface.createTable(TICKET_TABLE, TicketSchema);
    await queryInterface.createTable(TICKET_IMG_TABLE, Ticket_imgSchema);
    await queryInterface.createTable(ADDRESS_TABLE, AddressSchema);
    await queryInterface.createTable(PRODUCT_IMG_TABLE, Product_imgSchema);
    await queryInterface.createTable(REASON_TABLE, ReasonSchema);
    await queryInterface.createTable(REPLY_TABLE, ReplySchema);
    await queryInterface.createTable(REGION_TABLE, RegionSchema);
    await queryInterface.createTable(COMMUNE_TABLE, CommuneSchema);
    await queryInterface.createTable(FAMILY_TABLE, FamilySchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(MENU_TABLE, MenuSchema);
    await queryInterface.createTable(SLIDER_TABLE, SliderSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(REFERRAL_TABLE);
    await queryInterface.dropTable(FAVORITE_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(COUPON_TABLE);
    await queryInterface.dropTable(CAR_TABLE);
    await queryInterface.dropTable(TICKET_TABLE);
    await queryInterface.dropTable(TICKET_IMG_TABLE);
    await queryInterface.dropTable(ADDRESS_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(PRODUCT_IMG_TABLE);
    await queryInterface.dropTable(MODEL_CAR_TABLE);
    await queryInterface.dropTable(REASON_TABLE);
    await queryInterface.dropTable(REPLY_TABLE);
    await queryInterface.dropTable(REGION_TABLE);
    await queryInterface.dropTable(COMMUNE_TABLE);
    await queryInterface.dropTable(FAMILY_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(MENU_TABLE);
    await queryInterface.dropTable(SLIDER_TABLE);
  }
};
