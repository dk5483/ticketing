import { Subjects, Publisher, OrderCancelledEvent } from '@dkgittix/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
