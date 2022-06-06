import { Request, Response } from '@umijs/deps/compiled/express';

export default {
  'POST /api/user': (req: Request, res: Response) => {
    res.send({
      success: true,
      data: {
        name: 'evan',
        age: 26,
      },
    });
  },
};
