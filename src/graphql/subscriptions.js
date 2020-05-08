/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
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
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
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
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
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
export const onCreateEntity = `subscription OnCreateEntity {
  onCreateEntity {
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
export const onUpdateEntity = `subscription OnUpdateEntity {
  onUpdateEntity {
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
export const onDeleteEntity = `subscription OnDeleteEntity {
  onDeleteEntity {
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
