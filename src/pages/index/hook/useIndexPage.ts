import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { useGetDeliveryPoints } from '@/utils/api';
import { useGetDeliveryPackageTypesQuery } from '@/utils/api/hooks/delivery/useGetDeliveryPackageTypesQuery';
import { ROUTE } from '@/utils/constants';

import { calcDeliverySchema } from '../constants/schema';

type CalcDeliverySchemaType = z.infer<typeof calcDeliverySchema>;

export const useIndexPage = () => {
  const deliveryPoints = useGetDeliveryPoints();
  const packageType = useGetDeliveryPackageTypesQuery();
  const navigate = useNavigate();

  const calculateForm = useForm<CalcDeliverySchemaType>({
    resolver: zodResolver(calcDeliverySchema)
  });

  const setPointCoordonates = (
    fieldName: keyof CalcDeliverySchemaType,
    deliveryPointId: string
  ) => {
    const point = deliveryPoints.data?.data.points.filter((point) => point.id === deliveryPointId);
    calculateForm.setValue(fieldName, {
      id: point![0].id,
      name: point![0].name,
      latitude: point![0].latitude,
      longitude: point![0].longitude
    });
  };

  const setPackageType = (fieldName: keyof CalcDeliverySchemaType, packageId: string) => {
    const pack = packageType.data?.data.packages.filter(
      (packageItem) => packageItem.id === packageId
    );

    calculateForm.setValue(fieldName, {
      width: pack![0].width,
      weight: pack![0].weight,
      height: pack![0].height,
      length: pack![0].length
    });
  };

  const onSubmit = (data: CalcDeliverySchemaType) => {
    navigate({
      to: ROUTE.ORDER,
      search: {
        package: { ...data.package },
        senderPoint: { ...data.senderPoint },
        receiverPoint: { ...data.receiverPoint }
      }
    }).catch(() => {});
  };

  return {
    state: { deliveryPoints, packageType, calculateForm },
    functions: { onSubmit, setPointCoordonates, setPackageType }
  };
};
