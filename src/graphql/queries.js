/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    user
    title
    orderNo
    products
    firstName
    lastName
    place
    street
    city
    state
    country
    language
    phone
    email
    total
    deliveryDT
    orderDT
    referrer
    status
    actualDeliveryDT
    deliverer
    notes
    entity
  }
}
`;
export const listOrders = `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user
      title
      orderNo
      products
      firstName
      lastName
      place
      street
      city
      state
      country
      language
      phone
      email
      total
      deliveryDT
      orderDT
      referrer
      status
      actualDeliveryDT
      deliverer
      notes
      entity
    }
    nextToken
  }
}
`;
