import {Injectable, Output, EventEmitter} from '@angular/core';


@Injectable()
export class CommunicationService {

	filterRequested = new EventEmitter();

	addedToOrderCart = new EventEmitter();
}