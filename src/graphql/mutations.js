/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
    id
    title
    orderNo
    products
    user
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
  }
}
`;
export const updateOrder = `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
    id
    title
    orderNo
    products
    user
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
  }
}
`;
export const deleteOrder = `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
    id
    title
    orderNo
    products
    user
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
  }
}
`;
