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
    address
    phone
    email
    total
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
    address
    phone
    email
    total
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
    address
    phone
    email
    total
  }
}
`;
