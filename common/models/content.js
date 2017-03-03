'use strict';

module.exports = function(Content) {

  /**
   * Get the content for the customers
   */
  Content.customer = () => Promise.resolve('This is the Customer Content');

  /**
   * Get the content for the vendors
   */
  Content.vendor = () => Promise.resolve('This is the Vendor Content');

};
