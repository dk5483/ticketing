import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@dkgittix/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
