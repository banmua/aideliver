/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      title
      orderNo
      products
      user
      address
      phone
      email
      total
      deliveryDT
      orderDT
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        orderNo
        products
        user
        address
        phone
        email
        total
        deliveryDT
        orderDT
      }
      nextToken
    }
  }
`;
