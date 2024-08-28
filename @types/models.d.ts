type BaseResponse = {
  succes: boolean;
  reasone?: string;
};

type User = {
  phone: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  email?: string;
  city?: string;
};

// Delivery
enum Payer {
  RECEIVER,
  SENDER
}

type DeliveryType = 'DEFAULT' | 'EXPRESS';

enum Status {
  0,
  1,
  2,
  3,
  4
}

type DeliveryOrdersResponse = {
  orders: DeliveryOrder;
} & BaseResponse;

type DeliveryOrder = {
  senderPoint: {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
  };
  senderAddress: {
    street: string;
    house: string;
    apartament: number;
    comment: string;
  };
  sender: {
    phone: string;
    firstname: string;
    lastname: string;
    middlename: string;
  };
  receiverPoint: {
    street: string;
    house: string;
    apartament: number;
    comment: string;
  };
  receiver: {
    phone: string;
    firstname: string;
    lastname: string;
    middlename: string;
  };
  payer: Payer;
  status: Status;
  cancellable: boolean;
};

type DeliveryOrderResponse = {
  order: DeliveryOrder;
} & BaseResponse;

type DeliveryPointsResponse = {
  points: DeliveryPoint[];
} & BaseResponse;

type DeliveryPoint = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

type CancelDeliveryOrderDto = {
  orderId: string;
};

type DeliveryPackageTypesResponse = {
  packages: DeliveryPackageTypes[];
} & BaseResponse;

type DeliveryPackageTypes = {
  id: string;
  name: string;
  length: number;
  weight: number;
  height: number;
  width: number;
};

type CalculateDeliveryDto = {
  package: {
    length: number;
    weight: number;
    width: number;
    height: number;
  };
  senderPoint: {
    latitude: number;
    longitude: number;
  };
  receiverPoint: {
    latitude: number;
    longitude: number;
  };
};

type DeliverResponse = {
  order: DeliveryOrder;
} & BaseResponse;

type CreateDeliveryOrderDto = {
  option: {
    id: string;
    price: string;
    days: string;
    name: string;
    type: string;
  };
} & Omit<DeliveryOrder, 'status' | 'cancellable'>;

type CalculateDeliveryResponse = { options: DeliveryOption[] } & BaseResponse;

export type DeliveryOption = {
  id: string;
  price: number;
  days: number;
  name: string;
  type: DeliveryType;
};
// Otp

type CreateOtpDto = {
  phone: string;
};

type OtpResponse = {
  retryDelay: number;
} & BaseResponse;

// Users Models

export type SessionResponse = {
  user: User;
} & BaseResponse;

type SignInDto = {
  phone: string;
  code: number;
};

type SignInResponse = {
  user: User;
  token: string;
} & BaseResponse;

type UpdateProfileDto = {
  profile: Omit<Required<User>, 'phone'>;
  phone: string;
};

type UpdateProfileResponse = {
  user: User;
} & BaseResponse;
