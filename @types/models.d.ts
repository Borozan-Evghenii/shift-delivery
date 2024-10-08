import type { ProfileSchema } from '@/pages/profile/constants/schema';

type BaseResponse = {
  succes: boolean;
  reasone?: string;
};

type User = ProfileSchema;

// Delivery
type Payer = 'SENDER' | 'RECEIVER';

type DeliveryType = 'DEFAULT' | 'EXPRESS';

type Status = 0 | 1 | 2 | 3 | 4 | 5;

type DeliveryOrdersResponse = {
  orders: Order[];
} & BaseResponse;

type Order = { _id: string; created: string; updated: string } & DeliveryOrder;

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
    apartment: string;
    comment?: string;
  };
  sender: {
    phone: string;
    firstname: string;
    lastname: string;
    middlename?: string;
  };
  receiverPoint: {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
  };
  receiver: {
    phone: string;
    firstname: string;
    lastname: string;
    middlename?: string;
  };
  receiverAddress: {
    street: string;
    house: string;
    apartment: string;
    comment?: string;
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
    price: number;
    days: number;
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
