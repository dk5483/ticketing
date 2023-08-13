import { Subjects, Publisher, PaymentCreatedEvent } from '@dkgittix/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
