/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
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
    entity {
      id
      name
      place
      street
      city
      state
      country
      language
      phone
      email
      contact
    }
  }
}
`;
export const updateOrder = `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
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
    entity {
      id
      name
      place
      street
      city
      state
      country
      language
      phone
      email
      contact
    }
  }
}
`;
export const deleteOrder = `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
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
    entity {
      id
      name
      place
      street
      city
      state
      country
      language
      phone
      email
      contact
    }
  }
}
`;
export const createEntity = `mutation CreateEntity(
  $input: CreateEntityInput!
  $condition: ModelEntityConditionInput
) {
  createEntity(input: $input, condition: $condition) {
    id
    name
    place
    street
    city
    state
    country
    language
    phone
    email
    contact
    orders {
      nextToken
    }
  }
}
`;
export const updateEntity = `mutation UpdateEntity(
  $input: UpdateEntityInput!
  $condition: ModelEntityConditionInput
) {
  updateEntity(input: $input, condition: $condition) {
    id
    name
    place
    street
    city
    state
    country
    language
    phone
    email
    contact
    orders {
      nextToken
    }
  }
}
`;
export const deleteEntity = `mutation DeleteEntity(
  $input: DeleteEntityInput!
  $condition: ModelEntityConditionInput
) {
  deleteEntity(input: $input, condition: $condition) {
    id
    name
    place
    street
    city
    state
    country
    language
    phone
    email
    contact
    orders {
      nextToken
    }
  }
}
`;
