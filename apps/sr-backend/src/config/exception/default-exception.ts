export const SWAGGER_RESPONSE = {
  '401': {
    status: 401,
    description: '인증 실패',
    schema: {
      example: {
        statusCode: 401,
        type: 'UnauthorizedException',
        title: 'Unauthorized'
      }
    }
  },
  '403': {
    status: 403,
    description: '권한 없음',
    schema: {
      example: {
        statusCode: 403,
        type: 'ForbiddenException',
        title: 'Forbidden resource'
      }
    }
  },
  '404': {
    status: 404,
    description: 'Not Found',
    schema: {
      example: {
        statusCode: 404,
        type: 'NotFoundException',
        title: 'Cannot GET /exception'
      }
    }
  }
};
