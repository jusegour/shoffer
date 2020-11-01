import { setAccessToken } from '@app/auth';
import { ConsumidorService } from '@app/core/services/consumidor.service';

export function appInitializer(consumidorService: ConsumidorService) {
  return () =>
    new Promise(resolve => {
      consumidorService.refreshToken().subscribe(
        data => {
          setAccessToken(data.accessToken);
        },
        err => {
          console.log(err);
        }
      );
      resolve();
    });
}
