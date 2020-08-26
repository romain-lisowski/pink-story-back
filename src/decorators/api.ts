import { applyDecorators, Header } from '@nestjs/common'

export function ApiHeaders() {
  return applyDecorators(
    // TODO: Fix allow origin
    Header('Access-Control-Allow-Origin', '*'),
    Header('Content-type', 'application/json'),
    Header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    ),
    Header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'),
  )
}
