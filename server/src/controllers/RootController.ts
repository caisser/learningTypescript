import { get, controller, use } from './decorators/';
import { Request, Response, NextFunction } from 'express';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send('Not allowed');
}

@controller('')
class RootControler {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.status(200).send(`
        <div>
          <h1>Logged in</h2>
          <a href='/auth/logout'>Log out</a>
        </div>
      `);
    } else {
      res.status(200).send(`
        <div>
          <h1>You are not Logged in</h2>
          <a href='/login'>Log in</a>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Protected route');
  }
}
