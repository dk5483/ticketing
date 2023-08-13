import { Publisher, OrderCreatedEvent, Subjects } from '@dkgittix/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
