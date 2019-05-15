import { DATA_SET } from './../dataset';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AppointmentResolver implements Resolve<any> {

    constructor() {}

    resolve(route: ActivatedRouteSnapshot) {
        return DATA_SET.users.find((employee) => {
            return employee.id === +route.params.id;
        });
    }
}
